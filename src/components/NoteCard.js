import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { blue, green, pink, yellow } from '@mui/material/colors';

const useStyles = makeStyles ({
    avatar: {
        background: (note) => {
            if (note.category == 'work') {
                return yellow[700]
            }
            if (note.category == 'money') {
                return green[500]
            }
            if (note.category == 'todos') {
                return pink[500]
            }
           return blue[500]
        }
    }
})

function NoteCard({note , handleDelete}) {

    const classes = useStyles(note)
  return (
    <div>
    <Card elevation={8} >
        <CardHeader 
        avatar = {
            <Avatar className={classes.avatar}>
                 {note.category[0].toUpperCase()}
            </Avatar>
        }
        action = {
        <IconButton onClick={()=> handleDelete(note.id)}>
            <DeleteOutlined/>
        </IconButton>
      }

        title = {note.title}
        subheader =  {note.category}
        />

        <CardContent>
            <Typography variant='body2' color='textSecondary'>
                {note.details}

            </Typography>
        </CardContent>
    
    
    </Card>
    
    </div>
  )
}

export default NoteCard