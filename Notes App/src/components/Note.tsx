import { Trash } from "phosphor-react";

export function Note() {
  return (
    <div className="note">
      <span>Hello World!</span>
      <div className="note-footer">
        <small>16/08/2022</small>
        <Trash
            size={32} 
            weight="bold" 
            className="delete-icon" 
        />
      </div>
    </div>
  );
}
