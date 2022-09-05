import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trading App</Text>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Feather name="settings" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 32,
    fontWeight: "800",
  },
});
