import { React, useState } from "react";
import { View, ScrollView, Button, TextInput, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Header } from "react-native-elements";

//The calculator input form
//Should take inputs like destination, duration of trip, insulin use per day, devices used
//Have a button to return to home screen
//Have a button to generate checklist

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
        onPress={() => (abroad === false ? setAbroad(true) : setAbroad(false))}
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
        onPress={() =>
          localDestination === false
            ? setLocalDestination(true)
            : setLocalDestination(false)
        }
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
        onPress={() =>
          insulinPump === false ? setInsulinPump(true) : setInsulinPump(false)
        }
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
        onPress={() =>
          glucometer === false ? setGlucometer(true) : setGlucometer(false)
        }
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
        onPress={() => (sensor === false ? setSensor(true) : setSensor(false))}
      />

      <Button
        title="Generate Checklist"
        onPress={() =>
          navigation.navigate("Travel Checklist", { abroad: abroad })
        }
      />
    </ScrollView>
  );
}

export default CalculatorInput;
