import React from "React";
import { ScrollView, Button, Text } from "react-native";

//THE ADD NEW CONTACT FORM SHOULD:
//Accept and record details of a new contact
//Add the contact and details to the contacts database upon submit

function AddNewContactForm() {
  return (
    <ScrollView>
      <h1> 4. Add New Contact</h1>
      <Button title="GO BACK"></Button>
      <form>
        <ul>
          First Name:
          <li>
            <input name="firstname"></input>
          </li>
          Last Name:
          <li>
            <input name="lastname"></input>
          </li>
          Specialty:
          <li>
            <input name="specialty"></input>
          </li>
          Phone number:
          <li>
            <input name="phonenumber"></input>
          </li>
          E-mail:
          <li>
            <input name="email"></input>
          </li>
          Office:
          <li>
            <input name="office"></input>
          </li>
          Notes:
          <li>
            <textarea name="notes"></textarea>
          </li>
          <Button title="ADD"></Button>
        </ul>
      </form>
    </ScrollView>
  );
}

export default AddNewContactForm;
