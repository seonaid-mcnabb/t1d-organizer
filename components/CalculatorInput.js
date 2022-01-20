import { React, useState } from "react";
import { View, ScrollView, Button, TextInput, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Header } from "react-native-elements";

//The calculator input form
//Should take inputs like destination, duration of trip, insulin use per day, devices used
//Have a button to return to home screen
//Have a button to generate checklist

//NOTE TO SELF_ make checkkboxes for destination
//Notes to self: make checkbox inputs for destination & devices

function CalculatorInput({ navigation }) {
  const [localDestination, setLocalDestination] = useState(false);
  const [abroad, setAbroad] = useState(false);
  const [duration, setDuration] = useState([]);
  const [insulinUse, setInsulinUse] = useState([]);
  const [insulinPump, setInsulinPump] = useState(false);
  const [glucometer, setGlucometer] = useState(false);
  const [sensor, setSensor] = useState(false);

  return (
    <ScrollView>
      <Text color="blue" size="60px">
        Where are you heading?
      </Text>
      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Abroad"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
          textDecorationLine: "none",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Local"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
          textDecorationLine: "none",
        }}
      />

      <Text> Insulin use per day: </Text>
      <TextInput
        placeholder="enter units"
        onChangeText={(text) => setInsulinUse(text)}
      ></TextInput>

      <Text>How long will you be away?</Text>
      <TextInput
        placeholder="enter days"
        onChangeText={(text) => setDuration(text)}
      ></TextInput>

      <Text>Devices you use:</Text>

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Minimed Insulin Pump"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
          textDecorationLine: "none",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Freestlye Glucometer"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
          textDecorationLine: "none",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Freestyle Libre Sensor"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
          textDecorationLine: "none",
        }}
      />

      <Button
        title="Generate Checklist"
        onPress={() => navigation.navigate("Travel Checklist")}
      />
    </ScrollView>
  );
}

export default CalculatorInput;
