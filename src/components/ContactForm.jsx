import React, {useState, useEffect} from "react";

export default function ContactForm({onSave, editingContact}) {

const [name, setName] = useState('')
const [phone, setPhone] = useState('')

useEffect(() => {
    if(editingContact) {
        setName(editingContact.name);
        setPhone(editingContact.phone)
    } else {
        setName('')
        setPhone('')
    }
}, [editingContact])

const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !phone) return;

    const contact = {
        id: editingContact?.id || Date.now(),
        name,
        phone,
    }

    onSave(contact)
    handleReset();
}

const handleReset = () => {
    setName('')
    setPhone('')
}


return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="nameBox"
      />
      <br /><br />
      <input
        type="number"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="nameBox2"
      />
      <br /><br /><br />
      <button type="submit" className="button">{editingContact ? 'Update ✔' : 'Add ✔'}</button> {''}
      <button type="button" onClick={handleReset} className="button2">Reset</button>
      <br /><br /><br /><br /><br />
    </form>
  );
}