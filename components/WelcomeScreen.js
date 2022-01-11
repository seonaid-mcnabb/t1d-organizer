import react from "React";
import { View, Button } from "react-native";

//The welcome screen should:
//Display three icons & three buttons: contacts, calendar, calculator

function WelcomeScreen() {
  return (
    <View>
      <h1>1. Welcome </h1>

      <Button title="CONTACTS"></Button>
      <Button title="CALENDAR"></Button>
      <Button title="CALCULATOR"></Button>
    </View>
  );
}

export default WelcomeScreen;
