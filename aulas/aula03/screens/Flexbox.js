import { View } from "react-native";

function Flexbox() {
  return (
    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "stretch",
          backgroundColor: "red",
        }}
      >
        <View style={{ width: 50, backgroundColor: "black" }}></View>
        <View style={{ width: 50, backgroundColor: "blue" }}></View>
        <View style={{ width: 50, backgroundColor: "yellow" }}></View>
      </View>
      <View style={{ flex: 1, backgroundColor: "green" }}></View>
    </View>
  );
}

export default Flexbox;
