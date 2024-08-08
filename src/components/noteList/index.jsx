import styles from "./style.module.css";

import Note from "../note";

function NoteList({ notes, toggleStatus , deleteNote}) {
    return (
      <div className={styles.noteListContainer}>
        {notes.map((note, index) => (
          <Note key={index} note={note} toggleStatus={toggleStatus} deleteNote={deleteNote}/>
        ))}
      </div>
    );
  }
  
  export default NoteList;
