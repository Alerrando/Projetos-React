import { useState } from "react";
import { nanoid } from "nanoid";
import { NoteList } from "./components/NoteList";

export function App() {
  const [notes, setNotes] = useState<any[]>([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "18/08/2022",
    },

    {
      id: nanoid(),
      text: "This is my second note!",
      date: "18/08/2022",
    },

    {
      id: nanoid(),
      text: "This is my third note!",
      date: "18/08/2022",
    },

    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "18/08/2022",
    },
  ]);
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
}
