import React from 'react'
import { Typography, Divider, List, Avatar, ListItemAvatar, ListItemText, ListItem } from '@mui/material'

const Contact = ({ data }) => {
   return (
      <>
         <List sx={{ width: '100%', maxWidth: 550, bgcolor: 'cyan' }}>
            <ListItem>
               <ListItemAvatar>
                  <Avatar alt="img" src={data.photo} sx={{ width: 55, height: 55, marginRight: 2 }} />
               </ListItemAvatar>
               <ListItemText>
                  <Typography color="text.primary">{data.name}</Typography>
                  <Typography color="text.secondary">{data.phone}</Typography>
                  <Typography color="text.secondary">{data.email}</Typography>
               </ListItemText>
            </ListItem>
            <Divider variant="inset" component="li" />
         </List>
      </>
   )
}

export default Contact
