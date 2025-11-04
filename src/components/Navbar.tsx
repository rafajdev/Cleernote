import type { ReactNode } from 'react';

type NavbarProps = {
	children?: ReactNode;
};

export default function Navbar({ children }: NavbarProps) {
	return (
		<nav
			className='
			flex items-center justify-center 
			w-2xl h-2/3 
			border-2 border-blue-500 
			rounded-lg 
			shadow-sm'
		>
			{children}
		</nav>
	);
}
