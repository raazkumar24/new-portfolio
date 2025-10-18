export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart functionality, user authentication, and payment processing.',
    detailedDescription: 'Developed a complete e-commerce solution with product listings, user accounts, and secure checkout. Implemented responsive design, performance optimizations, and integrated with Stripe API for payments.',
    tags: ['react', 'node', 'mongodb', 'tailwind'],
    image: '/Ecommerce-site.png',
    github: '#',
    live: '#',
    featured: true,
    features: [
      'Product catalog with filters',
      'User authentication system',
      'Shopping cart functionality',
      'Stripe payment integration',
      'Admin dashboard'
    ]
  },
  {
    id: 2,
    title: 'Portfolio Dashboard',
    description: 'Interactive dashboard for tracking personal investments with real-time data visualization.',
    detailedDescription: 'Created a comprehensive financial dashboard with real-time market data, portfolio tracking, and performance analytics. Integrated with multiple financial APIs and implemented secure user authentication.',
    tags: ['react', 'typescript', 'firebase', 'graphql'],
    image: '/PortfolioDashboard.png',
    github: '#',
    live: '#',
    featured: true,
    features: [
      'Real-time data visualization',
      'Portfolio performance tracking',
      'Interactive charts',
      'Secure authentication',
      'Responsive design'
    ]
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management system with drag-and-drop interface and team features.',
    detailedDescription: 'Built a Kanban-style task management application with drag-and-drop functionality, team collaboration features, and real-time updates. Implemented user roles, notifications, and activity tracking.',
    tags: ['react', 'tailwind', 'firebase', 'nextjs'],
    image: '/TaskManagement.png',
    github: '#',
    live: '#',
    featured: true,
    features: [
      'Drag-and-drop interface',
      'Team collaboration',
      'Real-time updates',
      'User roles & permissions',
      'Activity history'
    ]
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'Real-time weather application with 5-day forecasts and location-based services.',
    detailedDescription: 'Developed a weather application with accurate forecasts, location search, and severe weather alerts. Integrated with multiple weather APIs and implemented geolocation services.',
    tags: ['react', 'node', 'redux'],
    image: '/WeatherApp.png',
    github: '#',
    live: '#',
    featured: false,
    features: [
      '5-day weather forecast',
      'Location search',
      'Geolocation services',
      'Severe weather alerts',
      'Responsive design'
    ]
  },
  {
    id: 5,
    title: 'UI Component Library',
    description: 'Custom design system with reusable React components and Storybook documentation.',
    detailedDescription: 'Created a comprehensive UI component library with Storybook documentation, theme customization, and accessibility compliance. The library is used across multiple projects for design consistency.',
    tags: ['react', 'typescript', 'figma', 'storybook'],
    image: '/UIComponentLibrary.png',
    github: '#',
    live: '#',
    featured: false,
    features: [
      '50+ reusable components',
      'Storybook documentation',
      'Theme customization',
      'Accessibility compliant',
      'Design tokens'
    ]
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Mobile-friendly workout tracker with exercise database and progress analytics.',
    detailedDescription: 'Built a fitness tracking application with exercise library, workout logging, and progress analytics. Implemented data visualization for workout history and performance metrics.',
    tags: ['react', 'tailwind', 'firebase'],
    image: '/FitnessTracker.png',
    github: '#',
    live: '#',
    featured: false,
    features: [
      'Exercise database',
      'Workout logging',
      'Progress tracking',
      'Data visualization',
      'Mobile-first design'
    ]
  }
];

export const filters = [
  { id: 'all', label: 'All', icon: '✨' },
  { id: 'react', label: 'React', icon: 'FaReact' },
  { id: 'node', label: 'Node.js', icon: 'FaNodeJs' },
  { id: 'typescript', label: 'TypeScript', icon: 'SiTypescript' },
  { id: 'tailwind', label: 'Tailwind', icon: 'SiTailwindcss' },
  { id: 'firebase', label: 'Firebase', icon: 'SiFirebase' },
  { id: 'figma', label: 'Figma', icon: 'FaFigma' },
  { id: 'nextjs', label: 'Next.js', icon: 'SiNextdotjs' },
  { id: 'redux', label: 'Redux', icon: 'SiRedux' },
  { id: 'graphql', label: 'GraphQL', icon: 'SiGraphql' }
];