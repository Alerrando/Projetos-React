import { Trash } from "phosphor-react";

type NoteProps = {
  id: string;
  text: string;
  date: string;
  notes: any[];
  handleDeleteNote: (id: string) => void;
};

export function Note(props: NoteProps) {
  return (
    <div className="note" id={props.id}>
      <span>{props.text}</span>
      <div className="note-footer">
        <small>{props.date}</small>
        <Trash
          size={32}
          weight="bold"
          className="delete-icon"
          onClick={() => props.handleDeleteNote(props.id)}
        />
      </div>
    </div>
  );
}
