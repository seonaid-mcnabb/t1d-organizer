import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
//Components currently used in StackNavigator
import ContactList from "./components/ContactList";
import CalculatorInput from "./components/CalculatorInput";
import Calendar from "./components/Calendar";
import AddNewContactForm from "./components/AddNewContactForm";
import ContactDetails from "./components/ContactDetails";
import TravelChecklist from "./components/TravelChecklist";
import AddToCalendarForm from "./components/AddToCalendarForm";
import AddNewPrescriptionForm from "./components/AddNewPrescriptionForm";

//This is what is displayed on the home page (links to contacts, calendar, and calculator)
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

//creates the stack navigation
const Stack = createNativeStackNavigator();

//Creates context 1
export const Context1 = React.createContext(null);

//This contains the stack navigator
function App({ navigation }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/contacts")
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
    <PaperProvider theme={PaperDefaultTheme}>
      <NavigationContainer>
        <Context1.Provider value={contacts}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={WelcomeScreen} />
            <Stack.Screen name="Contacts" component={ContactList} />
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen
              name="Add To Calendar"
              component={AddToCalendarForm}
            />
            <Stack.Screen
              name="Add New Prescription"
              component={AddNewPrescriptionForm}
            />
            <Stack.Screen name="Calculator" component={CalculatorInput} />
            <Stack.Screen
              name="Add New Contact"
              component={AddNewContactForm}
            />
            <Stack.Screen name="Contact Details" component={ContactDetails} />
            <Stack.Screen name="Travel Checklist" component={TravelChecklist} />
          </Stack.Navigator>
        </Context1.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
