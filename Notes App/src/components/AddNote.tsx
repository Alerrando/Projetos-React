import { useState } from "react";
import { nanoid } from "nanoid";

type AddNoteProps = {
  handleAddNote: (text: object) => void;
};

export function AddNote(props: AddNoteProps) {
  const [noteText, setNoteText] = useState("");
  const characterLimits = 200

  function addNote() {
    const data = new Date();
    const mes = data.getMonth() < 10 ? `0${data.getMonth()}` : data.getMonth();

    if (noteText.trim().length > 0) {
      const aux = {
        id: nanoid(),
        text: noteText,
        date: `${data.getDate()}/${mes}/${data.getFullYear()}`,
      };
      props.handleAddNote(aux);
      setNoteText("");
    }
  }

  return (
    <div className="note new">
      <textarea
        placeholder="Type to add a note..."
        cols={10}
        rows={8}
        value={noteText}
        onChange={(e) => {
          characterLimits - e.target.value.length >= 0 && setNoteText(e.target.value)
        }}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimits - noteText.length} Remaining</small>
        <button className="save" onClick={addNote}>
          Save
        </button>
      </div>
    </div>
  );
}
