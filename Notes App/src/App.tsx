import { useState } from "react";
import { nanoid } from "nanoid";
import { NoteList } from "./components/NoteList";
import { Search } from "./components/Search";

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
  const [search, setSearch] = useState<string>('')

  function addNote(text: object) {
    setNotes([...notes, text]);
  }

  function deleNote(id: string) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <Search handleSearchNote={setSearch} />

      <NoteList
        notes={notes.filter((note) => note.text.toLowerCase().includes(search))}
        handleAddNote={addNote}
        handleDeleteNote={deleNote}
      />
    </div>
  );
}
