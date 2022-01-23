//Imports for funcionality, native components & styling
import * as React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

//Components used in the Stack Navigatior
import ContactList from "./components/ContactList";
import AddNewContactForm from "./components/AddNewContactForm";
import ContactDetails from "./components/ContactDetails";
import Calendar from "./components/Calendar";
import AddToCalendarForm from "./components/AddToCalendarForm";
import AddNewPrescriptionForm from "./components/AddNewPrescriptionForm";
import ApptsPrescriptionsListView from "./components/ApptsPrescriptionsListView";
import CalculatorInput from "./components/CalculatorInput";
import TravelChecklist from "./components/TravelChecklist";

//The Welcome Screen is what the user sees first
//Props: Navigation, to enable user flow using React Navigation (explained below)
function WelcomeScreen({ navigation }) {
  const styles = StyleSheet.create({
    button: {
      marginBottom: 5,
      padding: 10,
    },
    space: {
      width: 20, // or whatever size you need
      height: 20,
    },
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        style={styles.button}
        icon="account-circle-outline"
        mode="contained"
        color="#0000b3"
        onPress={() => navigation.navigate("Contacts")}
      >
        Contacts
      </Button>

      <Button
        style={styles.button}
        icon="calendar-month-outline"
        mode="contained"
        color="#0000b3"
        onPress={() => navigation.navigate("Calendar")}
      >
        Calendar
      </Button>

      <Button
        icon="calculator-variant"
        style={styles.button}
        mode="contained"
        color="#0000b3"
        onPress={() => navigation.navigate("Calculator")}
      >
        Calculator
      </Button>
    </View>
  );
}

//Before going into App function, stack variable is declared and StackNavigator created
const Stack = createNativeStackNavigator();

//A context is exported, called Context1
//The components in the stack navigator are wrapped in the context
//All of the data declared/fetched in this context will be available to the components without
//having to pass props
//(This actually was not necessary but I think it's cool and don't want to forget how to use it)
export const Context1 = React.createContext(null);

//App grabs all of the contacts from the backend and sets them
//Because of context, they will be available throughout the app
//In the return function, it contains the stack navigator
function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          throw new Error("Not 2xx response");
        }
      })
      .then((json) => {
        setContacts(json);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Stack Navigator Below//
  /*
  --Contained in a Navigation Container
  --Wrapped in Context
  --Wrapped in Stack.Navigator
  --Each of the screens to be contained in this navigator is named, and linked to its component
  --You can navigate between screens anywhere in the app by declaring {navigation} as parameter in component
  --Then navigation.navigation("SCREEN-NAME")
  */
  return (
    <PaperProvider>
      <NavigationContainer>
        <Context1.Provider value={contacts}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={WelcomeScreen} />
            <Stack.Screen name="Contacts" component={ContactList} />
            <Stack.Screen
              name="Add New Contact"
              component={AddNewContactForm}
            />
            <Stack.Screen name="Contact Details" component={ContactDetails} />
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen
              name="Add To Calendar"
              component={AddToCalendarForm}
            />
            <Stack.Screen
              name="Add New Prescription"
              component={AddNewPrescriptionForm}
            />
            <Stack.Screen
              name="App and Prescriptions List View"
              component={ApptsPrescriptionsListView}
            />
            <Stack.Screen name="Calculator" component={CalculatorInput} />
            <Stack.Screen name="Travel Checklist" component={TravelChecklist} />
          </Stack.Navigator>
        </Context1.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
