import { React, useState } from "react";
import { ScrollView, Button, Text, TextInput, View } from "react-native";

//THE ADD NEW CONTACT FORM SHOULD:
//Accept and record details of a new contact
//Add the contact and details to the contacts database upon submit

function AddNewContactForm({ navigation }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [office, setOffice] = useState("");
  const [notes, setNotes] = useState("");

  /*
    fetch("http://localhost:5000/addcontact", {
      firstname: {firstname},
        lastname: {lastname},
        specialty: {specialty},
        phonenumber: {phonenumber},
        email: {email},
        officename: {office},
        notes: {notes}
*/

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
      .then((json) => console.log(json)) // Then print the JSON
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <TextInput
        placeholder="First Name"
        onChangeText={(text) => setFirstname(text)}
      ></TextInput>
      <TextInput
        placeholder="Last Name"
        onChangeText={(text) => setLastname(text)}
      ></TextInput>
      <TextInput
        placeholder="Specialty"
        onChangeText={(text) => setSpecialty(text)}
      ></TextInput>
      <TextInput
        placeholder="Phone Number"
        onChangeText={(text) => setPhonenumber(text)}
      ></TextInput>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        placeholder="Office Location"
        onChangeText={(text) => setOffice(text)}
      ></TextInput>
      <TextInput
        placeholder="Notes"
        onChangeText={(text) => setNotes(text)}
      ></TextInput>
      <Button title="ADD" onPress={handleSubmit}></Button>
    </ScrollView>
  );
}

export default AddNewContactForm;
