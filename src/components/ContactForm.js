import { Card, CardContent, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const ContactForm = ({ handleSubmit }) => {
   const contactValue = {
      name: '',
      phone: '',
      email: '',
      photo: '',
   }

   const [formNewContact, setFormNewContact] = useState(contactValue)

   const handleChange = (e) => {
      setFormNewContact({ ...formNewContact, [e.target.name]: e.target.value })
   }

   const handleSubmitForm = (e) => {
      e.preventDefault()
      handleSubmit(formNewContact)

      setFormNewContact(contactValue)
   }

   return (
      <Card sx={{ maxWidth: 500, backgroundColor: '#efefee' }}>
         <CardContent>
            <form style={{ margin: '10px ' }} onSubmit={handleSubmitForm}>
               <TextField
                  fullWidth
                  required
                  style={{ marginBottom: '10px' }}
                  type="text"
                  name="name"
                  label="name"
                  variant="filled"
                  value={formNewContact.name}
                  onChange={handleChange}
               />

               <TextField
                  fullWidth
                  required
                  style={{ marginBottom: '10px' }}
                  type="phone"
                  name="phone"
                  label="phone"
                  variant="filled"
                  value={formNewContact.phone}
                  onChange={handleChange}
               />

               <TextField
                  fullWidth
                  required
                  style={{ marginBottom: '10px' }}
                  type="email"
                  name="email"
                  label="email"
                  variant="filled"
                  value={formNewContact.email}
                  onChange={handleChange}
               />

               <TextField
                  fullWidth
                  required
                  style={{ marginBottom: '10px' }}
                  type="text"
                  name="photo"
                  label="photo"
                  variant="filled"
                  value={formNewContact.photo}
                  onChange={handleChange}
               />

               <Button size="medium" variant="text" color="success" type="submit">
                  ADD NEW
               </Button>
            </form>
         </CardContent>
      </Card>
   )
}

export default ContactForm
