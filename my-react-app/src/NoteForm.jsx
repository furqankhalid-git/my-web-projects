function NoteForm({ title, setTitle, content, setContent, addNote }) {
  return (
    <div className="note-form">
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Note content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
}

export default NoteForm;