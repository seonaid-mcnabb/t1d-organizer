import react from "React";
import { ScrollView, View, Button } from "react-native";

//The contact list should:
//Map through contacts database and display names in alphabetical order
//each name should have a "see more button" next to it

function ContactList() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <h1>Contacts List</h1>
        <Button title="ADD NEW" />
      </View>

      <ScrollView>
        <ul>
          <li>
            John Smith <button name="See more"> SEE MORE </button>
          </li>
        </ul>
      </ScrollView>
    </View>
  );
}

export default ContactList;
