import { React, useState } from "react";
import { ScrollView, Button, Text, TextInput, View } from "react-native";
import DateField from "react-native-datefield";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
      .then((res) => res.json()) //First transform the JSON to a Javascript object
      .then((json) => console.log(json)) // Then print the JSON
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <Text>Appointment Type:</Text>
      <TextInput
        placeholder="Add type"
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

      <Text>Time</Text>
      <TextInput
        placeholder="Add Time"
        onChangeText={(text) => setTime(text)}
      />
      <Text>Location</Text>
      <TextInput
        placeholder="Add Location"
        onChangeText={(text) => setLocation(text)}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Labwork Necessary"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
          textDecorationLine: "none",
        }}
        onPress={() =>
          labwork === false ? setLabwork(true) : setLabwork(false)
        }
      />

      <Text>Additional Notes:</Text>
      <TextInput
        placeholder="Add notes"
        onChangeText={(text) => setNotes(text)}
      />

      <Button
        title="Submit New Appointment"
        onPress={addNewAppointment}
      ></Button>
    </View>
  );
}

export default AddToCalendarForm;
