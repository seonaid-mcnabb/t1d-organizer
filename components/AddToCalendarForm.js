import React, { useState } from "react";
import { View } from "react-native";
import DateField from "react-native-datefield";
import { TextInput, Text, Checkbox, Button } from "react-native-paper";

//ADD TO CALENDAR FUNCTIONALITY//
/*
--Renders an input form
--Records states (corresponds to backend)
--Sends the states to the backend in a post request when addNewAppointment function is triggered by submit button
--Navigates back to the Calendar View when appointment has been added
*/

function AddToCalendarForm({ navigation }) {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [labwork, setLabwork] = useState(false);
  const [notes, setNotes] = useState("");

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
        label="Appointment Type"
        onChangeText={(text) => setType(text)}
      />

      <Text>Date:</Text>
      <DateField
        labelDate="Input day"
        labelMonth="Input month"
        labelYear="Input year"
        //styleInput={styles.inputBorder}
        onSubmit={(value) => setDate(value)}
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

      <Checkbox.Item
        label="Labwork"
        position="leading"
        color="#0000b3"
        status={labwork ? "checked" : "unchecked"}
        onPress={() => {
          setLabwork(!labwork);
        }}
      />

      <TextInput
        mode="outlined"
        activeOutlineColor="#0000b3"
        label="Additional Notes"
        onChangeText={(text) => setNotes(text)}
      />

      <Button
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
