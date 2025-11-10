import { CircleCheckBig, SunMoon } from 'lucide-react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import { useNotes } from '../hooks/useNotes';
import { useEffect, useState } from 'react';

export default function NoteEdit() {
	const { setIsOnEditPage, upsertNote, currentNote } = useNotes();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	useEffect(() => {
		if (currentNote) {
			setTitle(currentNote.title);
			setContent(currentNote.content);
		}
	}, [currentNote]);

	const handleSave = () => {
		if (!title.trim()) {
			alert('The title cannot be empty!');
			return;
		}

		if (currentNote && currentNote.id) {
			upsertNote({
				id: currentNote.id,
				title: title,
				content: content,
			});
		} else {
			upsertNote({
				title: title,
				content: content,
			});
		}

		setIsOnEditPage(false);
	};

	return (
		<div className='flex flex-col w-dvw h-dvh'>
			<header className='flex items-center h-3/14 px-50'>
				<input
					placeholder='Title'
					className='flex-1 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 text-3xl font-bold'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</header>
			<main className='flex content-start gap-10 h-[80vh] px-50'>
				<textarea
					placeholder='Content'
					className='flex-1 resize-none outline-0'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</main>
			<footer className='flex justify-center items-center h-3/14 px-50'>
				<Navbar>
					<img src='/cleernote_icon.png' className='h-10' />
					<Button onClickFn={handleSave}>
						<CircleCheckBig />
						Done
					</Button>
					<Button iconOnly={true}>
						<SunMoon />
					</Button>
				</Navbar>
			</footer>
		</div>
	);
}
