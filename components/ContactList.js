import { React, useContext } from "react";
import { ScrollView, View, Button, FlatList, Text } from "react-native";
import { Context1 } from "../App";

//The contact list should:
//Map through contacts database and display names in alphabetical order
//each name should have a "see more button" next to it

function ContactList() {
  const context = useContext(Context1);
  console.log(context);
  return (
    <View>
      <Text> {context[0].firstname} </Text>
    </View>
    //<View style={{ flex: 1 }}>
    //<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //<h1>Contacts List</h1>
    //<Button title="ADD NEW" />
    //</View>
  );
}

export default ContactList;
