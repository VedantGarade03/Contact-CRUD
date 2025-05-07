export default function ContactList({ contacts, onEdit, onDelete }) {
    
  
    return (
      <ol>
        {contacts.map((contact) => (
          <li key={contact.id} className="list">
            <span>{contact.name} - {contact.phone}</span>
            <button onClick={() => onEdit(contact)} className="editBtn">Edit</button>
            <button onClick={() => onDelete(contact.id)} className="deleteBtn">Delete</button>
          </li>
        ))}
      </ol>
    );
  }