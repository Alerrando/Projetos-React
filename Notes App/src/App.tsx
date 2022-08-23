import { useEffect, useState } from "react";
import { NoteList } from "./components/NoteList";
import { Search } from "./components/Search";
import { Header } from "./components/Header";

export function App() {
  const [notes, setNotes] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    try{
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data') || "");

      if(savedNotes.length > 0)
        setNotes(savedNotes);
    } catch(err:any){
      console.log(err)
    }
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
          notes={notes.filter((note) => Object.values(note.text)
            .join("")
            .toLowerCase()
            .includes(search.toLowerCase()))}
          handleAddNote={addNote}
          handleDeleteNote={deleNote}
        />
      </div>
    </div>
  );
}
