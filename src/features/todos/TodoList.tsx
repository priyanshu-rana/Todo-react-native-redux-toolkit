import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { todo } from "./TodoSlice";

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
          <Text style={todoListStyles.todoText} key={todo.id}>
            {index + 1}. {todo.text}
          </Text>
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
});

export default TodoList;
