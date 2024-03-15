/** @format */

// Historial.js
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Historial = () => {
  const navigation = useNavigation();

  // Aquí podrías obtener los datos del historial desde algún origen, como una base de datos o un estado global
  const historialData = [
    {
      id: 1,
      actividad: "Actividad 1",
      fecha: "2024-03-14",
      resultado: "Aprobada",
    },
    {
      id: 2,
      actividad: "Actividad 2",
      fecha: "2024-03-15",
      resultado: "Desaprobada",
    },
    {
      id: 3,
      actividad: "Actividad 3",
      fecha: "2024-03-16",
      resultado: "Pendiente",
    },
    // Agrega más datos de historial si es necesario
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Actividades</Text>
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Actividad</Text>
          <Text style={styles.headerText}>Fecha</Text>
          <Text style={styles.headerText}>Resultado</Text>
        </View>
        {historialData.map((item) => (
          <View
            key={item.id}
            style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.actividad}</Text>
            <Text style={styles.tableCell}>{item.fecha}</Text>
            <Text style={styles.tableCell}>{item.resultado}</Text>
          </View>
        ))}
      </View>
      <Button
        onPress={() => navigation.goBack()}
        title='Volver'
        color='black'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 20,
    width: "100%",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    paddingVertical: 10,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default Historial;
