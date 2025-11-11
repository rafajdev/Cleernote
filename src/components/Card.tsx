import { Trash } from 'lucide-react';
import { useNotes } from '../hooks/useNotes';

type CardProps = {
	id: string;
	title: string;
	content: string;
};

export default function Card({ id, title, content }: CardProps) {
	const { setIsOnEditPage, setCurrentNote, deleteNote } = useNotes();

	const handleOnClick = () => {
		setCurrentNote({
			id,
			title,
			content,
		});
		setIsOnEditPage(true);
	};

	const handleDelete = (e: React.MouseEvent) => {
		e.stopPropagation();
		deleteNote(id);
	};

	return (
		<div
			className='
        group relative
        w-52 h-52 p-4 
        border-2 border-gray-500 hover:border-gray-600 rounded-lg 
        bg-white 
        shadow-sm hover:shadow-lg transition-shadow
        cursor-pointer
      '
			onClick={handleOnClick}
		>
			<button
				onClick={handleDelete}
				className='
				absolute top-2 right-2
				opacity-0 group-hover:opacity-100
				pointer-events-none group-hover:pointer-events-auto
				bg-red-500 text-white text-xs
				w-8 h-8
				flex items-center justify-center
				rounded
				transition-opacity
				cursor-pointer
			'
			>
				<Trash />
			</button>

			<h3 className='mb-2 text-lg font-semibold text-gray-700 group-hover:text-gray-800'>
				{title}
			</h3>
			<p className='text-sm text-gray-600 break-all group-hover:text-gray-800'>
				{content.length > 118 ? content.slice(0, 118) + '...' : content}
			</p>
		</div>
	);
}
