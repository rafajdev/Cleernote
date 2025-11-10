import { createContext } from 'react';
import type { NoteCreateType, NoteType } from '../types/NoteType';

type NotesContextType = {
	isOnEditPage: boolean;
	setIsOnEditPage: (value: boolean) => void;
	notes: NoteType[];
	createNote: (note: NoteCreateType) => void;
	updateNote: (note: NoteType) => void;
	deleteNote: (id: string) => void;
};

export const NotesContext = createContext<NotesContextType>({
	notes: [],
	isOnEditPage: false,
	setIsOnEditPage: () => {},
	createNote: () => {},
	updateNote: () => {},
	deleteNote: () => {},
});
