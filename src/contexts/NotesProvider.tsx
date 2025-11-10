import { type ReactNode } from 'react';
import { NotesContext } from './NotesContext';
import { useNotesManager } from '../hooks/useNotesManager';

type NotesProviderType = {
	children: ReactNode;
};

export function NotesProvider({ children }: NotesProviderType) {
	const notesHook = useNotesManager();

	return <NotesContext.Provider value={notesHook}>{children}</NotesContext.Provider>;
}
