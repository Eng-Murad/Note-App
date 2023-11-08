import Note from './Note';

import AddNote from './AddNote';


const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	
	return (
		<>
		
			<div className='container bg-dark-subtle '>

				<div className='add-new' >
					<AddNote handleAddNote={handleAddNote} />
					
				</div>
				<div className='notes-list' >
					
					{notes.map((note) => (
						<Note
							id={note.id}
							text={note.text}
							date={note.date}
							handleDeleteNote={handleDeleteNote}
							color={note.backgroundcolor}						
						/>
						
					))}
					
				</div>
				
			</div>
		</>
	);
};

export default NotesList;
