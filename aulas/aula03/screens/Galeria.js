import { StyleSheet, Text, View } from "react-native";

function Galeria() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.grid}>
        <Text style={styles.photo}>Foto 1</Text>
        <Text style={styles.photo}>Foto 2</Text>
        <Text style={styles.photo}>Foto 3</Text>
        <Text style={styles.photo}>Foto 4</Text>
        <Text style={styles.photo}>Foto 5</Text>
        <Text style={styles.photo}>Foto 6</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    padding: 8,
  },
  photo: {
    height: 100,
    width: "31%",
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default Galeria;
