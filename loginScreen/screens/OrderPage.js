import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OrderPage = ({ route }) => {
  const navigation = useNavigation();
  const [orderItems, setOrderItems] = useState(route.params?.orderItems || []);

  useEffect(() => {
    if (route.params?.orderItems) {
      setOrderItems(route.params.orderItems);
    }
  }, [route.params?.orderItems]);

  const getSizePrice = (item) => {
    switch (item.size) {
      case "Normal Size": return 50;
      case "Large Size": return 80;
      case "Extra Large": return 120;
      default: return 0;
    }
  };

  const calculateTotal = () => {
    return orderItems
      .reduce((total, item) => total + getSizePrice(item) * item.quantity, 0)
      .toFixed(2);
  };

  const incrementQuantity = (itemId) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decrementQuantity = (itemId) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
    );
  };

  return (
    <View style={styles.container}>
      {/* Top Image Section */}
      <View style={styles.topImageContainer}>
        <Image source={require('../assets/topImage.png')} style={styles.topImage} />
        <View style={styles.textOverlay}>
          <Text style={styles.welcomeText}>Your Order</Text>
        </View>
      </View>

      {/* Add padding below the top image */}
      <View style={styles.imagePadding} />

      <FlatList
        data={orderItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <View style={styles.itemRow}>
              <Text style={styles.itemName}>{item.name} ({item.size})</Text>
              <Text style={styles.itemPrice}>₱ {getSizePrice(item) * item.quantity}</Text>
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
          </View>
        )}
      />

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total: ₱ {calculateTotal()}</Text>
      </View>

      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate("Checkout", { orderItems })}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF8FE',
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
    marginTop: 200, // Adjust this value as needed for desired padding
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
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#333',
    fontFamily: 'Roboto',
    flex: 1, // Allows the name to take up available space
  },
  itemPrice: {
    fontSize: 20,
    fontWeight:"bold",
    color: '#333',
    fontFamily: 'Roboto',
    marginLeft: 10,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight:"bold",
    marginHorizontal: 10,
    color: '#333',
    fontFamily: 'Roboto',
  },
  summaryContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    textAlign: 'right',
  },
  footerButtons: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  checkoutButton: {
    backgroundColor: '#A77D5B',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
});
