import type { ReactNode } from "react"

type NavbarProps = {
   children?: ReactNode
}

export default function Navbar({children}: NavbarProps) {
  return (
    <nav className="flex justify-center items-center w-2xl h-2/3 border-4 border-blue-500 rounded-lg">
      {children}
    </nav>
  )
}