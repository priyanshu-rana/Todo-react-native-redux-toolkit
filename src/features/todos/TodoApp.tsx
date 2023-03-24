import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export const TodoApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <AddTodo />
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 8,
    padding: 40,
    backgroundColor: "white",
  },
});
