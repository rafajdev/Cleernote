export type NoteType = {
	id: string;
	title: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
};

export type NoteCreateType = Omit<NoteType, 'id' | 'createdAt' | 'updatedAt'>;

export type NoteCurrentType = NoteCreateType & Partial<Pick<NoteType, 'id'>>;
