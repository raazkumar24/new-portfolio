/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
// Fi icons for tabs and UI
import { FiAward, FiUser, FiCode, FiBriefcase, FiExternalLink } from 'react-icons/fi';

// Tech Stack Icons
import { FaReact, FaNodeJs, FaFigma, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVite, SiMongodb } from 'react-icons/si';
import { DiJqueryLogo } from 'react-icons/di';

/**
 * About Component - Displays personal, educational, and professional details via a tabbed interface.
 */
const About = () => {
  // State for active tab, defaults to 'skills'
  const [activeTab, setActiveTab] = useState('skills');

  // Animation variants for container (staggered entrance)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Animation variants for individual items (lift-up effect)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Tab configuration
  const tabs = [
    { id: 'skills', icon: <FiCode size={18} />, label: 'Skills' },
    { id: 'education', icon: <FiAward size={18} />, label: 'Education' },
    { id: 'experience', icon: <FiBriefcase size={18} />, label: 'Experience' },
    { id: 'personal', icon: <FiUser size={18} />, label: 'Personal' }
  ];

  // Function to get technology icon based on string name
  const getTechIcon = (tech) => {
    const techIcons = {
      'react': <FaReact className="text-blue-400 dark:text-blue-400" />,
      'node.js': <FaNodeJs className="text-green-500 dark:text-green-400" />,
      'typescript': <SiTypescript className="text-blue-600 dark:text-blue-400" />,
      'tailwind css': <SiTailwindcss className="text-cyan-400 dark:text-cyan-300" />,
      'figma': <FaFigma className="text-purple-500 dark:text-purple-400" />,
      'mongodb': <SiMongodb className="text-green-700 dark:text-green-500" />,
      'bootstrap': <FaBootstrap className="text-purple-700 dark:text-purple-400" />,
      'vite': <SiVite className="text-yellow-600 dark:text-yellow-400" />,
      'jquery': <DiJqueryLogo className="text-blue-600 dark:text-blue-500" />,
      'next.js': <span className="text-gray-800 dark:text-gray-200">Next.js</span>,
      'javascript': <span className="text-yellow-400">JS</span>,
      'git': <span className="text-orange-500">Git</span>
    };
    return techIcons[tech.toLowerCase()] || <span className="text-gray-500 dark:text-gray-400">🛠️</span>;
  };

  // =======================================================================
  // TEMPORARILY COMMENTED OUT: Previous professional experience data.
  // This array can be uncommented and used when actual job experience is gained.
  // =======================================================================
  /*
  const previousExperienceData = [
    {
      role: 'Frontend Developer',
      company: 'TechCorp',
      website: 'https://techcorp.example',
      period: '2021-Present',
      responsibilities: [
        'Developed responsive web applications using React and TypeScript',
        'Collaborated with UX designers to implement pixel-perfect interfaces',
        'Optimized application performance using Vite bundling',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    {
      role: 'Junior Developer',
      company: 'WebSolutions',
      website: 'https://websolutions.example',
      period: '2019-2021',
      responsibilities: [
        'Built and maintained client websites using modern JavaScript and jQuery',
        'Implemented RESTful APIs with Node.js and MongoDB',
        'Designed responsive layouts using Bootstrap and custom CSS',
        'Improved CI/CD pipeline reducing deployment time by 30%'
      ],
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Bootstrap', 'jQuery']
    }
  ];
  */
  // =======================================================================


  // Tab content configuration
  const tabContent = {
    skills: (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {[
          'React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 
          'Node.js', 'Next.js', 'Bootstrap', 'Vite',
          'Figma', 'MongoDB', 'jQuery', 'Git'
        ].map((skill, index) => (
          <motion.div 
            key={skill}
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              boxShadow: '0 10px 20px rgba(99, 102, 241, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl flex flex-col items-center border border-gray-200 dark:border-gray-700 hover:border-indigo-300 active:border-indigo-300 dark:hover:border-indigo-500 dark:active:border-indigo-500 transition-all shadow-sm hover:shadow-md"
            role="button"
            tabIndex={0}
            aria-label={`Skill: ${skill}`}
          >
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-2">
              {getTechIcon(skill)}
            </div>
            <span className="font-medium text-gray-700 dark:text-gray-200 text-center">{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    ),
    education: (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {[
          { 
            degree: 'Bachelor of Computer Applications (BCA)', 
            institution: 'Chandigarh University', 
            year: '2023 - Present',
            description: 'Focusing on Web Development, Data Structures, and Software Engineering principles.',
            achievements: [
              'Currently maintaining a high GPA (if applicable)',
              'Actively participating in coding contests and tech societies',
              'Building portfolio projects using React and Node.js'
            ]
          },
          { 
            degree: 'Higher Secondary School Certificate (12th Grade, CBSE)', 
            institution: 'CBSE Board', 
            year: '2023',
            description: 'Completed 12th grade (Specify Stream) with a focus on core subjects.',
            achievements: [
              'Scored 60% aggregate marks.',
              'Gained foundational knowledge in Computer Science and Mathematics.'
            ]
          },
          { 
            degree: 'Secondary School Certificate (10th Grade, CBSE)', 
            institution: 'CBSE Board', 
            year: '2021',
            description: 'Cleared 10th grade examination.',
            achievements: [
              'Scored 70% aggregate marks.',
              'Developed strong fundamental skills in core subjects.'
            ]
          }
        ].map((edu, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 active:border-indigo-300 focus:border-indigo-500 dark:hover:border-indigo-500 dark:active:border-indigo-300 transition-all shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                <p className="text-indigo-600 dark:text-indigo-400">{edu.institution}</p>
              </div>
              <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm">
                {edu.year}
              </span>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300">{edu.description}</p>
            <div className="mt-4">
              <h4 className="font-medium text-sm text-indigo-600 dark:text-indigo-400 mb-2">Key Achievements:</h4>
              <ul className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-indigo-500 dark:text-indigo-400 mr-2 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    // EXPERIENCE TAB: Focused on projects and self-learning
    experience: (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
      <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-dashed border-indigo-400/50 dark:border-indigo-600/50 shadow-lg text-center"
        >
          <FiCode size={40} className="text-indigo-500 dark:text-indigo-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Focus on Personal Projects & Practice
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I am currently seeking my first professional role, spending my time intensively practicing modern web development techniques by building and deploying diverse personal projects.
          </p>
          <ul className="text-left space-y-2 max-w-md mx-auto">
            <li className="flex items-start text-gray-700 dark:text-gray-300">
              <span className="text-indigo-500 dark:text-indigo-400 mr-2 mt-1">✓</span>
              {/* CORRECTED: Replaced markdown ** with <strong> and Tailwind class for bolding */}
              <span>
                <strong className="font-semibold">Self-Directed Learning:</strong> Mastered the React ecosystem, including state management and routing.
              </span>
            </li>
            <li className="flex items-start text-gray-700 dark:text-gray-300">
              <span className="text-indigo-500 dark:text-indigo-400 mr-2 mt-1">✓</span>
              {/* CORRECTED: Replaced markdown ** with <strong> and Tailwind class for bolding */}
              <span>
                <strong className="font-semibold">Full-Stack Practice:</strong> Built several applications integrating the MERN stack (MongoDB, Express, React, Node.js).
              </span>
            </li>
            <li className="flex items-start text-gray-700 dark:text-gray-300">
              <span className="text-indigo-500 dark:text-indigo-400 mr-2 mt-1">✓</span>
              {/* CORRECTED: Replaced markdown ** with <strong> and Tailwind class for bolding */}
              <span>
                <strong className="font-semibold">Design Implementation:</strong> Focused on replicating modern UI/UX principles using Tailwind CSS and Figma designs.
              </span>
            </li>
            <li className="flex items-start text-gray-700 dark:text-gray-300">
              <span className="text-indigo-500 dark:text-indigo-400 mr-2 mt-1">✓</span>
              {/* CORRECTED: Replaced markdown ** with <strong> and Tailwind class for bolding */}
              <span>
                <strong className="font-semibold">Code Quality:</strong> Dedicated to writing clean, maintainable, and type-safe code with TypeScript.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Check out my GitHub and Portfolio sections for practical examples of my work!
          </p>
        </motion.div>
      </motion.div>
    ),
    // PERSONAL TAB: Updated languages and hobbies
    personal: (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-6"
      >
        <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 active:border-indigo-300 dark:hover:border-indigo-500 dark:active:border-indigo-500 transition-all shadow-sm"
        >
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm a passionate frontend developer currently building my foundation in the <strong className="font-semibold">React</strong> ecosystem and modern <strong className="font-semibold">TypeScript</strong> frameworks. I focus on creating beautiful, functional web applications with a strong emphasis on performance and accessibility.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            My approach combines technical curiosity with creative problem-solving. I am dedicated to writing clean, maintainable code and building robust full-stack features using <strong className="font-semibold">Node.js</strong> and <strong className="font-semibold">MongoDB</strong>.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, 
            or experimenting with new cooking recipes. I'm also an amateur photographer and enjoy 
            capturing landscapes during my travels.
          </p>
        </motion.div>
        <div className="space-y-6">
          {[
            { 
              title: 'Languages', 
              icon: '🗣️',
              items: [
                { name: 'English', level: 'Fluent' },
                { name: 'Hindi', level: 'Native' },
              ] 
            },
            { 
              title: 'Hobbies', 
              icon: '🕹️', 
              items: ['Photography', 'Video Games', 'Traveling', '3D Modeling', 'Cooking'] 
            },
            { 
              title: 'Values', 
              icon: '✨',
              items: ['Continuous Learning', 'Teamwork', 'Attention to Detail', 'Creative Problem Solving'] 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 active:border-indigo-300 dark:hover:border-indigo-500 dark:active:border-indigo-500 transition-all shadow-sm"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3" role="img" aria-label={item.title}>{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
              </div>
              {item.title === 'Languages' ? (
                <div className="space-y-3">
                  {item.items.map((lang, i) => (
                    <div key={i} className="flex items-center">
                      <span className="w-24 text-gray-600 dark:text-gray-300">{lang.name}</span>
                      <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-purple-500" 
                          style={{ 
                            // Simplified width logic for Fluent/Native (100%)
                            width: lang.level === 'Fluent' || lang.level === 'Native' ? '100%' : '50%'
                          }}
                          aria-label={`${lang.name} proficiency: ${lang.level}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {item.items.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800 dark:text-white">About </span>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover my journey, skills, and what drives me as a developer
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg group">
              {/* Profile image with fallback */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img 
                  src="Profile-img.jpg" 
                  alt="Raj Shekhar - Frontend Developer"
                  className="w-full h-full object-cover group-hover:scale-105 hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23aaa" font-family="sans-serif" font-size="16" dy=".35em" text-anchor="middle" x="100" y="100"%3E200×200%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-500/20 backdrop-blur-sm rounded-xl rotate-12 flex items-center justify-center border border-white/20 dark:border-gray-700/30 shadow-lg group-hover:rotate-0 transition-all duration-500">
                <span className="text-3xl" role="img" aria-hidden="true">💻</span>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/10 dark:bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 dark:border-gray-700/30 shadow-lg group-hover:scale-110 transition-all duration-500">
                <span className="text-2xl" role="img" aria-hidden="true">✨</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
              <div className="flex space-x-1 bg-white dark:bg-gray-800 rounded-xl p-1 border border-gray-200 dark:border-gray-700 shadow-sm">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveTab(tab.id);
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all ${activeTab === tab.id ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    aria-label={`Show ${tab.label} tab`}
                    aria-selected={activeTab === tab.id}
                    role="tab"
                  >
                    <span className="mr-2">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
            >
              {tabContent[activeTab]}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



// experience: (
//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="relative"
//       >
//         <div className="absolute left-6 h-full w-0.5 bg-gradient-to-b from-indigo-200 to-purple-200 dark:from-indigo-800/50 dark:to-purple-800/50 top-0"></div>
//         <div className="space-y-8">
//           {[
//             {
//               role: 'Frontend Developer',
//               company: 'TechCorp',
//               website: 'https://techcorp.example',
//               period: '2021-Present',
//               responsibilities: [
//                 'Developed responsive web applications using React and TypeScript',
//                 'Collaborated with UX designers to implement pixel-perfect interfaces',
//                 'Optimized application performance using Vite bundling',
//                 'Mentored junior developers and conducted code reviews'
//               ],
//               technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
//             },
//             {
//               role: 'Junior Developer',
//               company: 'WebSolutions',
//               website: 'https://websolutions.example',
//               period: '2019-2021',
//               responsibilities: [
//                 'Built and maintained client websites using modern JavaScript and jQuery',
//                 'Implemented RESTful APIs with Node.js and MongoDB',
//                 'Designed responsive layouts using Bootstrap and custom CSS',
//                 'Improved CI/CD pipeline reducing deployment time by 30%'
//               ],
//               technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Bootstrap', 'jQuery']
//             }
//           ].map((exp, index) => (
//             <motion.div 
//               key={index}
//               variants={itemVariants}
//               transition={{ delay: index * 0.1 }}
//               className="relative pl-12 group"
//             >
//               <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-indigo-500 dark:to-purple-500 border-4 border-white dark:border-gray-800 shadow-sm group-hover:scale-125 group-focus:scale-125 group-active:scale-125 transition-transform"></div>
//               <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 active:border-indigo-300 dark:hover:border-indigo-500 dark:active:border-indigo-500 transition-all shadow-sm">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
//                     <div className="flex items-center">
//                       <p className="text-indigo-600 dark:text-indigo-400">{exp.company}</p>
//                       <a 
//                         href={exp.website} 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         className="ml-2 text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
//                         aria-label={`Visit ${exp.company} website`}
//                       >
//                         <FiExternalLink size={14} />
//                       </a>
//                     </div>
//                   </div>
//                   <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm">
//                     {exp.period}
//                   </span>
//                 </div>
//                 <ul className="mt-4 space-y-2">
//                   {exp.responsibilities.map((item, i) => (
//                     <li key={i} className="flex items-start">
//                       <span className="text-indigo-500 dark:text-indigo-400 mr-2 mt-1">•</span>
//                       <span className="text-gray-600 dark:text-gray-300">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {exp.technologies.map((tech, i) => (
//                     <span 
//                       key={i} 
//                       className="flex items-center bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm"
//                     >
//                       {getTechIcon(tech)}
//                       <span className="ml-1">{tech}</span>
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     ),