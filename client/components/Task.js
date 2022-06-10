import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../client/app/config/colors";
import axios from "axios";
import Icon from "react-native-vector-icons/Ionicons";

function Task(props) {
  const [status, setStatus] = useState(props.text.done);

  const handleDeleteTask = async (item) => {
    try {
      await axios.delete(`tasks/${item.text._id}`, item.text);
    } catch (err) {
      console.log(err);
    }
  };

  const completeTask = async (item) => {
    try {
      await axios.put(`tasks/${item.text._id}`, item.text);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        {status === true ? (
          <Icon
            name="checkbox-outline"
            size={30}
            onPress={() => completeTask(props)}
            style={styles.checkbox}
          />
        ) : (
          <Icon
            name="square-outline"
            size={30}
            onPress={() => completeTask(props)}
            style={styles.checkbox}
          />
        )}
        <Text style={styles.itemText}>{props.text.desc}</Text>
      </View>
      <Icon
        name="trash-outline"
        size={30}
        style={styles.trash}
        onPress={() => handleDeleteTask(props)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    color: colors.secondary,
  },
  item: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "80%",
    marginLeft: 10,
  },
  isPress: {
    textDecorationLine: "line-through",
    color: "red",
  },
  trash: {
    color: "tomato",
  },
});

export default Task;
