import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export const Header = ({ children }: HeaderProps) => (
  <header className="bg-black text-white font-bold text-lg p-4">{children}</header>
)
