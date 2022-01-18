import { React, useContext } from "react";
import {
  ScrollView,
  View,
  Button,
  FlatList,
  List,
  ListItem,
  Text,
} from "react-native";
import { Context1 } from "../App";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Don't know if should keep, but importing to use this
import { NavigationContainer, StackActions } from "@react-navigation/native";

//The contact list should:
//Map through contacts database and display names in alphabetical order
//each name should have a "see more button" next to it

function ContactList() {
  const context = useContext(Context1);
  console.log(context);
  return (
    <View>
      <FlatList
        data={context}
        renderItem={({ item }) => <Text> {item.firstname} </Text>}
      ></FlatList>
      <Button title="ADD NEW"></Button>
    </View>
    //<View style={{ flex: 1 }}>
    //<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //<h1>Contacts List</h1>
    //<Button title="ADD NEW" />
    //</View>
  );
}

export default ContactList;
