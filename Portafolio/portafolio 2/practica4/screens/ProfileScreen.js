/** @format */

import react from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProfileScreen({}) {
  return (
    <View>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignContent: "center",
  },
});
