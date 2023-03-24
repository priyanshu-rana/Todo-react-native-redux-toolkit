import Toast from "react-native-toast-message";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ToastAndroid,
  Text,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import WthrButton from "../../components/WthrButton";
import wthrColors from "../../constants/WthrColors";
import { addTodo } from "./TodoSlice";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text == "") {
      return Toast.show({
        type: "error",
        text1: "Needs some value",
        text2: "You need to write something to add",
      });
    }
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <View style={addTodoStyles.container}>
      <TextInput
        placeholder="Add Todo"
        value={text}
        onChangeText={setText}
        style={addTodoStyles.input}
      />
      <WthrButton title="Add Todo" size="lg" onPress={handleSubmit} />
    </View>
  );
};

const addTodoStyles = StyleSheet.create({
  container: {
    margin: 2,
  },
  input: {
    backgroundColor: wthrColors.brandLightGray,
    marginBottom: 8,
    padding: 8,
    height: 40,
  },
});

export default AddTodo;
