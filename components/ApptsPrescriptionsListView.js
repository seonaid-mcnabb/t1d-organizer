import React, { useContext, useEffect, useState, useCallback } from "react";
import {
  View,
  FlatList,
  SectionList,
  Text,
  Button,
  StyleSheet,
} from "react-native";

function ApptsPrescriptionsListView({ route }) {
  const { appointments, materials } = route.params;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: "bold",
      backgroundColor: "rgba(247,247,247,1.0)",
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  return (
    <View style={styles.container}>
      <SectionList
        sections={[{ title: "Upcoming Appointments", data: [...appointments] }]}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.date} {item.type} {item.location}
          </Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

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
