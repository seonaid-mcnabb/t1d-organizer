import { React, useContext, useEffect, useState, useCallback } from "react";
import { ScrollView, View, FlatList, Text, Button } from "react-native";
import { ListItem, List } from "react-native-elements";
import { Context1 } from "../App";

//The contact list should:
//Map through contacts database and display names in alphabetical order
//each name should have a "see more button" next to it

function ContactList({ navigation }) {
  const context = useContext(Context1);
  //This and the useEffect below are currently redundant because they are on the context from app.js
  //but I've added it here so that changes are reflected immediately when a contact is added or deleted
  const [contacts, setContacts] = useState([]);

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
              onPress={() =>
                navigation.navigate("Contact Details", { id: item.id })
              }
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
