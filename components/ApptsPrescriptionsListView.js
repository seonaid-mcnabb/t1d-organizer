import React, { useContext, useState } from "react";
import { View, ScrollView, FlatList, Text, StyleSheet } from "react-native";
import { Title, Button } from "react-native-paper";
import { Context1 } from "../App";

/*THE PRESCRIPTION AND APPT VIEW LIST */
/*--I don't actually know if I want to keep this component
--I like a list view of the appointments but it's currently not very interactive / useful 
--There are two FlatLists here
--One goes through appointments (provided by context)
--The other one goes through materials(also provided by context)
--Both show the date above and some details about the appointment or prescription/materials
--The component has a bug (explained on Calendar.js)
*/

function ApptsPrescriptionsListView() {
  const context = useContext(Context1);

  const styles = StyleSheet.create({
    title: {
      fontWeight: "normal",
      color: "#00004d",
      textDecorationLine: "underline",
      paddingLeft: 5,
    },
    text: {
      fontSize: 20,
      lineHeight: 20,
      color: "#000000",
    },
    header: {
      fontSize: 20,
      lineHeight: 20,
      fontFamily: "sans-serif",
      fontWeight: "bold",
      paddingTop: 0,
      paddingBottom: 15,
      paddingLeft: 10,
    },
    sectiontitle: {
      fontSize: 30,
      lineHeight: 30,
      fontFamily: "sans-serif-light",
      fontWeight: "normal",
      paddingBottom: 20,
      paddingTop: 20,
      paddingLeft: 20,
      textDecorationLine: "underline",
    },
    button: {
      marginBottom: 5,
      padding: 10,
    },
    space: {
      width: 20, // or whatever size you need
      height: 20,
    },
  });

  /* const handleDeleteAppointment = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/appointments/${id}`, {
      method: "delete",
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Not 2xx response");
        }
      })
      .then((json) => {
        console.log(json);
        context.setAppointments(json);
        navigation.navigate("App and Prescriptions List View");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  */

  //this sorts the appointments array in ascending order by date
  let upcomingAppointments = context.appointments.sort(function (a, b) {
    return a.date.localeCompare(b.date);
  });

  //sorts the prescription/materials array in ascending order by date
  let prescriptionHistory = context.materials.sort(function (a, b) {
    return a.datereceived.localeCompare(b.datereceived);
  });

  return (
    <View>
      <Text style={styles.sectiontitle}>UPCOMING APPOINTMENTS</Text>
      <FlatList
        data={upcomingAppointments}
        renderItem={({ item }) => (
          <ScrollView>
            <Text>
              <Text style={styles.header}>{item.date.substring(0, 10)}</Text>
              {"\n"} <Title style={styles.title}>type:</Title>{" "}
              <Text style={styles.text}> {item.type} </Text>
              {"\n"} <Title style={styles.title}>time:</Title>
              <Text style={styles.text}> {item.time} </Text>
              {"\n"} <Title style={styles.title}>location:</Title>
              <Text style={styles.text}> {item.location}</Text>
              {"\n"} <Title style={styles.title}>labwork:</Title>
              <Text style={styles.text}> {item.labwork} </Text>
              {"\n"} <Title style={styles.title}>additional notes:</Title>
              <Text style={styles.text}> {item.notes}</Text>
              {"\n"}
              {"\n"}
              <Text> {item.id} </Text>
            </Text>

            <Button
              style={styles.button}
              icon="delete-empty-outline"
              mode="contained"
              color="#0000b3"
              onPress={console.log("you pressed me")}
            >
              See details
            </Button>
          </ScrollView>
        )}
      />

      <Text style={styles.sectiontitle}>RECEIVED PRESCRIPTIONS</Text>

      <FlatList
        data={prescriptionHistory}
        renderItem={({ item }) => (
          <ScrollView>
            <Text>
              <Text style={styles.header}>
                Date Received: {item.datereceived.substring(0, 10)}
              </Text>
              {"\n"} <Title style={styles.title}>medicine/material:</Title>{" "}
              <Text style={styles.text}> {item.medname} </Text>
              {"\n"} <Title style={styles.title}>duration:</Title>
              <Text style={styles.text}> {item.duration} </Text>
              {"\n"} <Title style={styles.title}>order method:</Title>
              <Text style={styles.text}> {item.ordermethod}</Text>
              {"\n"}
              {"\n"}
            </Text>
            <Button
              style={styles.button}
              mode="contained"
              color="#0000b3"
              onPress={console.log("you pressed me too")}
            >
              {" "}
              press here
            </Button>
          </ScrollView>
        )}
      />
    </View>
  );
}

export default ApptsPrescriptionsListView;
