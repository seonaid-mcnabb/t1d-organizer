import react from "React";
import { View, ScrollView, Button } from "react-native";

//THE CONTACT DETAILS VIEW
//Should display the selected contact's name at the top
//Should include all completed information about the candidate (speciality) (phone number) (email)

function ContactDetails() {
  return (
    <ScrollView>
      <h1>3. Contact Name</h1>
      <Button title="GO BACK" />
      <ul>
        <li>
          Phone number: <button>CALL</button>
        </li>
        <li>
          E-mail: <button>SEND A MESSAGE</button>
        </li>
        <li>Address:</li>
        <li>Notes:</li>
      </ul>
      <Button title="EDIT" />
    </ScrollView>
  );
}

export default ContactDetails;
