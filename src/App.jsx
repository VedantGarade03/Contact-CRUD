import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const stored = localStorage.getItem('contacts');
    return stored ? JSON.parse(stored) : [];
  });

  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  const updateContact = (updated) => {
    setContacts(contacts.map((c) => (c.id === updated.id ? updated : c)));
    setEditingContact(null);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <>
      <div className="flex justify-center px-4">
        <div className="bg-cyan-300 text-center p-8 sm:p-12 sm:px-64 rounded-[10px] w-full max-w-5xl">
          <h1 className="font-[cursive] text-xl sm:text-2xl">Contact Crud</h1>
          <ContactForm onSave={editingContact ? updateContact : addContact} editingContact={editingContact} />
        </div>
      </div>

      <div className="my-8" />

      <div className="flex justify-center px-4">
        <div className="bg-[#82b9b9] text-center p-6 sm:p-8 sm:px-64 rounded-[10px] font-['Lucida_Console'] w-full max-w-5xl">
          <ContactList contacts={contacts} onEdit={setEditingContact} onDelete={deleteContact} />
        </div>
      </div>
    </>
  );
}

export default App;
