import React, { useState } from "react";
import { ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TextInput, Text, Checkbox, Button } from "react-native-paper";

//CALCULATOR INPUT FORM FUNCTIONALITY//
/*--Renders a form with various possible inputs (currently only tailored to my personal treatments)
--Sets states based on input
--Contains logic within checkboxes to change from true / false onPress
--Has a "generate checklist button"
--The generate checklist button navigates to TravelChecklist.js
--^^On navigate, the state paramaters are sent along to the checklist view
 */

function CalculatorInput({ navigation }) {
  const [abroad, setAbroad] = useState(false);
  const [localDestination, setLocalDestination] = useState(false);
  const [duration, setDuration] = useState("");
  const [insulinUse, setInsulinUse] = useState("");
  const [insulinPump, setInsulinPump] = useState(false);
  const [glucometer, setGlucometer] = useState(false);
  const [sensor, setSensor] = useState(false);

  return (
    <ScrollView>
      <Text>Where are you heading?</Text>
      <Checkbox.Item
        label="Abroad"
        position="leading"
        color="#e6005c"
        status={abroad ? "checked" : "unchecked"}
        onPress={() => {
          setAbroad(!abroad);
        }}
      />

      <Checkbox.Item
        label="Local"
        position="leading"
        color="#e6005c"
        status={localDestination ? "checked" : "unchecked"}
        onPress={() => {
          setLocalDestination(!localDestination);
        }}
      />

      <Text> Insulin use per day: </Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="#3333ff"
        placeholder="enter units"
        onChangeText={(text) => setInsulinUse(text)}
      ></TextInput>

      <Text>How long will you be away?</Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="#3333ff"
        placeholder="enter days"
        onChangeText={(text) => setDuration(text)}
      ></TextInput>

      <Text>Devices you use:</Text>

      <Checkbox.Item
        label="Minimed Insulin Pump"
        position="leading"
        color="#e6005c"
        status={insulinPump ? "checked" : "unchecked"}
        onPress={() => {
          setInsulinPump(!insulinPump);
        }}
      />

      <Checkbox.Item
        label="Freestyle Glucometer"
        position="leading"
        color="#e6005c"
        status={glucometer ? "checked" : "unchecked"}
        onPress={() => {
          setGlucometer(!glucometer);
        }}
      />

      <Checkbox.Item
        label="Freestyle Glucometer"
        position="leading"
        color="#e6005c"
        status={sensor ? "checked" : "unchecked"}
        onPress={() => {
          setSensor(!sensor);
        }}
      />

      <Button
        icon="format-list-checkbox"
        mode="contained"
        color="#0000b3"
        onPress={() =>
          navigation.navigate("Travel Checklist", {
            abroad: abroad,
            localDestination: localDestination,
            duration: duration,
            insulinUse: insulinUse,
            insulinPump: insulinPump,
            glucometer: glucometer,
            sensor: sensor,
          })
        }
      >
        {" "}
        Generate Checklist{" "}
      </Button>

      <Button
        title="Generate Checklist"
        onPress={() =>
          navigation.navigate("Travel Checklist", {
            abroad: abroad,
            localDestination: localDestination,
            duration: duration,
            insulinUse: insulinUse,
            insulinPump: insulinPump,
            glucometer: glucometer,
            sensor: sensor,
          })
        }
      />
    </ScrollView>
  );
}

export default CalculatorInput;
