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
    name: {
      fontSize: 20,
      lineHeight: 20,
      fontFamily: "sans-serif",
      fontWeight: "normal",
      paddingBottom: 20,
    },
    seemorebutton: {
      marginBottom: 0,
      paddingBottom: 0,
      fontFamily: "sans-serif",
      fontWeight: "normal",
      fontSize: 12,
      paddingBottom: 0,
    },
    button: {
      marginBottom: 10,
      marginTop: 14,
      padding: 3,
    },
    space: {
      width: 20, // or whatever size you need
      height: 20,
    },
  });

  return (
    <View style={{ alignItems: "left" }}>
      <FlatList
        data={context}
        renderItem={({ item }) => (
          <Text style={styles.name}>
            {" "}
            {item.firstname} {item.lastname}{" "}
            <Button
              style={styles.seemorebutton}
              icon="magnify"
              mode="contained"
              color="#ccd9ff"
              onPress={() =>
                navigation.navigate("Contact Details", { id: item.id })
              }
            >
              details
            </Button>{" "}
          </Text>
        )}
      />

      <Button
        style={styles.button}
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
