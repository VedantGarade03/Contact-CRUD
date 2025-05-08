export default function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <ol className="space-y-4">
      {contacts.map((contact) => (
        <li key={contact.id} className="flex flex-wrap justify-between items-center mb-4">
          <span className="text-lg">{contact.name} - {contact.phone}</span>
          <div className="space-x-2 mt-2 sm:mt-0">
            <button
              onClick={() => onEdit(contact)}
              className="px-4 py-2 rounded-md bg-purple-600 text-white"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(contact.id)}
              className="px-4 py-2 rounded-md bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
}
