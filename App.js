/*
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContactDetails from "./components/ContactDetails";
import AddNewContactForm from "./components/AddNewContactForm";
import CalculatorInput from "./components/CalculatorInput";
import TravelChecklist from "./components/TravelChecklist";
import { NavigationContainer } from "@react-navigation/native";
*/

import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Component used in StackNavigator
import ContactList from "./components/ContactList";
import CalculatorInput from "./components/CalculatorInput";
import Calendar from "./components/Calendar";

function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="CONTACTS"
        onPress={() => navigation.navigate("Contacts")}
      />

      <Button
        title="CALENDAR"
        onPress={() => navigation.navigate("Calendar")}
      />

      <Button
        title="CALCULATOR"
        onPress={() => navigation.navigate("Calculator")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const serverURL = "ws://192.168.1.34/5000/websocket";

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`${serverURL}/`)
      .then((res) => {
        //
        if (res.ok) {
          //if the response is received correctly
          console.log(res);
          return res.json(); //return the response as a javascript object (this is what .json() does)
        } else {
          throw new Error("Not 2xx response");
        }
      })
      .then((json) => {
        // upon success, update tasks
        setContacts(json);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
        // upon failure, show error message
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Contacts" component={ContactList} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Calculator" component={CalculatorInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
