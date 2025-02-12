import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const handleNote = (note) => {
    // console.log(note);
    setNotes((prevNotes) => {
      return [...prevNotes, { ...note, id: prevNotes.length }];
    });
  };

  const handelDeleteButton = (id) => {
    console.log(notes);
    setNotes(
      notes.filter((note, i) => {
        return note.id !== id;
      })
    );
  };

  return (
    <div>
      <Header />
      <CreateArea handleNote={handleNote} />
      {notes.map((note, i) => {
        return (
          <Note
            key={i}
            id={i}
            title={note.title}
            content={note.content}
            onDelete={handelDeleteButton}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
