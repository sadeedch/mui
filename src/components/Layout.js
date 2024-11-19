
import { Drawer, makeStyles } from '@material-ui/core'
import { Typography } from '@mui/material'
import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '@mui/material/Avatar';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import {format} from 'date-fns'

const drawerWidth = 240;

const useStyles = makeStyles ((theme) => {
    return {
        page: {
            background : '#dde9e9', 
            width: '100%',
            padding : theme.spacing(3)
        },
    
        drawer: {
            width: drawerWidth 
        },
        
        drawerPaper: {
            width: drawerWidth
        },
        root : {
         display: 'flex'
        },
    
        active: {
            background: '#9dbdbe'
        },
        title: {
            padding : theme.spacing(2)
        
        }, 
        appbar : {
            width: `calc(100% -${drawerWidth}px )`,
          
        }, 
        date : {
            flexGrow: 1
        },

        avatar : {
            marginLeft: theme.spacing(2)
        },
        toolbar : theme.mixins.toolbar   // react built in mixin gets the classes associated with toolbar and adjusts the position


    }
    
})

export default function Layout({children}) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary'/>,
            path: '/'
        }, 
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlined color='secondary'/>,
            path: '/create'
        }, 
    ]


  return (
    <div className={classes.root}> 
    {/* App Bar */}
    <AppBar 
     style = {{width: `calc(100% - ${drawerWidth}px)`}}   // minus the side bar 
    >
        <Toolbar>
            <Typography className={classes.date}>
                 Today is the { format(new Date(), 'do MMMM Y')}
            </Typography>
            <Typography> Ahmad </Typography>
            <Avatar src = "/images.jpg" className={classes.avatar}></Avatar>
        </Toolbar>

    </AppBar>

    {/* Side Drawer */}
    <Drawer 
    className={classes.drawer}
    variant='permanent'
    anchor='left'
    classes={{ paper: classes.drawerPaper}}  // override the built in mui width of paper component 
    >
        <div>
            <Typography variant='h5' className={classes.title}>
                Sadeed's Notes
            </Typography>
        </div>

        {/* list / links  */}
        <List>
            {menuItems.map(item => (
                <ListItem 
                    button 
                    key={item.text}
                    onClick = {() => history.push(item.path) }  // history hook to rediredt to the specified path   
                    className={location.pathname == item.path ? classes.active : null}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                </ListItem>
            ))}

        </List>
        
    </Drawer>

       <div className={classes.page}>
        <div className={classes.toolbar}></div>
       {children}
       </div>
    </div>
  )
}
