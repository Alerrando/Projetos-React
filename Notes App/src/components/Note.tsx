import { Trash } from "phosphor-react";

type NoteProps = {
  id: number,
  text: string,
  date: string,
}

export function Note(props: NoteProps) {
  return (
    <div className="note">
      <span>{props.text}</span>
      <div className="note-footer">
        <small>{props.date}</small>
        <Trash
            size={32} 
            weight="bold" 
            className="delete-icon" 
        />
      </div>
    </div>
  );
}