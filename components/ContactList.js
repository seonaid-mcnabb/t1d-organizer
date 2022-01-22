import { React, useContext, useEffect, useState, useCallback } from "react";
import { View, FlatList, Text, Button } from "react-native";
import { Context1 } from "../App";

//The Contact List//
/* --Maps through context using React native Flatlist(currently, contacts database)
--Displays each contact first and last name
--Has a button to see contact details that navigates to ContactDetails.js component 
--^^This button sends the contact's id as a parameter to ContactDetails component
--Has a button to add new that navigates to AddNewContactForm.js component form
*/

function ContactList({ navigation }) {
  //This gives ContactList access to the App context (contacts)
  const context = useContext(Context1);

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
  );
}

export default ContactList;
