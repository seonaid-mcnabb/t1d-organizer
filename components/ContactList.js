import { React, useContext } from "react";
import { ScrollView, View, Button, FlatList, Text } from "react-native";
import { ListItem, List } from "react-native-elements";
import { Context1 } from "../App";

//The contact list should:
//Map through contacts database and display names in alphabetical order
//each name should have a "see more button" next to it

function ContactList({ navigation }) {
  const context = useContext(Context1);
  console.log(context);
  return (
    <View>
      <FlatList
        data={context}
        renderItem={({ item }) => (
          <Text>
            {" "}
            {item.firstname} {item.lastname}{" "}
            <Button
              title="details"
              onPress={() => navigation.navigate("Contact Details")}
            />{" "}
          </Text>
        )}
      />
      <Button
        title="ADD NEW"
        onPress={() => navigation.navigate("Add New Contact")}
      ></Button>
    </View>
    //<View style={{ flex: 1 }}>
    //<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //<h1>Contacts List</h1>
    //<Button title="ADD NEW" />
    //</View>
  );
}

export default ContactList;
