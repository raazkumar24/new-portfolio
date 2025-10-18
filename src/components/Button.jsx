import PropTypes from 'prop-types';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = `
    font-medium rounded-lg transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    active:scale-[0.98] touch-manipulation
    w-full sm:w-auto text-center
  `;

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base sm:text-sm md:text-base',
    lg: 'px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg',
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
      hover:from-indigo-700 hover:to-purple-700 
      dark:hover:from-indigo-500 dark:hover:to-purple-500
      shadow-md hover:shadow-lg active:shadow-inner
    `,
    secondary: `
      bg-white text-gray-800 border border-gray-300 
      hover:bg-gray-50 active:bg-gray-100 
      dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800
      shadow-sm
    `,
    ghost: `
      text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 
      dark:text-indigo-400 dark:hover:bg-indigo-900/30
    `,
    dark: `
      bg-gray-900 text-white hover:bg-gray-800 
      dark:bg-gray-800 dark:hover:bg-gray-700
      shadow-md
    `,
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'dark']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Button;