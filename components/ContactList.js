import React, { useContext, useEffect, useState, useCallback } from "react";
import { View, FlatList, Text } from "react-native";
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

  const data = [
    { value: "Lillie-Mai Allen", key: "lCUTs2" },
    { value: "Emmanuel Goldstein", key: "TXdL0c" },
    { value: "Winston Smith", key: "zqsiEw" },
    { value: "William Blazkowicz", key: "psg2PM" },
    { value: "Gordon Comstock", key: "1K6I18" },
    { value: "Philip Ravelston", key: "NVHSkA" },
    { value: "Rosemary Waterlow", key: "SaHqyG" },
    { value: "Julia Comstock", key: "iaT1Ex" },
    { value: "Mihai Maldonado", key: "OvMd5e" },
    { value: "Murtaza Molina", key: "25zqAO" },
    { value: "Peter Petigrew", key: "8cWuu3" },
  ];

  return (
    <View>
      <FlatList
        data={context}
        renderItem={({ item }) => (
          <Text>
            {" "}
            {item.firstname} {item.lastname}{" "}
            <Button
              icon="magnify"
              mode="contained"
              color="#e6005c"
              onPress={() =>
                navigation.navigate("Contact Details", { id: item.id })
              }
            >
              Details
            </Button>{" "}
          </Text>
        )}
      />

      <Button
        //style={styles.button}
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
