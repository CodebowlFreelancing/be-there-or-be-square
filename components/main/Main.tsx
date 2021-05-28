import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

export const Main = ({ children }: MainProps) => <main className="container my-4 mx-auto flex-grow">{children}</main>
