import { Paper } from '@mui/material'
import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'


export default function Notes() {

  const [notes, setNotes] = useState([])


  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
    console.log("SaDDY")
  }, [])

  return (
    <div>
      {notes.map(note => (
        <p key = {note.id}> <h1>{note.title}<br/></h1>{note.details}<br/><br/> </p>
        ) )}

      
    </div>
  )
}
