import React, { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import './styles.css';


function Contacts() {

    const [contacts, setContacts] = useState([
      {
        fullname:"Mehmet",
        phone_number:"122312"
      },
      {
        fullname:"Seren",
        phone_number:"456765"
      },
      {
        fullname:"Adile",
        phone_number:"987655"
      }

    ]);
    
    useEffect(() => {
       console.log(contacts); 
    },[contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
