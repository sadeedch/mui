import React, { useState } from 'react'

import { Button, Container, FormControlLabel, Radio, Typography } from '@material-ui/core'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {makeStyles} from '@material-ui/core';
import { TextField } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const useStyle = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20, 
    display: 'block'
  },
  
})




export default function Create() {

  const history = useHistory()

  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")


  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
  
    e.preventDefault();
    setTitleError(false)
    setDetailsError(false)

    if (title == '') {
      setTitleError(true)
    }

    if (details == '') {
      setDetailsError(true)
    }

    if (title, details) {
     fetch ('http://localhost:8000/notes', {
      method: 'POST',
      headers: {"content-type" : "applicaiton/json"},
      body: JSON.stringify({title, details,category})
     }).then(history.push('/'))     // built in react HISTORY  hook to redirect the user back to home page
    }
  }

  const classes = useStyle()
  return (
    <Container>

      <Typography variant='h6' component='h2' color='textSecondary' gutterBottom>
      
        Create a new note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>

      <TextField 
      onChange={(e)=> setTitle(e.target.value)}
      className={classes.field}
      label = "Note Title"
      variant='outlined'
      color='secondary'
      fullWidth
      required
      error = {titleError}
    
      >
      </TextField>
      {title}

      <TextField 
      onChange={(e)=> setDetails(e.target.value)}
      className={classes.field}
      label = "Details"
      variant='outlined'
      color='secondary'
      fullWidth
      required
      multiline
      rows={4}
      error = {detailsError}
      >
      </TextField>
      {details}

      <br></br>
   <FormControl>
      <FormLabel className={classes.field}>Note Category</FormLabel>
    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
    <FormControlLabel value = "money"control={<Radio/>} label="Money"/>
    <FormControlLabel value = "todos"control={<Radio/>} label="Todos"/>
    <FormControlLabel value = "reminders"control={<Radio/>} label="Reminders"/>
    <FormControlLabel value = "work"control={<Radio/>} label="Work"/>
  
    </RadioGroup>
    </FormControl>
    <br></br>

      <Button onClick={()=> console.log("clicked")}
      className={classes.btn}
      type='submit' 
      color='secondary'
      variant='contained'
        
      endIcon={<ArrowForwardIosIcon/>}
    useStyle ={classes.btn}
      
      >SUBMIT</Button>
      <br></br>

      </form>
  
      
    
    
    </Container>
  )
}
