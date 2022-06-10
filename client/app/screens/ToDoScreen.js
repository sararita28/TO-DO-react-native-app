import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import colors from "../config/colors";
import Task from "../../components/Task";
import useFetch from "../hooks/useFetch";
import axios from "axios";

function WelcomeScreen(props) {
  const tasks = useFetch("/tasks").data;
  const [desc, setDesc] = useState();
  const username = "admin"; //this should be changed once we figure out how to use redux for context

  const handleAddTask = async () => {
    Keyboard.dismiss();
    const newTask = {
      username,
      desc,
    };
    try {
      await axios.post("/tasks/", newTask);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>
            {tasks.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(item)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <KeyboardAvoidingView behavior="height" style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Add a task"}
          value={desc}
          onChangeText={(text) => setDesc(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  addText: {},
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.gray,
    borderWidth: 1,
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderRadius: 60,
    borderColor: colors.gray,
    borderWidth: 1,
    width: 250,
  },
  items: {
    marginTop: 30,
  },
  scrollView: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flex: 0.82,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 0.2,
  },
});

export default WelcomeScreen;
