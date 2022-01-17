import react from "React";
import { ScrollView, View, Button, FlatList, Text } from "react-native";

//The contact list should:
//Map through contacts database and display names in alphabetical order
//each name should have a "see more button" next to it

function ContactList({ contacts }) {
  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={({ contact }) => {
          return <Text>{contact.firstname}</Text>;
        }}
      ></FlatList>
    </View>
    //<View style={{ flex: 1 }}>
    //<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //<h1>Contacts List</h1>
    //<Button title="ADD NEW" />
    //</View>
  );
}

export default ContactList;
