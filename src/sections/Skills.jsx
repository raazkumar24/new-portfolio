/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayers, FiCpu, FiPenTool } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaFigma, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase, SiGraphql, SiJest, SiNextdotjs, SiRedux, SiGit, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <FiCode className="text-indigo-500" size={24} />,
      skills: [
        { name: 'React', level: 95, icon: <FaReact className="text-blue-400" /> },
        { name: 'TypeScript', level: 90, icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Next.js', level: 85, icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
        { name: 'Tailwind CSS', level: 92, icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'Redux', level: 40, icon: <SiRedux className="text-purple-500" /> }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <FiDatabase className="text-purple-500" size={24} />,
      skills: [
        { name: 'Node.js', level: 90, icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express', level: 85, icon: <span className="text-gray-800 dark:text-gray-200">Express</span> },
        { name: 'GraphQL', level: 30, icon: <SiGraphql className="text-pink-500" /> },
        { name: 'Firebase', level: 75, icon: <SiFirebase className="text-orange-400" /> },
        { name: 'PostgreSQL', level: 52, icon: <SiPostgresql className="text-blue-600" /> }
      ]
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: <FiPenTool className="text-pink-500" size={24} />,
      skills: [
        { name: 'Figma', level: 85, icon: <FaFigma className="text-purple-500" /> },
        { name: 'Prototyping', level: 80, icon: <span className="text-blue-400">✏️</span> },
        { name: 'User Research', level: 75, icon: <span className="text-green-400">🔍</span> },
        { name: 'Design Systems', level: 70, icon: <span className="text-indigo-400">🎨</span> },
        { name: 'Accessibility', level: 78, icon: <span className="text-yellow-500">♿</span> }
      ]
    },
    {
      id: 'tools',
      title: 'Dev Tools & Testing',
      icon: <FiCpu className="text-cyan-500" size={24} />,
      skills: [
        { name: 'Git', level: 90, icon: <SiGit className="text-orange-500" /> },
        { name: 'Jest', level: 85, icon: <SiJest className="text-red-400" /> },
        { name: 'Docker', level: 55, icon: <FaDocker className="text-blue-500" /> },
        { name: 'CI/CD', level: 80, icon: <span className="text-green-500">🔄</span> },
        { name: 'Webpack', level: 78, icon: <span className="text-blue-400">📦</span> }
      ]
    }
  ];

  const otherSkills = [
    'JavaScript (ES6+)', 'HTML5 & CSS3', 'RESTful APIs', 'Responsive Design', 
    'Performance Optimization', 'Agile Methodologies', 'Scrum', 'JIRA',
    'Authentication', 'Web Security', 'PWAs', 'WebSockets', 'MongoDB',
    'State Management', 'Component Libraries', 'Storybook', 'SASS/SCSS'
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800 dark:text-gray-200">My </span>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to create exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          index % 4 === 0 ? 'bg-gradient-to-r from-indigo-400 to-indigo-600' :
                          index % 4 === 1 ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                          index % 4 === 2 ? 'bg-gradient-to-r from-pink-400 to-pink-600' : 
                          'bg-gradient-to-r from-cyan-400 to-cyan-600'
                        } group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-gray-800 dark:text-white">Other Technologies I've Worked With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full border border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-gray-700 dark:text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;