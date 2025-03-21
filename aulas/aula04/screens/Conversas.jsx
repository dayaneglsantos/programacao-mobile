import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const messages = [
  {
    id: 1,
    avatar: "http://picsum.photos/200?random=1",
    name: "Pessoa 1",
    text: "Conteúdo da mensagem 1",
    hour: "20/09/2021 10:30",
  },
  {
    id: 2,
    avatar: "http://picsum.photos/200?random=2",
    name: "Pessoa 2",
    text: "Conteúdo da mensagem 2",
    hour: "21/09/2021 10:30",
  },
  {
    id: 3,
    avatar: "http://picsum.photos/200?random=3",
    name: "Pessoa 3",
    text: "Conteúdo da mensagem 3",
    hour: "19/09/2021 11:30",
  },
  {
    id: 4,
    avatar: "http://picsum.photos/200?random=4",
    name: "Pessoa 4",
    text: "Conteúdo da mensagem 4",
    hour: "21/09/2021 15:10",
  },
];

function Conversas() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Conversas</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.conversation}>
              <Image style={styles.avatar} source={{ uri: item.avatar }} />
              <View style={{ flex: 1 }}>
                <View style={styles.contact}>
                  <Text>{item.name}</Text>
                  <Text>{item.hour}</Text>
                </View>
                <View>
                  <Text>{item.text}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
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
  conversation: {
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  contact: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Conversas;
