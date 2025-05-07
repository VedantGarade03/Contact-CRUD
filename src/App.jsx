import React, {useState, useEffect} from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import './App.css'

function App() {


const [contacts, setContacts] = useState(() => {
  const stored = localStorage.getItem('contacts');
  return stored ? JSON.parse(stored) : [];
})

const [editingContact, setEditingContact] = useState(null)

useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

const addContact = (contact) => {
  setContacts([...contacts, { id: Date.now(), ...contact}])
}

const updateContact = (updated) => {
  setContacts(contacts.map((c) => (c.id === updated.id ? updated : c)));
  setEditingContact(null)
}

const deleteContact = (id) => {
  setContacts(contacts.filter((c) => c.id !== id))
}

  return (
    <>
    <div className='box'>

<div className='main'>
    
    <h1 className='title'>Contact Crud</h1>

    <ContactForm onSave={editingContact ? updateContact : addContact} editingContact={editingContact} />


</div>

    </div> 
    <br /> <br /><br /><br />

<div className='box'>
    <div className='infoBox'>

    <ContactList contacts={contacts} onEdit={setEditingContact} onDelete={deleteContact} />

    </div>
</div>
    </>
  )
}

export default App