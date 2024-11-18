import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

function NoteCard({note , handleDelete}) {
  return (
    <div>
    <Card elevation={8}>
        <CardHeader 
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