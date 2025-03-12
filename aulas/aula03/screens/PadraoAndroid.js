import { StyleSheet, Text, View } from "react-native";

function PadraoAndoid() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Meu App</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 1</Text>
        <Text>Descrição 1</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 2</Text>
        <Text>Descrição 2</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 3</Text>
        <Text>Descrição 3</Text>
      </View>
      <View style={styles.fab}>
        <Text>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    backgroundColor: "gray",
    justifyContent: "center",
    padding: 16,
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  item: {
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PadraoAndoid;
