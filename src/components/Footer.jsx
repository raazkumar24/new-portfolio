import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="mt-2 text-gray-400 dark:text-gray-300 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white dark:hover:text-indigo-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white dark:hover:text-indigo-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white dark:hover:text-indigo-300 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaXTwitter size={24} />
            </a>
            <a 
              href="mailto:youremail@example.com" 
              className="text-gray-400 hover:text-white dark:hover:text-indigo-300 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Raj Shekhar. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-indigo-300 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-white dark:hover:text-indigo-300 text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;