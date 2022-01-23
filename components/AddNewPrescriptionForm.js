import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
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

  const styles = StyleSheet.create({
    headings: {
      fontSize: 18,
      lineHeight: 18,
      fontFamily: "sans-serif",
      fontWeight: "normal",
      color: "#00004d",
      marginBottom: 8,
      marginLeft: 5,
      marginTop: 5,
    },
    text: {
      fontSize: 20,
      lineHeight: 20,
      fontFamily: "sans-serif",
      fontWeight: "normal",
      color: "black",
      marginBottom: 5,
      borderTopColor: "black",
      textDecorationLine: "none",
    },
    headings: {
      fontSize: 18,
      lineHeight: 18,
      fontFamily: "sans-serif",
      fontWeight: "normal",
      color: "#00004d",
      marginBottom: 8,
      marginLeft: 5,
      marginTop: 5,
    },
    checkbox: {
      borderColor: "grey",
      borderWidth: 1.5,
      borderRadius: 3,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 20,
    },
    button: {
      marginBottom: 5,
      marginTop: 10,
      padding: 10,
    },
  });

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
      <Text style={styles.headings}>Date Received:</Text>
      <DateField
        labelDate="Input day"
        labelMonth="Input month"
        labelYear="Input year"
        styleInput={styles.text}
        onSubmit={(value) => setDatereceived(value)}
      />

      <Text style={styles.headings}>Additional Information:</Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Medication or Supply"
        onChangeText={(text) => setMedname(text)}
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

      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Notes"
        onChangeText={(text) => setNotes(text)}
      />
      <Button
        style={styles.button}
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
