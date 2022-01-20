import { React, useState, useEffect } from "react";
import { View, ScrollView, Button, Text, FlatList } from "react-native";
import { Context1 } from "../App";

//THE CONTACT DETAILS VIEW
//Should display the selected contact's name at the top
//Should include all completed information about the candidate (speciality) (phone number) (email)

function ContactDetails({ route, navigation }) {
  const id = route.params.id;
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/contacts/${id}`)
      .then((res) => {
        //
        if (res.ok) {
          //if the response is received correctly
          return res.json(); //return the response as a javascript object (this is what .json() does)
        } else {
          throw new Error("Not 2xx response");
        }
      })
      .then((json) => {
        // upon success, update tasks
        setContact(json);
      })
      .catch((error) => {
        console.log(error);
        // upon failure, show error message
      });
  }, []);

  const handleDeleteContact = () => {
    fetch(`http://localhost:5000/contacts/${id}`, {
      method: "delete",
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json(); //return the response as a javascript object (this is what .json() does)
        } else {
          throw new Error("Not 2xx response");
        }
      })
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
        // upon failure, show error message
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

      <Button title="EDIT" />
      <Button title="DELETE" onPress={handleDeleteContact} />
    </View>
  );
}

export default ContactDetails;
