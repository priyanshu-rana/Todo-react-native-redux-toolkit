import { Button } from "native-base";
import React, { FC, memo } from "react";
import * as ReactNative from "react-native";

type WthrButtonProps = {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  updateStyles?: ReactNative.StyleProp<ReactNative.ViewStyle>;
  textStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
  size?: string;
};

const WthrButton: FC<WthrButtonProps> = ({
  title,
  disabled,
  updateStyles,
  size,
  onPress,
  ...props
}) => {
  return (
    <Button
      disabled={disabled}
      size={size}
      onPress={onPress}
      style={updateStyles}
      {...props}
    >
      {title}
    </Button>
  );
};

WthrButton.defaultProps = {};

export default memo(WthrButton);
