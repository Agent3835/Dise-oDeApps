/** @format */

import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";

const LoginForm = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = { ok: true };

      if (response.ok) {
        Alert.alert("Inicio de sesión exitoso");
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", data.error);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      Alert.alert("Error", "Error de conexión con el servidor");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title='Login'
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
});

export default LoginForm;
