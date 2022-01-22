import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import DateField from "react-native-datefield";

//ADD NEW PRESCRIPTION FUNCTIONALITY//
/*
--Renders an input form
--Records states (corresponds to backend)
--Sends the states to the backend in a post request when addNewPrescription function is triggered by submit button
--Navigates back to the Calendar View when prescription has been added
*/

function AddNewPrescriptionForm({ navigation }) {
  const [medname, setMedname] = useState("");
  const [datereceived, setDatereceived] = useState("");
  const [duration, setDuration] = useState("");
  const [ordermethod, setOrdermethod] = useState("");
  const [notes, setNotes] = useState("");

  const addNewPrescription = () => {
    fetch("http://localhost:5000/addmaterial", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        medname: medname,
        datereceived: datereceived,
        duration: duration,
        ordermethod: ordermethod,
        notes: notes,
      }),
    })
      .then((res) => res.json())
      .then((json) => navigation.navigate("Calendar"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <Text>Medication Name:</Text>
      <TextInput
        placeholder="Add name"
        onChangeText={(text) => setMedname(text)}
      />

      <Text>Date Received:</Text>
      <DateField
        labelDate="Input day"
        labelMonth="Input month"
        labelYear="Input year"
        //styleInput={styles.inputBorder}
        onSubmit={(value) => setDatereceived(value)}
      />

      <Text>How long will it last:</Text>
      <TextInput
        placeholder="Add duration"
        onChangeText={(text) => setDuration(text)}
      />

      <Text>Order Method:</Text>
      <TextInput
        placeholder="Add method"
        onChangeText={(text) => setOrdermethod(text)}
      />

      <Text>Notes:</Text>
      <TextInput
        placeholder="Add notes"
        onChangeText={(text) => setNotes(text)}
      />

      <Button title="Add Prescription" onPress={addNewPrescription}></Button>
    </View>
  );
}

export default AddNewPrescriptionForm;
