import { View, Text } from "react-native";
import { width } from "../utils";

export const Button = ({ text }: { text: string }) => {
  return (
    <View
      style={{
        backgroundColor: "rgb(32, 36, 38)",
        height: 50,
        alignItems: "center",
        paddingHorizontal: width(2),
        justifyContent: "center",
        borderRadius: 12,
      }}
    >
      <Text
        style={{
          fontFamily: "sans-serif",
          color: "rgb(237, 235, 232)",
        }}
      >
        {text}
      </Text>
    </View>
  );
};
