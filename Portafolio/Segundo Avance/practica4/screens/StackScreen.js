/** @format */

import react from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function StackScreen({}) {
  return (
    <View>
      <Text style={styles.text}>Stack Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignContent: "center",
  },
});
