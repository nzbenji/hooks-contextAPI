import React, {useState} from 'react'

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = e => {
        e.preventDefault()
        setNotes([
            ...notes,
            {
                title,
                body
            }
        ])
        setTitle('')
        setBody('')
    }

    const removeNote = (title) => {
        setNotes(notes.filter(note => note.title !== title))
    }

    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note) => (
                <div key={note.title}>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    <button onClick={() => removeNote(note.title)}>X</button>
                </div>
            ))}
            <p>Add note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value) }/>
                <textarea value={body} onChange={(e) => setBody(e.target.value) }/>
                <button>Add note</button>
            </form>
        </div>
    )
}

export default Notes