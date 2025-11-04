import Button from '../components/Button';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { Plus } from 'lucide-react';

export default function NoteList() {
	return (
		<div className='flex flex-col w-dvw h-dvh'>
			<header className='flex items-center h-3/14 px-20'>
				<h1 className='text-3xl font-semibold'>Cleernote</h1>
			</header>
			<main className='flex flex-wrap gap-10 h-8/10 px-20'>
				<Card />
			</main>
			<footer className='flex justify-center items-center h-3/14 px-20'>
				<Navbar>
					<Button>
						<Plus />
						New note
					</Button>
				</Navbar>
			</footer>
		</div>
	);
}
