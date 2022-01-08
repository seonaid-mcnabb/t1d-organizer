import react from "React";

//The contact list should:
//Map through contacts database and display names in alphabetic order
//each name should have a "see more button" next to it

function ContactList() {
  return (
    <div>
      <h1>2. Contacts List</h1>
      <button>GO BACK</button>
      <ul>
        {" "}
        <li>
          John Smith <button>SEE MORE</button>
        </li>
      </ul>
      <button>ADD NEW </button>
    </div>
  );
}

export default ContactList;
