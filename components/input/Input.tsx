import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className = '', ...props }: InputProps) => (
  <input
    className={`border border-solid border-gray-400 hover:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent py-2 px-4 rounded ${className}`}
    {...props}
  />
)
