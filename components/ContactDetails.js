import React, { useState, useContext, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button, Title } from "react-native-paper";
import { Context1 } from "../App";

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
--Currently does not function, it would be nice if it did
*/

function ContactDetails({ route, navigation }) {
  const id = route.params.id;
  const [contact, setContact] = useState([]);

  const context = useContext(Context1);

  const styles = StyleSheet.create({
    title: {
      fontWeight: "normal",
      color: "#00004d",
      textDecorationLine: "underline",
    },
    name: {
      fontSize: 40,
      lineHeight: 40,
      fontFamily: "sans-serif",
      fontWeight: "normal",
      paddingBottom: 20,
    },
    row: {
      flex: 1,
      paddingVertical: 25,
      paddingHorizontal: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: "white",
    },
    button: {
      marginBottom: 5,
      padding: 10,
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
        context.setContacts(json);
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
          <View style={styles.row}>
            <Text>
              <Text style={styles.name}>
                {item.firstname} {item.lastname}
              </Text>
              {"\n"} {"\n"} <Title style={styles.title}>specialty</Title> {"\n"}{" "}
              {item.specialty}
              {"\n"} <Title style={styles.title}>phone #</Title> {"\n"}
              <Text> {item.phonenumber} </Text>
              {"\n"} <Title style={styles.title}>e-mail</Title> {"\n"}{" "}
              {item.email}
              {"\n"} <Title style={styles.title}>office location</Title> {"\n"}
              {item.officename}
              {"\n"} <Title style={styles.title}>additional notes</Title> {"\n"}{" "}
              {item.notes}
            </Text>
          </View>
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
