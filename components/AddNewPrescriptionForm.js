import { React, useState } from "react";
import { ScrollView, Button, Text, TextInput, View } from "react-native";
import DateField from "react-native-datefield";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
      .then((res) => res.json()) //First transform the JSON to a Javascript object
      .then((json) => console.log(json)) // Then print the JSON
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
