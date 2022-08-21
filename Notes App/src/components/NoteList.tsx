import { Note } from "./Note";
import { AddNote } from "./AddNote";

type NoteListProps = {
  notes: any[];
  handleAddNote: (text: object) => void;
  handleDeleteNote: (id: string) => void;
};

export function NoteList(props: NoteListProps) {
  const notes = props.notes;

  return (
    <div className="note-list">
      {notes.map((note: any) => {
        return (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            notes={notes}
            handleDeleteNote={props.handleDeleteNote}
          />
        );
      })}

      <AddNote handleAddNote={props.handleAddNote} />
    </div>
  );
}
