import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from "./CartContext";
import Toast from 'react-native-toast-message';

const PastryOrderPage = ({ route }) => {
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);
  const [pastryItems, setPastryItems] = useState(route.params?.pastryItems || []);

  useEffect(() => {
    if (route.params?.pastryItems && route.params.pastryItems.length > 0) {
      setPastryItems(route.params.pastryItems);
    }
  }, [route.params?.pastryItems]);

  const getPastryPrice = (item) => {
    switch (item.name) {
      case "Ensaymada": return 50;
      case "Pandesal": return 80;
      case "Bibingka": return 120;
      case "Leche Flan": return 50;
      case "Ube Cake": return 80;
      case "Cassava Cake": return 120;
      case "Turon": return 50;
      case "Puto": return 80;
      case "Biko": return 120;
      default: return 0;
    }
  };

  const calculateTotal = () => {
    return pastryItems
      .reduce((total, item) => total + getPastryPrice(item) * item.quantity, 0)
      .toFixed(2);
  };

  const incrementQuantity = (itemId) => {
    setPastryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setPastryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleAddToCart = (item) => {
    const selectedPastry = {
      id: Math.random().toString(), 
      name: item.name,
      price: getPastryPrice(item),
      quantity: item.quantity,
    };

    addToCart(selectedPastry);

    Toast.show({
      type: "success",
      text1: "Item added to cart successfully!",
    });
  };

  return (
    <View style={styles.container}>
      {/* Top Image Section */}
      <View style={styles.topImageContainer}>
        <Image source={require('../assets/topImage.png')} style={styles.topImage} />
        <View style={styles.textOverlay}>
          <Text style={styles.welcomeText}>Your Pastry Order</Text>
        </View>
      </View>

      {/* Add padding below the top image */}
      <View style={styles.imagePadding} />

      <FlatList
        data={pastryItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <View style={styles.itemRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₱ {getPastryPrice(item) * item.quantity}</Text>
            </View>
            <View style={styles.controlsContainer}>
              <TouchableOpacity onPress={() => decrementQuantity(item.id)}>
                <MaterialCommunityIcons name="minus-circle-outline" size={24} color="#A77D5B" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
                <MaterialCommunityIcons name="plus-circle-outline" size={24} color="#A77D5B" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => handleAddToCart(item)} // Call add to cart
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total: ₱ {calculateTotal()}</Text>
      </View>

      <View style={styles.footerButtons}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PastryOrderPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF8FE",
    paddingTop: 20,
  },
  topImageContainer: {
    position: 'absolute',
    top: -60,
    left: -90,
  },
  topImage: {
    height: 250,
    width: 300,
    resizeMode: 'contain',
  },
  textOverlay: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  imagePadding: {
    marginTop: 200,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    fontFamily: 'Roboto',
    marginTop: 100,
    marginLeft: 70,
  },
  orderItem: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#333",
    fontFamily: "Roboto",
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    fontFamily: "Roboto",
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "#333",
  },
  addToCartButton: {
    backgroundColor: "#A77D5B",
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  summaryContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    textAlign: "right",
  },
  footerButtons: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  checkoutButton: {
    backgroundColor: "#A77D5B",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
  },
  checkoutButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Roboto",
  },
});
