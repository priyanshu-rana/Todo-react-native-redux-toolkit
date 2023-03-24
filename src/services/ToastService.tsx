// import React, { FC } from "react";
// import { StyleSheet, Text, ToastAndroid, View } from "react-native";
// import wthrColors from "../constants/WthrColors";
// import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

// interface ToastServiceProps {
//   message: any;
// }

// const ToastService: FC<ToastServiceProps> = ({ message }) => {
//   const toastConfig = {
//     success: (props) => (
//       <BaseToast
//         {...props}
//         style={{ borderLeftColor: "pink" }}
//         contentContainerStyle={{ paddingHorizontal: 15 }}
//         text1Style={{
//           fontSize: 15,
//           fontWeight: "400",
//         }}
//       />
//     ),
//     error: (props) => (
//       <ErrorToast
//         {...props}
//         text1Style={{
//           fontSize: 17,
//         }}
//         text2Style={{
//           fontSize: 15,
//         }}
//       />
//     ),
//   };

//   return (
//     <>
//       <Toast config={toastConfig} />;
//     </>
//   );
// };

// const toastStyles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     padding: 8,
//     borderRadius: 5,
//     backgroundColor: wthrColors.brandDanger,
//   },
//   text: {
//     color: wthrColors.brandWhite,
//     textAlign: "center",
//   },
//   success: {},
// });
// export default ToastService;
