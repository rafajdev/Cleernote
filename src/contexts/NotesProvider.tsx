import { type ReactNode } from 'react';
import { NotesContext } from './NotesContext';
import { useNotes } from '../hooks/useNotes';

type NotesProviderType = {
	children: ReactNode;
};

export function NotesProvider({ children }: NotesProviderType) {
	const notesHook = useNotes();

	return <NotesContext.Provider value={notesHook}>{children}</NotesContext.Provider>;
}
