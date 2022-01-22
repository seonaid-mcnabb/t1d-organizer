import React from "react";
import { View, ScrollView, Button, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

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
