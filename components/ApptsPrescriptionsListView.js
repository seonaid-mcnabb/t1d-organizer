import React, { useContext } from "react";
import { View, ScrollView, FlatList, Text, StyleSheet } from "react-native";

import { Title } from "react-native-paper";
import { Context1 } from "../App";

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
      lineheight: 20,
      color: "000000",
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
      fontFamily: "Courier New",
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

  //this sorts the appointments array in ascending order
  let upcomingAppointments = context.appointments.sort(function (a, b) {
    return a.date.localeCompare(b.date);
  });

  let prescriptionHistory = context.materials.sort(function (a, b) {
    return a.datereceived.localeCompare(b.datereceived);
  });

  return (
    <ScrollView>
      <Text style={styles.sectiontitle}>UPCOMING APPOINTMENTS</Text>
      <FlatList
        data={upcomingAppointments}
        renderItem={({ item }) => (
          <View>
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
            </Text>
          </View>
        )}
      />

      <Text style={styles.sectiontitle}>RECEIVED PRESCRIPTIONS</Text>

      <FlatList
        data={prescriptionHistory}
        renderItem={({ item }) => (
          <View>
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
          </View>
        )}
      />
    </ScrollView>
  );
}

/*//Little snippets
//This extracts the date format yyyy-mm-dd
      <Text>{appointments[0].date.substring(0, 10).toString()}</Text>

*/
/*
<FlatList
        data={appointments}
        renderItem={({ item }) => (
          <Text>
            {item.date}
            {item.type}
            {item.time}
            {item.location}
            {item.labwork}
            {item.notes}
          </Text>
        )}
      />
*/

export default ApptsPrescriptionsListView;
