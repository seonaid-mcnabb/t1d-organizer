import React from "react";
import { ScrollView, Button, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { List } from "react-native-paper";

//TRAVEL CHECKLIST FUNCTIONALIT//
/*--Accepts route as parameter
--Through route, accepts all of the states sent by CalculatorInput.js
--Generates checkboxes
--Some items are default (must be brought, regardless of choices on CalculatorInput)
--Other checkboxes contain logic to determine quantity of items needed based on duration / destination
--If there is logic involved, it's written before checkbox is rendered--so item only rendered if necessary

--Currently: cannot save checklist anywhere (would be ideal to come back and work on later)
 */

function TravelChecklist({ route }) {
  const {
    abroad,
    localDestination,
    duration,
    insulinUse,
    insulinPump,
    glucometer,
    sensor,
  } = route.params;

  return (
    <ScrollView>
      <Text>ALL THIS STUFF GOES IN MEDICAL CARRY-ON</Text>
      {insulinPump === true ? <Text>INSULIN PUMP MATERIALS</Text> : null}
      {insulinPump === true ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="Pump Inserter"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {insulinPump === true ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="AA Batteries: 4-pack"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {insulinPump === true && duration <= 7 ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="5 Infusion Sites"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {insulinPump === true && duration > 7 ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text={`${Math.ceil(duration / 3) * 2} infusion sites`}
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {insulinPump === true && duration <= 7 ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="5 Reservoirs"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {insulinPump === true && duration > 7 ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text={`${Math.ceil(duration / 3) * 2} reservoirs`}
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {insulinPump === true && 1000 / insulinUse >= duration ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="2 Vials of Humalog Insulin"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {insulinPump === true && 1000 / insulinUse < duration ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text={`You need to work on this equation`}
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {sensor === true ? <Text>GLUCOSE SENSOR MATERIALS</Text> : null}

      {sensor === true ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="Reader Charger"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {sensor === true ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="Data Transfer Cable"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {sensor === true && duration >= 14 ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text={`${Math.round(duration / 14) + 1} sensors`}
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {sensor === true && duration <= 14 ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="2 Sensors"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {glucometer === true ? <Text>GLUCOMETER MATERIALS</Text> : null}
      {glucometer === true ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="Back-up Glucometer"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {glucometer === true ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="Glucometer Charger"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {glucometer === true && duration > 14 ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="Box of lancets"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {glucometer === true && sensor === true && duration <= 14 ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text={`${duration * 5} test strips`}
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {glucometer === true && sensor === true && duration > 14 ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text={`${duration * 8} test strips`}
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {glucometer === true && sensor === false ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text={`${duration * 8} test strips`}
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}
      <Text>IF EVERYTHING FAILS - ALTERNATIVE TREATMENT SUPPLIES</Text>
      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Glucagon: check expiration date!"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="2 Lantus pens"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="2 Humalog pens"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="1 Box of Insulin Pen Syringes"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Spare Insulin Pump"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="AAA Batteries: 4-pack"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <Text>
        ALL OF THIS STUFF GOES IN A SMALLER CARRY-ON / EASILY ACCESSIBLE BAG
      </Text>

      <Text>TRAVEL DOCUMENTS</Text>
      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Passport or ID Card"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      {abroad === true ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="Airport Medical Permission Letter"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      {abroad === true ? (
        <BouncyCheckbox
          size={15}
          fillColor="blue"
          unfillColor="#FFFFFF"
          text="Travelers insurance or EU International Health Card"
          iconStyle={{ borderColor: "black" }}
          textStyle={{
            fontFamily: "Times New Roman",
            color: "black",
          }}
        />
      ) : null}

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="ID Bracelet"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />
      <Text>IN-FLIGHT / TRAVEL BAG</Text>

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Sensor Data Reader"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />
      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Glucometer"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="50 test strips"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="2 Infusion Sets"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="2 Reservoirs"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="1 vial of Humalog insulin"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Pump Inserter"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Sensor Reader"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Replacement sensor (1 box)"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="4-pack of AA batteries"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="1 Lantus Pen"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="1 Humalog Pen"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="10 lancets"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="10 Insulin Pen Syringes"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Sensor Device Charger"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <BouncyCheckbox
        size={15}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Juice/Candy (at least 60 carbs' worth)"
        iconStyle={{ borderColor: "black" }}
        textStyle={{
          fontFamily: "Times New Roman",
          color: "black",
        }}
      />

      <Button title="I'm ready to go!"></Button>
    </ScrollView>
  );
}

export default TravelChecklist;
