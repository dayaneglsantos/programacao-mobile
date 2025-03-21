import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function DetalhesProduto() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Detalhes do Produto</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
        <Text style={styles.productName}>Nome do Produto</Text>
        <Text style={styles.productDetail}>Descrição detalhada do produto</Text>
        <View style={styles.choice}>
          <View style={styles.quantity}>
            <TouchableOpacity>
              <View style={styles.buttonMinusPlus}>
                <Text style={styles.textMinusPlus}>-</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.textQuantity}>
              <Text style={styles.textMinusPlus}>1</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.buttonMinusPlus}>
                <Text style={styles.textMinusPlus}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>R$ 99,99</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.addButton}>
            <Text style={styles.addText}>Adicionar no Carrinho</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    padding: 16,
    backgroundColor: "blue",
    justifyContent: "center",
    marginBottom: 8,
    elevation: 3,
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  container: {
    flex: 1,
    padding: 8,
  },
  photo: {
    height: 200,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productDetail: {
    fontSize: 12,
    color: "gray",
    marginBottom: 64,
  },
  choice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonMinusPlus: {
    height: 32,
    width: 32,
    backgroundColor: "lightblue",
    borderRadius: 8,
    justifyContent: "center",
  },
  textMinusPlus: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  textQuantity: {
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
  addButton: {
    padding: 8,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: "center",
    marginTop: 24,
  },
  addText: {
    textAlign: "center",
    color: "blue",
  },
});

export default DetalhesProduto;
