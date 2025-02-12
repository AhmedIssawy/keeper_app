import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  function handleAddClick(e) {
    e.preventDefault();
    props.handleNote(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={(e) => handleChange(e)}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={(e) => handleChange(e)}
          value={note.content}
        />
        <button
          onClick={handleAddClick}
          disabled={!note.title || !note.content}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
