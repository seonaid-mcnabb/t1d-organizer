/*
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./components/WelcomeScreen";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import AddNewContactForm from "./components/AddNewContactForm";
import CalculatorInput from "./components/CalculatorInput";
import TravelChecklist from "./components/TravelChecklist";
import { NavigationContainer } from "@react-navigation/native";
*/

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//pre-experiment with navigtor
/*
export default function App() {
  //Get data from the BE:
  // const [data, setData] = useState([])
  // fetch('/')
  // .then... and you get use it in the useContext hook if you'd like it on lood :)

  return <NavigationContainer>

  </NavigationContainer>
  ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
*/

//return area before experiment
/*
return (
  <View style={styles.container}>
    <h1>T1D Organizer</h1>
    
    <WelcomeScreen></WelcomeScreen>

    <ContactList> </ContactList>

    <ContactDetails></ContactDetails>

    <AddNewContactForm></AddNewContactForm>

    <CalculatorInput></CalculatorInput>

    <TravelChecklist></TravelChecklist>

    <StatusBar style="auto" />
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
},
});
*/
