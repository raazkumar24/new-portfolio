/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiSend, FiMapPin, FiPhone, FiMail, FiGithub, FiLinkedin, FiTwitter, FiCodepen, FiCheckCircle } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { contactMethods, socialLinks } from '../data/contactData';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const getIconComponent = (iconName, size = 24, color = '') => {
    const icons = {
      FiMapPin: <FiMapPin size={size} className={color} />,
      FiPhone: <FiPhone size={size} className={color} />,
      FiMail: <FiMail size={size} className={color} />,
      FiGithub: <FiGithub size={size} />,
      FiLinkedin: <FiLinkedin size={size} />,
      FiTwitter: <FaXTwitter size={size} />,
      FaTelegram: <FaTelegram size={size} />,
      FaWhatsapp: <FaWhatsapp size={size} />,
      FiCodepen: <FiCodepen size={size} />,
      FiCheckCircle: <FiCheckCircle size={size} />,
      FiSend: <FiSend size={size} />
    };
    return icons[iconName] || null;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800 dark:text-gray-200">Get In </span>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group"
                >
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                  >
                    <div className={`p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 ${method.color} dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-all`}>
                      {getIconComponent(method.icon, 24, method.color)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">{method.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{method.description}</p>
                    </div>
                    <span className="text-sm text-indigo-500 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {method.action} →
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-4">
              <h4 className="font-medium mb-4 text-gray-800 dark:text-gray-200">Connect With Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${social.color} transition-all shadow-sm hover:shadow-md`}
                    aria-label={social.name}
                  >
                    {getIconComponent(social.icon)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center p-8"
              >
                {getIconComponent('FiCheckCircle', 48, 'text-green-500')}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 bg-gray-50  text-gray-700 dark:text-gray-300 dark:bg-gray-700  border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700  text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700  text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: "Message is required" })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700  text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Hi Raj, I'd like to discuss..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
                >
                  {getIconComponent('FiSend')}
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;