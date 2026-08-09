function NoteCard({ note, onDelete }) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default NoteCard;