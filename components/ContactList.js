import react from "React";
import { ScrollView } from "react-native";

//The contact list should:
//Map through contacts database and display names in alphabetic order
//each name should have a "see more button" next to it

function ContactList() {
  return (
    <ScrollView>
      <h1>2. Contacts List</h1>
      <button>GO BACK</button>
      <ul>
        {" "}
        <li>
          John Smith <button>SEE MORE</button>
        </li>
      </ul>
      <button>ADD NEW </button>
    </ScrollView>
  );
}

export default ContactList;
