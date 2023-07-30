import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, NativeBaseProvider } from "native-base";
import { Button, StyleSheet } from "react-native";
import wthrColors from "./src/constants/WthrColors";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { TodoApp } from "./src/features/todos/TodoApp";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar style="dark" />
          <TodoApp />
          <Toast />
          {/* <Button onPress={getToastMessage} title="Click Me" /> */}
        </View>
      </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  text: {
    borderColor: "#FFFFFF",
    color: wthrColors.brandBlue,
  },
  btn: {
    backgroundColor: wthrColors.brandDanger,
  },
});
