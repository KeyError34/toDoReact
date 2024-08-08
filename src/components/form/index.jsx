import React, { useState } from "react";

function Form({ updateColor }) {
  const [newColor, setNewColor] = useState("");

  const handleChange = (e) => {
    setNewColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateColor(newColor);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="text"
        value={newColor}
        onChange={handleChange}
        placeholder="Input color"
        style={{ marginBottom: '10px', padding: '5px', width: '150px' }}
      />
      <button type="submit" style={{ padding: '5px', width: '100px' }}>Change color</button>
    </form>
  );
}

export default Form;