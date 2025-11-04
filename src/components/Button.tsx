import type { ReactNode } from "react"

type ButtonProps = {
   children?: ReactNode
}

export default function Button({children}: ButtonProps) {
   return (
      <button className="
         flex items-center justify-center gap-2 
         w-52 h-10 
         text-white 
         bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 
         rounded-md 
         transition-colors 
         cursor-pointer"
      >
         {children}
      </button>
   )
}