/** @format */

import react from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function SettingsScreen({}) {
  return (
    <View>
      <Text style={styles.text}>Setting Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignContent: "center",
  },
});
