import { Paper } from '@mui/material'
import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'


export default function Notes() {

  const [notes, setNotes] = useState([])


  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
    console.log("SaDDY")
  }, [])

  // send request to delete the note based on id
  const handleDelete = async (id) => {
    fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id != id)   // filter everything else other than the deleted id matched
    setNotes(newNotes)
  }

  return (
    <Container>
      <Grid container spacing={3}>
      {notes.map(note => (
        <Grid item key = {note.id} xs= {12} md= {6} lg= {4} > 
      
        <NoteCard note={note} handleDelete = {handleDelete}></NoteCard>
         </Grid>
        ) )}

      </Grid>

      
    </ Container>
  )
}
