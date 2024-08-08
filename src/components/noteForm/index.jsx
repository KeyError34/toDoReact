import styles from "./style.module.css";
import { useState } from "react";
function NoteForm({ listUpdate }) {
    const [noteText, setNoteText] = useState('');
  
    const handleChange = (e) => {
      setNoteText(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      listUpdate({ text: noteText, completed: false });
      setNoteText('');
    };
  
    return (
      <form className={styles.noteFormContainer} onSubmit={handleSubmit}>
        <input
        className={styles.noteFormInput}
          type="text"
          value={noteText}
          onChange={handleChange}
          placeholder="Enter your note"
        />
        <button type="submit" className={styles.noteFormButton}>Add Note</button>
      </form>
    );
  }
  
  export default NoteForm;
