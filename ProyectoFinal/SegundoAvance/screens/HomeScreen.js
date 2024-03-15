/** @format */

import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Aprobadas from "./Aprobadas";
import Pendientes from "./Pendientes";
import Desaprobadas from "./Desaprobadas";
import Historial from "./Historial";

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        name='Home'
        component={HomeContent}
      />
      <Drawer.Screen
        name='Aprobadas'
        component={Aprobadas}
      />
      <Drawer.Screen
        name='Pendientes'
        component={Pendientes}
      />
      <Drawer.Screen
        name='Desaprobadas'
        component={Desaprobadas}
      />
      <Drawer.Screen
        name='Historial'
        component={Historial}
      />
    </Drawer.Navigator>
  );
};

const HomeContent = () => {
  const navigation = useNavigation();

  const handleBoxPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido!</Text>
      <TouchableOpacity
        style={[styles.button, { width: "60%" }]}
        onPress={() => handleBoxPress("Aprobadas")}>
        <Text style={styles.buttonText}>Aprobadas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { width: "60%" }]}
        onPress={() => handleBoxPress("Pendientes")}>
        <Text style={styles.buttonText}>Pendientes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { width: "60%" }]}
        onPress={() => handleBoxPress("Desaprobadas")}>
        <Text style={styles.buttonText}>Desaprobadas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { width: "60%" }]}
        onPress={() => handleBoxPress("Historial")}>
        <Text style={styles.buttonText}>Historial</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: "100%",
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    height: 60,
    borderRadius: 10,
    backgroundColor: "#ff6347",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#ffffff",
  },
});

export default HomeScreen;
