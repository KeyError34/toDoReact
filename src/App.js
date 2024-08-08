// import styles from './App.css';
import { useState, useEffect } from "react";
import Form from "./components/form/index";
import NoteList from "./components/noteList";
import NoteForm from "./components/noteForm";

function App() {
  const [color, setColor] = useState("aquamarine");
  const [notes, setNotes] = useState(() => {
    // загрузка заметок из localStorage
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // // Функция для преобразования цвета HEX в формат RGB
  // const hexToRgb = (hex) => {
  //   let r = 0,
  //     g = 0,
  //     b = 0;

  //   // 3 цифры (сокращенный формат)
  //   if (hex.length === 4) {
  //     r = parseInt(hex[1] + hex[1], 16);
  //     g = parseInt(hex[2] + hex[2], 16);
  //     b = parseInt(hex[3] + hex[3], 16);
  //   }
  //   // 6 цифр (полный формат)
  //   else if (hex.length === 7) {
  //     r = parseInt(hex[1] + hex[2], 16);
  //     g = parseInt(hex[3] + hex[4], 16);
  //     b = parseInt(hex[5] + hex[6], 16);
  //   }

  //   return `rgb(${r},${g},${b})`;
  // };

  // // Функция для преобразования цветовой строки в RGB
  // const getRgbColor = (color) => {
  //   if (color.startsWith("#")) {
  //     return hexToRgb(color);
  //   }
  //   return color; // Предполагаем, что это уже в формате RGB
  // };

  // // Функция для проверки, является ли цвет тёмным
  // const isDarkColor = (color) => {
  //   try {
  //     const rgbColor = getRgbColor(color);
  //     const [r, g, b] = rgbColor.match(/\d+/g).map(Number);

  //     // Вычисление яркости
  //     const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  //     return brightness < 128;
  //   } catch (e) {
  //     console.error("Ошибка в обработке цвета:", e);
  //     return false; // В случае ошибки считаем цвет светлым
  //   }
  // };

  function updateColor(newColor) {
    setColor(newColor);
  }

  useEffect(() => {
    // cохранение в localStorage при их изменении
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const listUpdate = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const toggleStatus = (selectedNote) => {
    const updatedNotes = notes.map((note) =>
      note.text === selectedNote.text
        ? { ...note, completed: !note.completed }
        : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (selectedNote) => {
    const updatedNotes = notes.filter(
      (note) => note.text !== selectedNote.text
    );
    setNotes(updatedNotes);
  };

  // const textColor = isDarkColor(color) ? "white" : "black";

  return (
    <div
      style={{
        backgroundColor: color,
        minWidth: "500px",
        minHeight: "600px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Form updateColor={updateColor} />
      <h1 style={{color: color==="black"? 'white' : "black" }} >Note Management App</h1>
      <NoteForm listUpdate={listUpdate} />
      <NoteList
        notes={notes}
        toggleStatus={toggleStatus}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
