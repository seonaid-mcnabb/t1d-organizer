import React, { useContext, useEffect, useState, useCallback } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Context1 } from "../App";
import { Button } from "react-native-paper";

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

  const styles = StyleSheet.create({
    button: {
      marginBottom: 10,
      padding: 3,
    },
    space: {
      width: 20, // or whatever size you need
      height: 20,
    },
  });

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        data={context}
        renderItem={({ item }) => (
          <Text>
            {" "}
            {item.firstname} {item.lastname}{" "}
            <Button
              style={styles.button}
              icon="magnify"
              mode="contained"
              color="#e6005c"
              onPress={() =>
                navigation.navigate("Contact Details", { id: item.id })
              }
            ></Button>{" "}
          </Text>
        )}
      />

      <Button
        icon="account-plus-outline"
        mode="contained"
        color="#0000b3"
        onPress={() => navigation.navigate("Add New Contact")}
      >
        {" "}
        Add New Contact{" "}
      </Button>
    </View>
  );
}

export default ContactList;
