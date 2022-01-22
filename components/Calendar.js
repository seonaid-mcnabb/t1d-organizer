import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Calendar, Agenda } from "react-native-calendars";

//CALENDAR VIEW//
/* 
--Uses react-native-calendars library to display calendar view

//BUTTONS//
--Accepts navigation as parameter so it can:
--Navigate to AddToCalendarForm.js
--Navigate to AddNewPrescriptionForm.js
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
      width: 20, // or whatever size you need
      height: 20,
    },
  });

  const [appointments, setAppointments] = useState([]);
  const [materials, setMaterials] = useState([]);
  //Grabs all apppointments from backend and sets calendar state
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          throw new Error("Not 2xx response");
        }
      })
      .then((json) => {
        setAppointments(json);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Grabs all materials from backend and sets state
  useEffect(() => {
    fetch("http://localhost:5000/materials")
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          throw new Error("Not 2xx response");
        }
      })
      .then((json) => {
        setMaterials(json);
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Calendar
        appointments={appointments}
        materials={materials}
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
        onPress={() =>
          navigation.navigate(
            "App and Prescriptions List View",
            {
              appointments: appointments,
            },
            { materials: materials }
          )
        }
      >
        View Upcoming Appointments and Prescription Renewals
      </Button>
    </View>
  );
}

export default CalendarView;
