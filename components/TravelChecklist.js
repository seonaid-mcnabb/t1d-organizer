import react from "React";

//The travel checklist should
//Have a button to go back to input form
//Be interactive (each item will have a checkbox to mark as packed)
//Be divided into sections based on device / need
//the "ready to go" button should only be clickable when all items have been checked off
//once clicked, a complete list of the items packed should be sent to the user

function TravelChecklist() {
  return (
    <div>
      <h1>Travel Checklist</h1>
      <button>GO BACK</button>
      <ul>
        <h2>Travel Documents</h2>
        <li>
          Medical Letter <input type="checkbox"></input>
        </li>

        <h2>Insulin Pump Materials</h2>
        <li>
          {" "}
          AA Batteries
          <input type="checkbox"></input>
        </li>

        <h2>Sensor Materials</h2>
        <li>
          {" "}
          2 sensor boxes
          <input type="checkbox"></input>
        </li>

        <h2>Glucometer Materials</h2>
        <li>
          {" "}
          100 test strips
          <input type="checkbox"></input>
        </li>

        <h2>Emergency Supplies</h2>
        <li>
          {" "}
          1 Glucagon
          <input type="checkbox"></input>
        </li>

        <h2>Travel Bag</h2>
        <li>
          {" "}
          2 Reservoirs
          <input type="checkbox"></input>
        </li>
      </ul>
      <button>I'm ready to go!</button>
    </div>
  );
}

export default TravelChecklist;
