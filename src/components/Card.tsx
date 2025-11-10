import { useNotes } from '../hooks/useNotes';

type CardProps = {
	id: string;
	title: string;
	content: string;
};

export default function Card({ id, title, content }: CardProps) {
	const { setIsOnEditPage, setCurrentNote } = useNotes();

	const handleOnClick = () => {
		setCurrentNote({
			id: id,
			title: title,
			content: content,
		});
		setIsOnEditPage(true);
	};

	return (
		<div
			className='
         group
         w-52 h-52 p-4 
         border-2 border-gray-500 hover:border-gray-600 rounded-lg 
         bg-white 
         shadow-sm hover:shadow-lg transition-shadow
         cursor-pointer
         '
			onClick={handleOnClick}
		>
			<h3 className='mb-2 text-lg font-semibold text-gray-700 group-hover:text-gray-800'>
				{title}
			</h3>
			<p className='text-sm text-gray-600 group-hover:text-gray-800'>
				{content.length > 118 ? content.slice(0, 118) + '...' : content}
			</p>
		</div>
	);
}
