import React, { useState, useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Button, Title } from "react-native-paper";
import { Context1 } from "../App";

//THE ADD NEW CONTACT FORM SHOULD:
//Accepts and record details of a new contact
//Adds the contact and details to the contacts database upon submit
//Updates the contacts state through context so that data is displayed immediately

function AddNewContactForm({ navigation }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [office, setOffice] = useState("");
  const [notes, setNotes] = useState("");

  const context = useContext(Context1);

  const handleSubmit = () => {
    fetch("http://localhost:5000/addcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        specialty: specialty,
        phonenumber: phonenumber,
        email: email,
        officename: office,
        notes: notes,
      }),
    })
      .then((res) => res.json()) //First transform the JSON to a Javascript object
      .then((json) => {
        console.log(json);
        context.setContacts(json); //here is where whole app context is updated
        navigation.navigate("Contacts");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="First Name"
        onChangeText={(text) => setFirstname(text)}
      ></TextInput>
      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Last Name"
        onChangeText={(text) => setLastname(text)}
      ></TextInput>
      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Specialty"
        onChangeText={(text) => setSpecialty(text)}
      ></TextInput>
      <TextInput
        keyboardType="numeric"
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Phone Number"
        onChangeText={(text) => setPhonenumber(text)}
      ></TextInput>
      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Email"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Office Location"
        onChangeText={(text) => setOffice(text)}
      ></TextInput>
      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Notes"
        onChangeText={(text) => setNotes(text)}
      ></TextInput>

      <Button
        icon="check"
        mode="contained"
        color="#0000b3"
        onPress={handleSubmit}
      >
        Submit
      </Button>
    </ScrollView>
  );
}

export default AddNewContactForm;
