import { useState } from 'react'
import './App.css'
import { Grid, Container } from '@mui/material'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'
import Header from './components/Header'
import contactsJSON from './data/contacts.json'

const App = () => {
   const [contacts, setContacts] = useState(contactsJSON)

   const addContactHandler = (addContact) => {
      setContacts([...contacts, addContact])
   }

   return (
      <div className="App">
         <Header />
         <Container>
            <Grid container>
               <Grid item xs={6}>
                  <ContactForm handleSubmit={addContactHandler} />
               </Grid>
               <Grid item xs={6}>
                  {contacts.map((contact, index) => (
                     <Contact key={index} data={contact} />
                  ))}
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default App
