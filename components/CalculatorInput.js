import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
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
      fontSize: 15,
      lineHeight: 15,
      fontFamily: "sans-serif",
      fontWeight: "normal",
      color: "black",
      marginBottom: 5,
      textDecorationLine: "none",
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

  return (
    <ScrollView>
      <Text style={styles.headings}>Where are you heading?</Text>

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Abroad"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
        onPress={() => (abroad === false ? setAbroad(true) : setAbroad(false))}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Local"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
        onPress={() =>
          localDestination === false
            ? setLocalDestination(true)
            : setLocalDestination(false)
        }
      />

      <Text style={styles.headings}>Insulin use per day: </Text>
      <TextInput
        keyboardType="numeric"
        mode="outlined"
        activeOutlineColor="#0000b3"
        placeholder="enter units"
        onChangeText={(text) => setInsulinUse(text)}
      ></TextInput>

      <Text style={styles.headings}>How long will you be away?</Text>
      <TextInput
        keyboardType="numeric"
        mode="outlined"
        activeOutlineColor="#0000b3"
        placeholder="enter days"
        onChangeText={(text) => setDuration(text)}
      ></TextInput>

      <Text style={styles.headings}>Devices you use:</Text>

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Minimed Insulin Pump"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
        onPress={() =>
          insulinPump === false ? setInsulinPump(true) : setInsulinPump(false)
        }
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Freestlye Glucometer"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
        onPress={() =>
          glucometer === false ? setGlucometer(true) : setGlucometer(false)
        }
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Freestyle Libre Sensor"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
        onPress={() => (sensor === false ? setSensor(true) : setSensor(false))}
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
        style={styles.button}
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
