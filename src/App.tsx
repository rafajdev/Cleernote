import { useState } from 'react';
import NoteEdit from './pages/NoteEdit';
import NoteList from './pages/NoteList';
import { NotesProvider } from './contexts/NotesProvider';

function App() {
	const [isOnEditPage] = useState(false);

	return (
		<NotesProvider>
			{isOnEditPage ? <NoteEdit /> : <NoteList />}
		</NotesProvider>
	);
}

export default App;
