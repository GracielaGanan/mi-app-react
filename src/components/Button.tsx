import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'destructive';
  rounded?: boolean;
}

export const Button = ({ 
  variant = 'primary', 
  rounded = false, 
  children,
  ...props
}: ButtonProps) => {
  let className = 'px-4 py-2 text-sm font-semibold shadow-sm transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  switch (variant) {
    case 'outline':
      className += ' bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50';
      break;
    case 'destructive':
      className += ' bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600';
      break;
    default: 
      className += ' bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600';
  }

  className += rounded ? ' rounded-full' : ' rounded-md';

  return (
    <button
      type="button"
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};
