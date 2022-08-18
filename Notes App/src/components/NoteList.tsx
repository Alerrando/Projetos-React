import { Note } from "./Note";

type NoteListProps = {
    notes: any[]
}

export function NoteList(props: NoteListProps){
    const notes = props.notes
    
    return (
        <div className="note-list">
            {notes.map((note:any) => {
                return <Note id={note.id} text={note.text} date={note.date} />
            })}
        </div>
    )
}