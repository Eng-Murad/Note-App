import React, { useState } from "react";
import { SliderPicker } from "react-color";



const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;
	
	const [color, setColor] = useState("#000");

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
			setColor(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText,color);
			setNoteText('');
		}
	};
	

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder={`Title
Take a note`}
				value={noteText}
				onChange={handleChange}
				style={{
					backgroundColor: color,
				  }}
			></textarea>

			<div className='note-footer-save'>
			<SliderPicker
				color={color}
				onChangeComplete={color => {
				setColor(color.hex);
				}}
			/>
      
				<button type="button" className="save" onClick={handleSaveClick}>
					Save
				</button>
			</div>
			
		</div>
	);
};

export default AddNote;
