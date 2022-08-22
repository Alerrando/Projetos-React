import { useEffect, useState } from "react";
import { NoteList } from "./components/NoteList";
import { Search } from "./components/Search";
import { Header } from "./components/Header";

export function App() {
  const [notes, setNotes] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data') || "");
      console.log(savedNotes)
      if(savedNotes.length > 0)
        setNotes(savedNotes);
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  function addNote(text: object) {
    setNotes([...notes, text]);
  }

  function deleNote(id: string) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToogleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearch} />
        <NoteList
          notes={notes.filter((note) => note.text.toLowerCase().includes(search))}
          handleAddNote={addNote}
          handleDeleteNote={deleNote}
        />
      </div>
    </div>
  );
}
