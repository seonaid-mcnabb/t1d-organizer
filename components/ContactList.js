import react from "React";
import { ScrollView, Button } from "react-native";

//The contact list should:
//Map through contacts database and display names in alphabetic order
//each name should have a "see more button" next to it

function ContactList() {
  return (
    <ScrollView>
      <h1>2. Contacts List</h1>
      <Button title="GO BACK" />
      <ul>
        {" "}
        <li>
          John Smith <button name="See more"> SEE MORE </button>
        </li>
      </ul>
      <Button title="ADD NEW" />
    </ScrollView>
  );
}

export default ContactList;
