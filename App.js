import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./components/WelcomeScreen";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import AddNewContactForm from "./components/AddNewContactForm";
import CalculatorInput from "./components/CalculatorInput";
import TravelChecklist from "./components/TravelChecklist";

export default function App() {
  //Get data from the BE:
  // const [data, setData] = useState([])
  // fetch('/')
  // .then... and you get use it in the useContext hook if you'd like it on lood :)

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
