import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ type = 'button', className = '', children, ...props }: ButtonProps) => (
  <button
    type={type}
    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    {...props}
  >
    {children}
  </button>
)
