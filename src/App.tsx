import NoteEdit from './pages/NoteEdit';
import NoteList from './pages/NoteList';
import { NotesProvider } from './contexts/NotesProvider';
import { useNotes } from './hooks/useNotes';

function Pages() {
	const { isOnEditPage } = useNotes();

	return isOnEditPage ? <NoteEdit /> : <NoteList />;
}

function App() {
	return (
		<NotesProvider>
			<Pages />
		</NotesProvider>
	);
}

export default App;
