import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import { TextInput } from "react-native-paper";
import axios from "axios";

function Auth(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <View style={styles.inputs}>
        <TextInput
          label="Username"
          style={styles.label}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          label="Email"
          style={styles.label}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Password"
          style={styles.label}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.register}>
        <Text
          style={{ fontWeight: "bold", color: colors.white }}
          onPress={() => handleSubmit()}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  inputs: {
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    marginTop: 40,
    backgroundColor: colors.primary,
  },
  register: {
    borderColor: colors.secondary,
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
    width: 100,
    alignItems: "center",
    backgroundColor: colors.secondary,
    position: "absolute",
    bottom: 80,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
  },
});

export default Auth;
