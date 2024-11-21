import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CartContext } from "./CartContext";

const CartScreen = ({ navigation }) => {
  const { cartItems, updateCartItemQuantity, calculateTotal } =
    useContext(CartContext);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image
        source={require("../assets/adaptive-icon.png")}
        style={styles.cartItemImage}
      />
      <View style={styles.cartItemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCode}>Code #{item.id.slice(0, 6)}</Text>
        <Text style={styles.itemPrice}>₱{item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.cartItemQuantity}>
        <TouchableOpacity
          onPress={() => updateCartItemQuantity(item.id, "decrease")}
          style={styles.quantityButton}
        >
          <MaterialCommunityIcons
            name="minus-circle-outline"
            size={24}
            color="#A77D5B"
          />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity
          onPress={() => updateCartItemQuantity(item.id, "increase")}
          style={styles.quantityButton}
        >
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={24}
            color="#A77D5B"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <MaterialCommunityIcons name="cart-outline" size={24} color="#A77D5B" />
      </View>

      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cartList}
      />

      <View style={styles.footer}>
        {/* <View style={styles.voucherSection}>
          <Text style={styles.voucherText}>VOUCHER CODE</Text>
        </View> */}
        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>TOTAL :</Text>
          <Text style={styles.totalAmount}>₱{calculateTotal()}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff",
    elevation: 5,
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  cartList: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  cartItemImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 10,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  itemCode: {
    fontSize: 12,
    color: "#666",
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#A77D5B",
  },
  cartItemQuantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    paddingHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginHorizontal: 10,
  },
  footer: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  voucherSection: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  voucherText: {
    fontSize: 14,
    color: "#333",
  },
  totalSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#A77D5B",
  },
  checkoutButton: {
    backgroundColor: "#28A745",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
