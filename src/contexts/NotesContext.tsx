import { createContext } from 'react';
import type { NoteCreateType, NoteCurrentType, NoteType } from '../types/NoteType';

type NotesContextType = {
	isOnEditPage: boolean;
	notes: NoteType[];
	currentNote: NoteCurrentType | null;

	setIsOnEditPage: (value: boolean) => void;
	setCurrentNote: (value: NoteCurrentType | null) => void;

	upsertNote: (data: NoteCreateType | NoteCurrentType) => void;
	deleteNote: (id: string) => void;
};

export const NotesContext = createContext<NotesContextType>({
	isOnEditPage: false,
	notes: [],
	currentNote: null,

	setIsOnEditPage: () => {},
	setCurrentNote: () => {},

	upsertNote: () => {},
	deleteNote: () => {},
});