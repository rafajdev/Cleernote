import { useEffect, useState } from 'react';
import type { NoteCreateType, NoteCurrentType, NoteType } from '../types/NoteType';

export function useNotesManager() {
	const [notes, setNotes] = useState<NoteType[]>([]);
	const [isOnEditPage, setIsOnEditPage] = useState(false);
	const [currentNote, setCurrentNote] = useState<NoteCurrentType | null>(null);

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

	function upsertNote(data: NoteCreateType | NoteCurrentType) {
		setNotes((prev) => {
			if ('id' in data) {
				const exists = prev.some((n) => n.id === data.id);

				if (exists) {
					return prev.map((n) =>
						n.id === data.id ? { ...n, ...data, updatedAt: new Date() } : n
					);
				}
			}

			const newNote: NoteType = {
				id: crypto.randomUUID(),
				...data,
				createdAt: new Date(),
				updatedAt: new Date(),
			};

			return [...prev, newNote];
		});
	}

	function deleteNote(id: string) {
		setNotes((prev) => prev.filter((n) => n.id !== id));
	}

	return {
		isOnEditPage,
		notes,
		currentNote,
		setIsOnEditPage,
		setCurrentNote,
		upsertNote,
		deleteNote,
	};
}
