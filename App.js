//Imports for funcionality, native components & styling
import * as React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//I imported this but did not actually figure out how to manipulate the whole APP with PaperProvider
//I did styling individually on components
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
  //Styling to space buttons on homescreen
  const styles = StyleSheet.create({
    button: {
      marginBottom: 5,
      padding: 10,
    },
    space: {
      width: 20,
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

/*ABOUT CONTEXT*/
/*--A context is created and exported through React
--All of the data declared / fetched in this context (in this case, APP.JS), will be available to all components

--Declare data you'd like to pass before app return area
--Wrap the return Stack Navigator in the context you created
--Add values to the Context.Provider-- the values declared here will be available throughout the app 
--They can be data, functions, etc.
*/
export const Context1 = React.createContext(null);

function App() {
  //I want to be able to access the data obtained for appts., materials,
  //and contacts throughout the app, so I declare them all here
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [materials, setMaterials] = useState([]);

  //This grabs all the contacts from database and sets state
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

  //This grabs all the appointments from database and sets state
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          throw new Error("Not 2xx response");
        }
      })
      .then((json) => {
        setAppointments(json);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //This grabs all the materials from database and sets state
  useEffect(() => {
    fetch("http://localhost:5000/materials")
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          throw new Error("Not 2xx response");
        }
      })
      .then((json) => {
        setMaterials(json);
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
  --Then addiding onPress function with navigation.navigation("SCREEN-NAME-OF-YOUR-CHOICE")
  */
  return (
    <PaperProvider>
      <NavigationContainer>
        <Context1.Provider
          value={{
            contacts,
            setContacts,
            appointments,
            setAppointments,
            materials,
            setMaterials,
          }}
        >
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
