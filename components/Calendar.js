import React from "react";
import { View, ScrollView, Button, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

function CalendarView() {
  const onDayPress: CalendarProps["onDayPress"] = (day) => {
    setSelected(day.dateString);
  };

  return (
    <View>
      <Calendar />

      <Button title="Add An Appointment"></Button>
      <Button title="Track Prescriptions"></Button>
    </View>
  );
}

export default CalendarView;
