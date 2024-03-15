/** @format */

import React, { useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const initialData = [
  { id: 1, tarea: "Tarea 1", completa: false },
  { id: 2, tarea: "Tarea 2", completa: true },
  { id: 3, tarea: "Tarea 3", completa: false },
];

const Pendientes = () => {
  const navigation = useNavigation();

  const [data, setData] = useState(initialData);

  const handleToggleComplete = (id) => {
    setData((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, completa: !item.completa } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.tarea}</Text>
      <Button
        title={item.completa ? "Completada" : "Marcar como completa"}
        onPress={() => handleToggleComplete(item.id)}
      />
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
  button: {
    marginLeft: 10,
  },
});

export default Pendientes;
