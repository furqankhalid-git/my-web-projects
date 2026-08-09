import { useState } from 'react';
import NoteCard from './NoteCard';
import NoteForm from './NoteForm';
import './App.css'

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  function addNote() {
    if (title.trim() && content.trim()) {
      setNotes([...notes, { title, content }]);
      setTitle("");
      setContent("");
    }

  }

  function deleteNote(index) {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <h1>Notes App</h1>
      <NoteForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        addNote={addNote}
      />
      <div className="notes-grid">
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            note={note}
            onDelete={() => deleteNote(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;