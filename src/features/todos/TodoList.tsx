import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { todo } from "./TodoSlice";
import { Checkbox } from "native-base";

interface TodoList {
  todos: todo[];
}

const TodoList = () => {
  const todos = useSelector((state: TodoList) => state.todos);
  console.log(todos);
  return (
    <ScrollView>
      <View style={todoListStyles.container}>
        <Text>Todo List</Text>
        {todos.map((todo, index) => (
          <View style={todoListStyles.todoRow} key={todo.id}>
            {/* <Checkbox value={todo.text} /> */}
            <Text style={todoListStyles.todoText} key={todo.id}>
              {index + 1}. {todo.text}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const todoListStyles = StyleSheet.create({
  container: {
    margin: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  todoText: {
    margin: 4,
  },
  todoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default TodoList;
