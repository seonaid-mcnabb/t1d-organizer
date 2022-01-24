import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button } from "react-native-paper";

//TRAVEL CHECKLIST FUNCTIONALITY//
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

  const styles = StyleSheet.create({
    maintitle: {
      fontSize: 20,
      lineHeight: 20,
      fontFamily: "sans-serif",
      fontWeight: "bold",
      color: "#00004d",
      textDecorationLine: "underline",
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 5,
    },
    headings: {
      fontSize: 18,
      lineHeight: 18,
      fontFamily: "sans-serif",
      fontWeight: "normal",
      color: "#00004d",
      marginBottom: 8,
      marginLeft: 5,
    },
    text: {
      fontSize: 15,
      lineHeight: 15,
      fontFamily: "sans-serif",
      fontWeight: "normal",
      color: "black",
      marginBottom: 5,
    },
    checkbox: {
      borderColor: "grey",
      borderWidth: 1.5,
      borderRadius: 3,
      marginBottom: 5,
      marginLeft: 20,
    },
    button: {
      marginBottom: 5,
      marginTop: 10,
      padding: 10,
    },
    space: {
      width: 20, // or whatever size you need
      height: 20,
    },
  });

  return (
    <ScrollView>
      <Text style={styles.maintitle}>MEDICAL CARRY-ON</Text>
      {insulinPump === true ? (
        <Text style={styles.headings}>insulin pump materials</Text>
      ) : null}
      {insulinPump === true ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="Pump Inserter"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {insulinPump === true ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="AA Batteries: 4-pack"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {insulinPump === true && duration <= 7 ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="5 Infusion Sites"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {insulinPump === true && duration > 7 ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text={`${Math.ceil(duration / 3) * 2} infusion sites`}
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {insulinPump === true && duration <= 7 ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="5 Reservoirs"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {insulinPump === true && duration > 7 ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text={`${Math.ceil(duration / 3) * 2} reservoirs`}
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {insulinPump === true && 1000 / insulinUse >= duration ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="2 Vials of Humalog Insulin"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {insulinPump === true && 1000 / insulinUse < duration ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text={`You need to work on this equation`}
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {sensor === true ? (
        <Text style={styles.headings}>glucose sensor materials</Text>
      ) : null}

      {sensor === true ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="Reader Charger"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {sensor === true ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="Data Transfer Cable"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {sensor === true && duration >= 14 ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text={`${Math.round(duration / 14) + 1} sensors`}
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {sensor === true && duration <= 14 ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="2 Sensors"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {glucometer === true ? (
        <Text style={styles.headings}>glucometer materials</Text>
      ) : null}
      {glucometer === true ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="Back-up Glucometer"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {glucometer === true ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="Glucometer Charger"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {glucometer === true && duration > 14 ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="Box of lancets"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {glucometer === true && sensor === true && duration <= 14 ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text={`${duration * 5} test strips`}
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {glucometer === true && sensor === true && duration > 14 ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text={`${duration * 8} test strips`}
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {glucometer === true && sensor === false ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text={`${duration * 8} test strips`}
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}
      <Text style={styles.headings}>alternative treatment supplies</Text>
      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Glucagon: check expiration date!"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="2 Lantus pens"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="2 Humalog pens"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="1 Box of Insulin Pen Syringes"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Spare Insulin Pump"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="AAA Batteries: 4-pack"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <Text style={styles.maintitle}>IN-FLIGHT TRAVEL BAG</Text>

      <Text style={styles.headings}>documents</Text>
      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Passport or ID Card"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      {abroad === true ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="Airport Medical Permission Letter"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      {abroad === true ? (
        <BouncyCheckbox
          size={17}
          fillColor="#e6005c"
          unfillColor="#FFFFFF"
          text="Travelers insurance or EU International Health Card"
          iconStyle={styles.checkbox}
          textStyle={styles.text}
        />
      ) : null}

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="ID Bracelet"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />
      <Text style={styles.headings}>medical supplies</Text>

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Sensor Data Reader"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />
      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Glucometer"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="50 test strips"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="2 Infusion Sets"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="2 Reservoirs"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="1 vial of Humalog insulin"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Pump Inserter"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Sensor Reader"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Replacement sensor (1 box)"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="4-pack of AA batteries"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="1 Lantus Pen"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="1 Humalog Pen"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="10 lancets"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="10 Insulin Pen Syringes"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Sensor Device Charger"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />

      <BouncyCheckbox
        size={17}
        fillColor="#e6005c"
        unfillColor="#FFFFFF"
        text="Juice/Candy (at least 60 carbs' worth)"
        iconStyle={styles.checkbox}
        textStyle={styles.text}
      />
      <Button
        style={styles.button}
        icon="airplane"
        mode="contained"
        color="#0000b3"
      >
        Ready To Go!
      </Button>
    </ScrollView>
  );
}

export default TravelChecklist;
