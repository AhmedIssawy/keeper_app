import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p hidden>{props.id}</p>
      <button onClick={() => props.onDelete(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
