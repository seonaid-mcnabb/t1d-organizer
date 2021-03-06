import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Calendar, Agenda } from "react-native-calendars";
import { Context1 } from "../App";

//CALENDAR VIEW//
/* 
--Uses react-native-calendars library to display calendar view
--I am currently still trying to figure out how to make this work 
--I want: added appointments or prescriptions to display visually
--Push notifications to be set up when an appointment or prescription renewal is coming up
--The <Calendar> element currently in the return portion is mostly just copy/past from react-native-calendars
--but it's non-functional because I didn't have time to figure it out

//BUTTONS//
--Accept navigation as parameter so it can:
--Navigate to AddToCalendarForm.js
--Navigate to AddNewPrescriptionForm.js
--Navigate to ApptsPrescriptionsViewList.js --> IMPORTANT, this button has a bug.
--APPTS VIEW LIST BUG: onPress, this button navigates to the list view but it also performs the 
onPress function of the buttons in the two Flatlists on the list view component (presses all the buttons
in this view and console.logs what's written in the onPress function in the ListView component)
*/

function CalendarView({ navigation }) {
  //const onDayPress: CalendarProps["onDayPress"] = (day) => {
  //setSelected(day.dateString);
  //};

  const styles = StyleSheet.create({
    button: {
      marginBottom: 5,
      padding: 10,
    },
    space: {
      width: 20,
      height: 20,
    },
  });

  //gives access to appointments and materials
  const context = useContext(Context1);

  return (
    <View>
      <Calendar
        appointments={context.appointments}
        materials={context.materials}
        enableSwipeMonths={true}
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        markedDates={{}}
        style={{
          borderWidth: 0,
          borderColor: "gray",
          height: 350,
        }}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "blue",
          indicatorColor: "blue",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      <Button
        style={styles.button}
        icon="pencil-plus-outline"
        mode="contained"
        color="#0000b3"
        onPress={() => navigation.navigate("Add To Calendar")}
      >
        Add An Appointment
      </Button>
      <Button
        style={styles.button}
        icon="pill"
        mode="contained"
        color="#0000b3"
        onPress={() => navigation.navigate("Add New Prescription")}
      >
        Add New Prescription
      </Button>

      <Button
        style={styles.button}
        icon="format-list-checkbox"
        mode="contained"
        color="#0000b3"
        onPress={() => navigation.navigate("App and Prescriptions List View")}
      >
        View Upcoming
      </Button>
    </View>
  );
}

export default CalendarView;
