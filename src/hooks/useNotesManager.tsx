import { useEffect, useState } from 'react';
import type { NoteCreateType, NoteType } from '../types/NoteType';

export function useNotesManager() {
	const [notes, setNotes] = useState<NoteType[]>([]);
	const [isOnEditPage, setIsOnEditPage] = useState(false);

	useEffect(() => {
		const storedNotes = localStorage.getItem('notes');

		if (storedNotes) {
			const parsed: NoteType[] = JSON.parse(storedNotes).map((n: NoteType) => ({
				...n,
				createdAt: new Date(n.createdAt),
				updatedAt: new Date(n.updatedAt),
			}));

			setNotes(parsed);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [notes]);

	function createNote(data: NoteCreateType) {
		const newNote: NoteType = {
			id: crypto.randomUUID(),
			...data,
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		setNotes((prev) => [...prev, newNote]);
	}

	function updateNote(note: NoteType) {
		setNotes((prev) =>
			prev.map((n) => (n.id === note.id ? { ...note, updatedAt: new Date() } : n))
		);
	}

	function deleteNote(id: string) {
		setNotes((prev) => prev.filter((n) => n.id !== id));
	}

	return { isOnEditPage, setIsOnEditPage, notes, createNote, updateNote, deleteNote };
}
