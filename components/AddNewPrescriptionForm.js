import React, { useState } from "react";
import { Text, View } from "react-native";
import DateField from "react-native-datefield";
import { TextInput, Button } from "react-native-paper";

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
      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Medication or Supply"
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

      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Duration"
        onChangeText={(text) => setDuration(text)}
      />

      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Order Method"
        onChangeText={(text) => setOrdermethod(text)}
      />

      <Text>Notes:</Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Notes"
        onChangeText={(text) => setNotes(text)}
      />
      <Button
        icon="check"
        mode="contained"
        color="#0000b3"
        onPress={addNewPrescription}
      >
        Submit
      </Button>
    </View>
  );
}

export default AddNewPrescriptionForm;
