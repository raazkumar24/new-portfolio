/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
// Fi icons for external links and UI actions
import { FiGithub, FiExternalLink, FiFilter, FiChevronDown, FiChevronUp } from 'react-icons/fi';
// Fa and Si icons for tech stack representation
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase, SiGraphql, SiNextdotjs, SiRedux } from 'react-icons/si';
// Data import: Assuming projects is an array of project objects and filters is an array of filter objects
import { projects, filters } from '../data/projectsData';

/**
 * Projects Component - Displays a portfolio of projects with filtering, featuring, 
 * and expandable detail functionality.
 */
const Projects = () => {
  // State for the currently active technology filter ('all' is the default)
  const [activeFilter, setActiveFilter] = useState('all');
  // State to toggle between showing only featured projects and all projects
  const [viewAll, setViewAll] = useState(false);
  // State to track which project's details are currently expanded
  const [expandedProject, setExpandedProject] = useState(null);

  // 1. Filtering Logic: Filters projects based on the activeFilter tag
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  // 2. Display Logic: Shows either all filtered projects or just the featured ones, based on viewAll state
  const displayedProjects = viewAll 
    ? filteredProjects 
    : filteredProjects.filter(project => project.featured);

  // Utility function to get an icon component by its string name
  const getIconComponent = (iconName, size = 20, className = '') => {
    const icons = {
      // Mapping string names to React-Icon components with default styling
      FaReact: <FaReact size={size} className={`text-blue-400 ${className}`} />,
      FaNodeJs: <FaNodeJs size={size} className={`text-green-500 ${className}`} />,
      SiTypescript: <SiTypescript size={size} className={`text-blue-600 ${className}`} />,
      SiTailwindcss: <SiTailwindcss size={size} className={`text-cyan-400 ${className}`} />,
      SiFirebase: <SiFirebase size={size} className={`text-orange-400 ${className}`} />,
      FaFigma: <FaFigma size={size} className={`text-purple-500 ${className}`} />,
      SiNextdotjs: <SiNextdotjs size={size} className={`text-gray-100 ${className}`} />,
      SiRedux: <SiRedux size={size} className={`text-purple-400 ${className}`} />,
      SiGraphql: <SiGraphql size={size} className={`text-pink-500 ${className}`} />,
      FiGithub: <FiGithub size={size} className={className} />,
      FiExternalLink: <FiExternalLink size={size} className={className} />,
      FiFilter: <FiFilter size={size} className={className} />,
      FiChevronDown: <FiChevronDown size={size} className={className} />,
      FiChevronUp: <FiChevronUp size={size} className={className} />
    };
    // Return the icon or a fallback emoji/tool icon
    return icons[iconName] || <span className={`text-lg ${className}`}>{iconName === '✨' ? '✨' : '🛠️'}</span>;
  };

  // Function to specifically get technology icons for tags (used in project cards)
  const getTechIcon = (tech) => {
    switch(tech) {
      // Case mapping for technologies that use icon components
      case 'react': return getIconComponent('FaReact');
      case 'node': return getIconComponent('FaNodeJs');
      case 'typescript': return getIconComponent('SiTypescript');
      case 'tailwind': return getIconComponent('SiTailwindcss');
      case 'firebase': return getIconComponent('SiFirebase');
      case 'figma': return getIconComponent('FaFigma');
      case 'nextjs': return getIconComponent('SiNextdotjs');
      case 'redux': return getIconComponent('SiRedux');
      case 'graphql': return getIconComponent('SiGraphql');
      // Special case for MongoDB (using colored text label)
      case 'mongodb': return <span className="text-green-600 dark:text-green-400">MongoDB</span>;
      default: return <span className="text-gray-300 dark:text-gray-500">🛠️</span>;
    }
  };

  // Toggles the expansion state of a project's detailed view
  const toggleExpandProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    // Main Section with gradient background for visual separation
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Framer Motion animations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} // Animates only once when it comes into view
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800 dark:text-gray-200">My </span>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my selected works. Each project represents unique challenges and creative solutions.
          </p>
        </motion.div>

        {/* Filter buttons for project categories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12 px-4"
        >
          {filters.map(filter => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-4 py-2 rounded-full transition-all ${
                activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' // Active style
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm border border-gray-200 dark:border-gray-700' // Inactive style
              }`}
            >
              <span className="mr-2">{getIconComponent(filter.icon, 20)}</span>
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }} // Animate once per project when 20% visible
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-indigo-300 active:border-indigo-300 dark:hover:border-indigo-500 dark:active:border-indigo-500 shadow-md hover:shadow-lg dark:hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image/Placeholder Area */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    // Placeholder for projects without an image URL
                    <div className="w-full h-full flex items-center justify-center text-gray-300 dark:text-gray-600">
                      {getIconComponent('✨', 40)}
                    </div>
                  )}
                </div>
                
                {/* Technology Tags Overlay */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs flex items-center shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                      {getTechIcon(tag)} {/* Displays the appropriate icon */}
                      <span className="ml-1 text-gray-700 dark:text-gray-300">{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  {/* Featured Status Badge */}
                  <span className="text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
                    {project.featured ? 'Featured' : 'Side Project'}
                  </span>
                </div>
                
                {/* Short Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleExpandProject(project.id)}
                  className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium mb-4"
                >
                  {expandedProject === project.id ? (
                    <>
                      <span>Show less</span>
                      {getIconComponent('FiChevronUp', 16, 'ml-1')}
                    </>
                  ) : (
                    <>
                      <span>Show details</span>
                      {getIconComponent('FiChevronDown', 16, 'ml-1')}
                    </>
                  )}
                </button>

                {/* Expanded Details Section (Animated) */}
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
                      <ul className="space-y-2 mb-4">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                            <span className="text-indigo-500 dark:text-indigo-400 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {/* Detailed Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.detailedDescription}</p>
                    </div>
                  </motion.div>
                )}

                {/* Project Links (GitHub and Live Demo) */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      {getIconComponent('FiGithub', 20)}
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                      aria-label="Live Demo Link"
                    >
                      {getIconComponent('FiExternalLink', 20)}
                    </a>
                  </div>
                  {/* Technology Summary (Text) */}
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.tags.map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(' • ')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button (Visible only if not all projects are currently shown) */}
        {!viewAll && filteredProjects.length > 3 && ( // Check if there are more than 3 projects to show
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setViewAll(true)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all"
            >
              {getIconComponent('FiFilter', 20, 'mr-2')}
              <span>View All Projects</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;