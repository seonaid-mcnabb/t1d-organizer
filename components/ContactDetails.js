import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

//THE CONTACT DETAILS VIEW//
/*
--Displays Contact Name & Details
--How? It receives contact id from Contact List by first accepting route as parameter
--And then declares the id variable as route.params.id (sent from contact list)
--Then uses the id to fetch this particular contact and setContact with useEffect

//DELETE BUTTON
--Triggers the handleDeleteContact() function
--Handle delete function fetches delete function from backend

//EDIT BUTTON
--Currently does not function
*/

function ContactDetails({ route, navigation }) {
  const id = route.params.id;
  const [contact, setContact] = useState([]);

  const styles = StyleSheet.create({
    button: {
      marginBottom: 5,
      padding: 5,
    },
    space: {
      width: 20, // or whatever size you need
      height: 20,
    },
  });

  useEffect(() => {
    fetch(`http://localhost:5000/contacts/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Not 2xx response");
        }
      })
      .then((json) => {
        setContact(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteContact = () => {
    fetch(`http://localhost:5000/contacts/${id}`, {
      method: "delete",
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Not 2xx response");
        }
      })
      .then((json) => {
        console.log(json);
        navigation.navigate("Contacts");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <FlatList
        data={contact}
        renderItem={({ item }) => (
          <Text>
            {" "}
            Name: {item.firstname} {item.lastname}
            Specialty: {item.specialty}
            Notes:{item.notes}
          </Text>
        )}
      />
      <Button
        style={styles.button}
        icon="account-edit-outline"
        mode="contained"
        color="#0000b3"
      >
        Edit
      </Button>

      <Button
        style={styles.button}
        icon="delete-empty-outline"
        mode="contained"
        color="#0000b3"
        onPress={handleDeleteContact}
      >
        Delete
      </Button>
    </View>
  );
}

export default ContactDetails;
