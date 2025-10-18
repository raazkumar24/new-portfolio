/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";

const AnimateBg = ({
  particleDensity = 15,
  maxConnections = 20,
  maxDistance = 150,
  opacity = 0.8,
  enableMouseInteraction = false
}) => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const isInViewport = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles = [];
    const particleCount = Math.floor(width / particleDensity);

    const isDarkMode = () =>
      document.documentElement.classList.contains("dark");

    // Color palettes for light and dark mode
    const lightColors = [
      "rgba(99, 102, 241, 0.4)",  // indigo-500
      "rgba(124, 58, 237, 0.35)", // purple-600
      "rgba(217, 70, 239, 0.3)",  // pink-500
    ];

    const darkColors = [
      "rgba(129, 140, 248, 0.4)",  // indigo-400
      "rgba(168, 85, 247, 0.35)",  // purple-500
      "rgba(232, 121, 249, 0.3)",  // pink-400
    ];

    let colors = isDarkMode() ? darkColors : lightColors;

    // Debounce resize handler
    const debounce = (func, delay) => {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
      };
    };

    const handleResize = debounce(() => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, 100);

    class Particle {
      constructor() {
        this.z = Math.random();
        this.reset();
        this.y = Math.random() * height;
        this.baseSize = Math.random() * 2.5 + 1.5;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -10;
        this.size = this.baseSize * (0.8 + this.z * 0.4);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = 0.3 + this.z * 0.7;
        this.angle = Math.random() * Math.PI * 2;
        this.wobble = Math.random() * 3;
        this.wobbleSpeed = Math.random() * 0.03 + 0.02;
      }

      update(now) {
        this.y += this.speed;
        this.angle += this.wobbleSpeed;
        this.x += Math.sin(this.angle) * this.wobble;
        this.size = this.baseSize * (0.9 + Math.sin(now * 0.002) * 0.2);

        if (enableMouseInteraction) {
          const dx = this.x - mouse.current.x;
          const dy = this.y - mouse.current.y;
          const mouseDist = Math.sqrt(dx * dx + dy * dy);
          if (mouseDist < 100) {
            this.x += dx / mouseDist * 2;
            this.y += dy / mouseDist * 2;
          }
        }

        if (this.y > height + 20) {
          this.reset();
          this.x = Math.random() * width;
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Connection {
      static draw(ctx, particles) {
        for (let i = 0; i < particles.length; i += 2) {
          for (
            let j = i + 1;
            j < Math.min(i + maxConnections, particles.length);
            j++
          ) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              const opacity = (1 - distance / maxDistance) * 
                              Math.min(particles[i].z, particles[j].z);
              ctx.strokeStyle = isDarkMode()
                ? `rgba(168, 85, 247, ${opacity * 0.3})`
                : `rgba(124, 58, 237, ${opacity * 0.25})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = (timestamp) => {
      if (!isInViewport.current) {
        requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      if (isDarkMode()) {
        gradient.addColorStop(0, "rgba(17, 24, 39, 0.6)");
        gradient.addColorStop(1, "rgba(30, 41, 59, 0.6)");
      } else {
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.6)");
        gradient.addColorStop(1, "rgba(249, 250, 251, 0.6)");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update(timestamp);
        p.draw(ctx);
      });

      Connection.draw(ctx, particles);

      requestAnimationFrame(animate);
    };

    // Handle theme changes
    const observer = new MutationObserver(() => {
      colors = isDarkMode() ? darkColors : lightColors;
      particles.forEach(p => {
        p.color = colors[Math.floor(Math.random() * colors.length)];
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Handle visibility changes
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isInViewport.current = entry.isIntersecting;
    });
    
    if (canvasRef.current) {
      visibilityObserver.observe(canvasRef.current);
    }

    // Handle mouse movement if enabled
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    if (enableMouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    init();
    animate(0);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      visibilityObserver.disconnect();
      if (enableMouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [particleDensity, maxConnections, maxDistance, enableMouseInteraction]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity }}
    />
  );
};

export default AnimateBg;