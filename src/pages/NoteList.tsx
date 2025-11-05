import Button from '../components/Button';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { Plus } from 'lucide-react';
import { SunMoon } from 'lucide-react';

export default function NoteList() {
	return (
		<div className='flex flex-col w-dvw h-dvh'>
			<header className='flex items-center justify-center h-3/14 px-20'>
				<h1 className='text-3xl font-semibold'>Cleernote</h1>
			</header>
			<main className='flex flex-wrap content-start justify-center gap-10 h-[80vh] overflow-y-auto overflow-x-hidden px-20'>
				<Card />
			</main>
			<footer className='flex justify-center items-center h-3/14 px-20'>
				<Navbar>
					<img src='/cleernote_icon.png' className='h-10'/>
					<Button>
						<Plus />
						New note
					</Button>
					<Button iconOnly={true}>
						<SunMoon />
					</Button>
				</Navbar>
			</footer>
		</div>
	);
}
