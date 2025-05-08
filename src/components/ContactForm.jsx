import React, { useState, useEffect } from 'react';

export default function ContactForm({ onSave, editingContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setPhone(editingContact.phone);
    } else {
      setName('');
      setPhone('');
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const contact = {
      id: editingContact?.id || Date.now(),
      name,
      phone,
    };

    onSave(contact);
    handleReset();
  };

  const handleReset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-3 rounded-md border-none bg-[#3f3b3b] text-white w-full"
      />
      <input
        type="number"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-3 rounded-md border-none bg-[#333a34] text-white w-full"
      />
      <div className="space-x-4">
        <button type="submit" className="px-4 py-2 rounded-md border-none bg-green-500 text-white">
          {editingContact ? 'Update ✔' : 'Add ✔'}
        </button>
        <button type="button" onClick={handleReset} className="px-4 py-2 rounded-md border-none bg-orange-500 text-white">
          Reset
        </button>
      </div>
    </form>
  );
}
