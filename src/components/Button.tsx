import type { ReactNode } from 'react';

type ButtonProps = {
	children?: ReactNode;
	iconOnly?: boolean;
	onClickFn?: () => void;
};

export default function Button({ children, iconOnly, onClickFn }: ButtonProps) {
	return (
		<button
			onClick={onClickFn}
			className={`
         flex items-center justify-center gap-2 
         ${iconOnly ? 'w-10' : 'w-52'} h-10 
         text-white 
         bg-blue-500 hover:bg-blue-600 focus:bg-blue-700
         rounded-md 
         transition-colors 
         cursor-pointer`}
		>
			{children}
		</button>
	);
}
