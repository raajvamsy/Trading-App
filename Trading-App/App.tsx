import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./app/screens/Dashboard";
import Navbar from "./app/screens/Navbar";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Navbar />
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
});
