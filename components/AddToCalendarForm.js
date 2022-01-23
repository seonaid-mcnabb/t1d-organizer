import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import DateField from "react-native-datefield";
import { TextInput, Text, Checkbox, Button } from "react-native-paper";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Context1 } from "../App";

//ADD TO CALENDAR FUNCTIONALITY//
/*
--Renders an input form
--Records states (corresponds to backend)
--Sends the states to the backend in a post request when addNewAppointment function is triggered by submit button
--Navigates back to the Calendar View when appointment has been added and updates context so data is reflected
*/

function AddToCalendarForm({ navigation }) {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [labwork, setLabwork] = useState(false);
  const [notes, setNotes] = useState("");

  const context = useContext(Context1);

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

  const addNewAppointment = () => {
    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        date: date,
        time: time,
        location: location,
        labwork: labwork,
        notes: notes,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        context.setAppointments(json);
        navigation.navigate("Calendar");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <Text style={styles.headings}>Appointment Date:</Text>
      <DateField
        labelDate="Input day"
        labelMonth="Input month"
        labelYear="Input year"
        styleInput={styles.text}
        onSubmit={(value) => setDate(value)}
      />

      <Text style={styles.headings}>Check if labwork necessary:</Text>
      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Labwork"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
        onPress={() =>
          labwork === false ? setLabwork(true) : setLabwork(false)
        }
      />

      <Text style={styles.headings}>Additional Information:</Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Appointment Type"
        onChangeText={(text) => setType(text)}
      />

      <TextInput
        keyboardType="numeric"
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Time"
        onChangeText={(text) => setTime(text)}
      />
      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Location"
        onChangeText={(text) => setLocation(text)}
      />

      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Additional Notes"
        onChangeText={(text) => setNotes(text)}
      />

      <Button
        style={styles.button}
        icon="check"
        mode="contained"
        color="#0000b3"
        onPress={addNewAppointment}
      >
        Submit
      </Button>
    </View>
  );
}

export default AddToCalendarForm;
