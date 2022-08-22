import { Note } from "./Note";
import { AddNote } from "./AddNote";

type NoteListProps = {
  notes: any[];
  handleAddNote: (text: object) => void;
  handleDeleteNote: (id: string) => void;
};

export function NoteList(props: NoteListProps) {

  return (
    <div className="note-list">
      {props.notes.map((note, index) => (
          <Note
            key={index}
            id={note.id}
            text={note.text}
            date={note.date}
            notes={note.notes}
            handleDeleteNote={props.handleDeleteNote}
          />
        )
      )}

      <AddNote handleAddNote={props.handleAddNote}/>
    </div>
  );
}
