import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';





const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'T the frist note test',
			date: '15/04/2023',
			backgroundcolor:'#aaa'
		},
		{
			id: nanoid(),
			text: 'Hello this is the notes for the items!',
			date: '21/04/2024',
			backgroundcolor:'#aaa'
		}
	]);
	
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text,backgroundcolor) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
			backgroundcolor:backgroundcolor,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	
	return (
		<div>
			<div className='container'>
				<Header />
				<NotesList 
					notes={notes}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
					
				/>
				
			</div>
			
		</div>
	);
};

export default App;
