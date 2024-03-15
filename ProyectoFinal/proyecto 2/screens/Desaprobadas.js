/** @format */

// DesaprobadasScreen.js
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const initialData = [
  { id: 1, tarea: "Tarea 1", estado: "Desaprobada" },
  { id: 2, tarea: "Tarea 2", estado: "Desaprobada" },
  { id: 3, tarea: "Tarea 3", estado: "Desaprobada" },
  // Agrega más datos si es necesario
];

const DesaprobadasScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState(initialData);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.tarea}</Text>
      <Text style={styles.text}>{item.estado}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={[styles.text, styles.headerText]}>Tarea</Text>
        <Text style={[styles.text, styles.headerText]}>Estado</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        onPress={() => navigation.goBack()}
        title='Volver'
        color='black'
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  text: {
    fontSize: 16,
  },
});

export default DesaprobadasScreen;
