import { createContext } from 'react';
import type { NoteCreateType, NoteType } from '../types/NoteType';

type NotesContextType = {
	notes: NoteType[];
	createNote: (note: NoteCreateType) => void;
	updateNote: (note: NoteType) => void;
	deleteNote: (id: string) => void;
};

export const NotesContext = createContext<NotesContextType>({
	notes: [],
	createNote: () => {},
	updateNote: () => {},
	deleteNote: () => {},
});
