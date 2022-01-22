import React from "react";
import { View, Button } from "react-native";
import { Calendar } from "react-native-calendars";

//CALENDAR VIEW//
/* 
--Uses react-native-calendars library to display calendar view

//BUTTONS//
--Accepts navigation as parameter so it can:
--Navigate to AddToCalendarForm.js
--Navigate to AddNewPrescriptionForm.js
*/

function CalendarView({ navigation }) {
  const onDayPress: CalendarProps["onDayPress"] = (day) => {
    setSelected(day.dateString);
  };

  return (
    <View>
      <Calendar />
      <Button
        title="Add An Appointment"
        onPress={() => navigation.navigate("Add To Calendar")}
      ></Button>
      <Button
        title="Add A Received Prescription"
        onPress={() => navigation.navigate("Add New Prescription")}
      ></Button>
    </View>
  );
}

export default CalendarView;
