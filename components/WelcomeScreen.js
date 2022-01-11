import react from "React";
import { View } from "react-native";

//The welcome screen should:
//Display three icons & three buttons: contacts, calendar, calculator

function WelcomeScreen() {
  return (
    <View>
      <h1>1. Welcome </h1>

      <button name="Contacts">CONTACTS</button>
      <button name="Calendar">CALENDAR</button>
      <button name="Calculator">CALCULATOR</button>
    </View>
  );
}

export default WelcomeScreen;
