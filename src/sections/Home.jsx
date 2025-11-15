/* eslint-disable no-unused-vars */
// Basic React Hooks imports
import { useEffect, useRef, useCallback } from "react";
// Framer Motion for powerful animations
import { motion } from "framer-motion";
// External data for social links (assuming path is correct)
import { socialLinks } from "../data/socialLinks";

// Import all necessary icons from various React Icon libraries
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowRight,
  FiCode, // General coding icon
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6"; // Updated Twitter icon
import { DiReact, DiGithubAlt } from "react-icons/di"; // Devicons for tech logos
import { SiFigma } from "react-icons/si"; // Simple Icons for modern tools

// Import utility components (assuming correct paths)
import Button from "../components/Button";
import AnimateBg from "../components/AnimateBg";

/**
 * Home Component - The main landing section of the portfolio.
 * Features: Framer Motion animations, Typewriter effect, and dynamic profile card styling.
 */
const Home = () => {
  // Ref to target the <h2> element for the Typewriter effect
  const textRef = useRef(null);

  // --- Framer Motion Animation Configurations ---

  // Container variant to handle staggered entrance of child elements
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child item's animation
        delayChildren: 0.3, // Initial delay before first child starts
      },
    },
  };

  // Individual item variant for a smooth lift-up entrance effect
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a spring-like feel
      },
    },
  };

  // --- Typewriter Effect Logic ---
  useEffect(() => {
    const texts = [
      "Frontend Developer",
      "UI/UX Designer",
      "React Specialist",
      "Creative Coder",
    ];
    let textIndex = 0; // Index for the 'texts' array
    let charIndex = 0; // Index for the characters in the current phrase
    let currentPhrase = "";
    let isDeleting = false; // Flag to check if text is being deleted or typed
    let typingDelay = 100;
    let timerId;

    const typeWriter = () => {
      // Exit if the ref isn't available (e.g., component unmounted)
      if (!textRef.current) return;

      // Loop back to the first phrase after finishing the list
      if (textIndex === texts.length) textIndex = 0;
      currentPhrase = texts[textIndex];

      if (isDeleting) {
        // Deleting: Show one less character
        textRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50; // Faster deletion speed
      } else {
        // Typing: Show one more character
        textRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100; // Normal typing speed
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at the end of the phrase, then switch to deleting mode
        typingDelay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, switch to typing mode for the next phrase
        isDeleting = false;
        textIndex++;
        typingDelay = 500; // Pause before starting the next phrase
      }

      // Schedule the next character update
      timerId = setTimeout(typeWriter, typingDelay);
    };

    typeWriter();

    // Cleanup function: Clear timeout when component unmounts to prevent memory leaks
    return () => clearTimeout(timerId);
  }, []); // Run only once on mount

  // --- Social Icon Mapping Logic (Optimized with useCallback) ---
  const getIconComponent = useCallback((iconName, size) => {
    // Map icon names from socialLinks data to actual React Icon components
    const icons = {
      FiGithub: <FiGithub size={size} />,
      FiLinkedin: <FiLinkedin size={size} />,
      FiTwitter: <FaXTwitter size={size} />, // Uses the FaXTwitter component
      FiMail: <FiMail size={size} />,
    };
    return icons[iconName] || null;
  }, []); // Empty dependency array means this function is memoized

  // --- Floating Badges Configuration (SVG icons with color theme matching) ---
  const floatingBadges = [
    {
      // React Icon - Cyan theme
      icon: <DiReact size={30} className="text-cyan-600 dark:text-cyan-400" />,
      position: "top-4 left-4",
      color:
        "bg-cyan-500/20 border-cyan-400/30 dark:bg-cyan-600/30 dark:border-cyan-500/40",
    },
    {
      // FiCode Icon - Purple theme (General dev/code)
      icon: (
        <FiCode size={24} className="text-purple-600 dark:text-purple-400" />
      ),
      position: "bottom-4 right-4",
      color:
        "bg-purple-500/20 border-purple-400/30 dark:bg-purple-600/30 dark:border-purple-500/40",
    },
    {
      // GitHub Icon - Neutral Gray theme
      icon: (
        <DiGithubAlt size={24} className="text-gray-800 dark:text-gray-400" />
      ),
      position: "top-4 right-4",
      color:
        "bg-gray-500/20 border-gray-400/30 dark:bg-gray-600/30 dark:border-gray-500/40",
    },
    {
      // Figma Icon - Pink theme (Design tool)
      icon: <SiFigma size={24} className="text-pink-600 dark:text-pink-400" />,
      position: "bottom-4 left-4",
      color:
        "bg-pink-500/20 border-pink-400/30 dark:bg-pink-600/30 dark:border-pink-500/40",
    },
  ];

  // --- Component Render ---
  return (
    <section
      id="home"
      // Full screen container with background gradient and overflow handling
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background shape animation component (assuming it handles background effects) */}
      <AnimateBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          // Responsive layout: reverse column on mobile, row on large screens
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Text content area */}
          <div className="text-center lg:text-left lg:w-1/2">
            {/* Welcome Badge */}
            <motion.div variants={item}>
              <div className="inline-block px-4 py-2 mb-6 bg-indigo-100 rounded-full border border-indigo-200 dark:bg-indigo-900/30 dark:border-indigo-800">
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Welcome to my portfolio
                </span>
              </div>
            </motion.div>

            {/* Main Name/Title */}
            <motion.div variants={item}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 lg:mb-4 sm:mb-6 leading-tight name-container">
                <span className="text-gray-800 dark:text-gray-200">
                  Hi, I'm{" "}
                </span>
                {/* Gradient text effect for the name */}
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-500">
                  Raj Shekhar
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Text Display */}
            <motion.div variants={item}>
              <h2
                ref={textRef}
                className="typewriter text-2xl sm:text-3xl md:text-4xl font-medium text-gray-600 dark:text-gray-400 mb-4 lg:mb-8 h-12"
              ></h2>
            </motion.div>

            {/* CTA Buttons - Responsive stacking on small screens */}
            <motion.div
              variants={item}
              className="flex flex-row justify-center lg:justify-start gap-4 mb-12 w-full max-w-sm sm:max-w-none mx-auto lg:mx-0"
            >
              {/* Primary button (Download CV) */}
              <Button
                variant="primary"
                size="lg"
                className="group w-full sm:w-auto"
                as="a"
                href="cv.pdf"
                download="cv.pdf"
              >
                <span className="flex items-center justify-center">
                  <FiDownload className="mr-3 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-1 group-active:translate-y-1" />
                  <span className="text-xs sm:text-base">Download CV</span>
                  <FiArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 opacity-0 transition-all group-hover:opacity-100 group-hover:ml-3 group-active:opacity-100 group-active:ml-3" />
                </span>
              </Button>

              {/* Secondary button (Contact Me) - Scrolls to contact section */}
              <Button
                variant="secondary"
                size="lg"
                className="group w-full sm:w-auto"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="flex items-center justify-center">
                  <span className="text-xs sm:text-base">Contact Me</span>
                  <FiArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 opacity-0 transition-all group-hover:opacity-100 group-active:opacity-100 group-hover:ml-3 group-focus:ml-3" />
                </span>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={item}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }} // Lift effect on hover
                  whileTap={{ scale: 0.9 }} // Press down effect on tap
                  className={`text-gray-500 dark:text-gray-400 ${social.color} transition-colors duration-300`}
                  aria-label={social.name}
                >
                  {getIconComponent(social.icon, social.size)}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <motion.div
            className="relative lg:w-1/2 flex justify-center profile-container"
            variants={item}
            whileHover="hover"
            whileTap="hover"
          >
            {/* Fixed size container for the image and effects */}
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Main circular image container */}
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden shadow-xl border-8 border-white/90 backdrop-blur-sm dark:border-gray-800/90"
                initial={false}
              >
                <img
                  src="/Avatar.jpg"
                  alt="Raj Shekhar"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Animated Dashed Border (The new visual flair) */}
              <motion.div
                // Positioning slightly outside the main image
                className="absolute inset-[-10px] sm:inset-[-12px] md:inset-[-16px] rounded-full border-2 border-dashed border-indigo-400/70 dark:border-indigo-600/70 pointer-events-none"
                // Continuous 360-degree rotation animation
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner glowing effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                variants={{
                  hover: {
                    // Animated inner shadow effect
                    boxShadow: [
                      "inset 0 0 20px 5px rgba(99,102,241,0.1)",
                      "inset 0 0 30px 10px rgba(99,102,241,0.15)",
                      "inset 0 0 20px 5px rgba(99,102,241,0.1)",
                    ],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                    },
                  },
                }}
              />

              {/* Floating abstract shapes (Background depth) */}
              <motion.div
                className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-indigo-400/20 backdrop-blur-sm floating-shape z-[-1] opacity-70"
                animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-28 h-28 rotate-12 rounded-full bg-purple-400/20 backdrop-blur-sm floating-shape z-[-1] opacity-70"
                animate={{
                  y: [0, 15, 0],
                  x: [0, 10, 0],
                  rotate: [12, 18, 12],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Tech Badges - Floating and bouncing icons */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${badge.position} w-10 h-10 md:w-14 md:h-14 ${badge.color} backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border tech-badge`}
                  // Initial hidden state with rotation
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    y: [0, -8, 0], // Gentle vertical bounce animation
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3 + index * 0.1, // Staggered entry
                    y: {
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, 15, -15, 0], // Playful rotation on hover
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{
                    scale: 0.9,
                    rotate: [0, -15, 15, 0], // Press effect on tap
                    transition: { duration: 0.3 },
                  }}
                >
                  {badge.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - Bottom animation cue */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        // Fade in and vertically pulse animation
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-indigo-300 dark:border-indigo-500 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 sm:h-3 bg-gradient-to-b from-indigo-400 to-purple-500 dark:from-indigo-300 dark:to-purple-400 rounded-full mt-1"
              // Pulsing dot inside the scroll container
              animate={{ y: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
          </div>
          <span className="mt-1 sm:mt-2 text-xs text-indigo-500/80 dark:text-indigo-400/80 tracking-widest">
            SCROLL DOWN
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
