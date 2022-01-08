import react from "React";

//The welcome screen should:
//Display three icons & three buttons: contacts, calendar, calculator

function WelcomeScreen() {
  return (
    <div>
      <h1>1. Welcome </h1>

      <button name="Contacts">CONTACTS</button>
      <button name="Calendar">CALENDAR</button>
      <button name="Calculator">CALCULATOR</button>
    </div>
  );
}

export default WelcomeScreen;
