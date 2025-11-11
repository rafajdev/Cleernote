import type { ReactNode } from 'react';

type NavbarProps = {
	children?: ReactNode;
};

export default function Navbar({ children }: NavbarProps) {
	return (
		<nav
			className='
			flex items-center justify-between 
			w-2xl h-2/3 p-10 max-sm:p-5
			border-2 border-blue-500 
			rounded-lg 
			shadow-sm'
		>
			{children}
		</nav>
	);
}
