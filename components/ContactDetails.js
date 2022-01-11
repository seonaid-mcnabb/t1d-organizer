import react from "React";
import { View, ScrollView } from "react-native";

//THE CONTACT DETAILS VIEW
//Should display the selected contact's name at the top
//Should include all completed information about the candidate (speciality) (phone number) (email)

function ContactDetails() {
  return (
    <ScrollView>
      <h1>3. Contact Name</h1>
      <button>GO BACK</button>
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
      <button>EDIT</button>
    </ScrollView>
  );
}

export default ContactDetails;
