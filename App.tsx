import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "./src/components";
import { height, width } from "./src/utils";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Button text={"Coins"} />
          <Button text={"portfolio"} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(20, 21, 27)",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: height(3),
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
    flexDirection: "row",
    height: height(10),
    width: width(100),
  },
});
