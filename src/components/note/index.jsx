import styles from "./style.module.css"
function Note({ note, toggleStatus , deleteNote}) {
    return (
      <div className={`${styles.noteContainer} `}>
        <span className={`${styles.note} ${note.completed ? styles.completed : ''}`}>{note.text}</span>
        <div className={styles.noteChackContainer}>
        <input 
          type="checkbox" 
          checked={note.completed} 
          onChange={() => toggleStatus(note)} 
        />
        <button  onClick={() => deleteNote(note)}>Delete</button>
        </div>
      </div>
    );
  }
  
  export default Note;
