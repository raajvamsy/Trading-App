import { StatusBar } from "expo-status-bar";
import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
  let market = [
    { label: "Select item", value: "" },
    { label: "BTCUSDT", value: "BTCUSDT" },
    { label: "ETHUSDT", value: "ETHUSDT" },
  ];
  let marketSelect = (data: string) => {
    console.log(data);
  };
  return (
    <View style={styles.marketSelector}>
      <Text style={styles.marketSelectText}>Market</Text>
      <Dropdown
        data={market}
        onChange={marketSelect}
        labelField="label"
        valueField="value"
        style={styles.dropdown}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  marketSelector: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  marketSelectText: {
    flex: 1,
    color: "#000",
    fontSize: 24,
    fontWeight: "800",
  },
  dropdown: {
    flex: 1,
  },
});
