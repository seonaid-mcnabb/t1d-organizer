import react from "React";

//THE ADD NEW CONTACT FORM SHOULD:
//Accept and record details of a new contact
//Add the contact and details to the contacts database upon submit

function AddNewContactForm() {
  return (
    <div>
      <h1>4. Add New Contact</h1>
      <button>GO BACK</button>
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
          Office Address:
          <li>
            <input name="address"></input>
          </li>
          Notes:
          <li>
            <textarea name="notes"></textarea>
          </li>
          <button type="submit">ADD</button>
        </ul>
      </form>
    </div>
  );
}

export default AddNewContactForm;
