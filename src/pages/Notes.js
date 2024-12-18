import { Paper } from '@mui/material'
import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'

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


    // can use this to control how many columns are shown 
    const breakPoints = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    }
  return (
    <Container>
      <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      >
      {notes.map(note => (
        <div item key = {note.id} > 
      
        <NoteCard note={note} handleDelete = {handleDelete}></NoteCard>
         </div>
        ) )}
      </Masonry>
      

      
    </ Container>
  )
}
