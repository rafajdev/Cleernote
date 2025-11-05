import type { ReactNode } from 'react';

type ButtonProps = {
	children?: ReactNode;
	iconOnly?: boolean;
};

export default function Button({ children, iconOnly }: ButtonProps) {
	return (
		<button
			className={`
         flex items-center justify-center gap-2 
         ${iconOnly ? 'w-10' : 'w-52'} h-10 
         text-white 
         ${iconOnly ? 'bg-gray-800 hover:bg-gray-900 focus:bg-gray-950' : 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-700'} 
         rounded-md 
         transition-colors 
         cursor-pointer`}
		>
			{children}
		</button>
	);
}
