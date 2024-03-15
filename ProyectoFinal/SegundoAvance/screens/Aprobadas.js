/** @format */

// Aprobadas.js
import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [
  { id: 1, curso: "Curso 1", nota: "Aprobado" },
  { id: 2, curso: "Curso 2", nota: "Aprobado" },
  { id: 3, curso: "Curso 3", nota: "Aprobado" },
];

const Aprobadas = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.curso}</Text>
      <Text style={styles.text}>{item.nota}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={[styles.text, styles.headerText]}>Curso</Text>
        <Text style={[styles.text, styles.headerText]}>Nota</Text>
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

export default Aprobadas;
