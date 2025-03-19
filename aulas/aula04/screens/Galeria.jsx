import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const images = [
  "http://picsum.photos/200?random=1",
  "http://picsum.photos/200?random=2",
  "http://picsum.photos/200?random=3",
  "http://picsum.photos/200?random=4",
  "http://picsum.photos/200?random=5",
  "http://picsum.photos/200?random=6",
  "http://picsum.photos/200?random=7",
  "http://picsum.photos/200?random=8",
];

function Galeria() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Galeria de Fotos</Text>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => {}} style={styles.photo}>
            <Image source={{ uri: image }} style={{ flex: 1 }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "blue",
    marginBottom: 8,
    elevation: 3,
  },
  appTitle: {
    color: "white",
    fontSize: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
    gap: 8,
  },
  photo: {
    width: "31%",
    height: 100,
  },
});

export default Galeria;
