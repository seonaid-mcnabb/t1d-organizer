import react from "React";
import { View, ScrollView, Button } from "react-native";

//The calculator input form
//Should take inputs like destination, duration of trip, insulin use per day, devices used
//Have a button to return to home screen
//Have a button to generate checklist

function CalculatorInput() {
  return (
    <ScrollView>
      <h1> 5. Calculate </h1>
      <Button title="GO BACK" />
      <form>
        <ul>
          <li>
            <label for="destination">Destination:</label>
            <select name="destination" id="destination">
              <option value="local">local</option>
              <option value="international">international</option>
            </select>
          </li>

          <li>
            <label for="Duration">Duration:</label>
            <input name="duration"></input> days
          </li>

          <li>
            <label for="InsulinUse">Average insulin use:</label>
            <input name="insulin-use"></input> units/day
          </li>

          <label for="devices">
            <h2>Devices:</h2>
          </label>
          <li>
            <input
              type="checkbox"
              id="MiniMed Insulin Pump"
              name="MiniMed Insulin Pump"
              value="MiniMed Insuln Pump"
            ></input>
            <label for="MiniMed Insulin Pump">MiniMed Insulin Pump</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="Freestyle Libre Sensor"
              name="Freestyle Libre Sensor"
              value="Freestyle Libre Sensor"
            ></input>
            <label for="Freestyle Libre Sensor">Freestyle Libre Sensor</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="Glucometer"
              name="Glucometer"
              value="Glucometer"
            ></input>
            <label for="Glucometer">Glucometer</label>
          </li>
        </ul>
        <Button title="Generate Checklist" />
      </form>
    </ScrollView>
  );
}

export default CalculatorInput;
