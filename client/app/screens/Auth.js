import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";

function Auth(props) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          width: 40,
          height: 40,
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Eo_circle_purple_white_checkmark.svg/2048px-Eo_circle_purple_white_checkmark.svg.png",
        }}
        style={styles.logo}
      />
      <Text style={styles.text}>Your favorite tasks tracking app</Text>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={styles.register}
          onPress={() => props.navigation.navigate("Register")}
        >
          <Text style={{ fontWeight: "bold", color: colors.white }}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.login}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={{ fontWeight: "bold", color: colors.white }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsWrapper: {
    position: "absolute",
    bottom: 80,
    width: "111.5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  login: {
    borderColor: colors.secondary,
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
    width: 100,
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
  logo: {
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  register: {
    borderColor: colors.secondary,
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
    width: 100,
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
  text: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 40,
  },
});

export default Auth;
