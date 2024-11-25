import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "./CartContext";

const pastries = [
  { id: "1", name: "Ensaymada", icon: "coffee" },
  { id: "2", name: "Pan de Sal", icon: "coffee-outline" },
  { id: "3", name: "Bibingka", icon: "cup" },
  { id: "4", name: "Leche Flan", icon: "coffee-maker" },
  { id: "5", name: "Ube Cake", icon: "cup-outline" },
  { id: "6", name: "Cassava Cake", icon: "beer-outline" },
  { id: "7", name: "Turon", icon: "cup-water" },
  { id: "9", name: "Puto", icon: "food-croissant" },
  { id: "10", name: "Biko", icon: "food-fork-drink" },
];

const PastriesScreen = () => {
  const navigation = useNavigation();
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.length;

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/topImage.png")}
          style={styles.topImage}
        />
        <View style={styles.textOverlay}>
          <Text style={styles.menuTitle}>Pastries Menu</Text>
        </View>
      </View>

      {/* Cart Button */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate("Cart")}
      >
        <MaterialCommunityIcons name="cart-outline" size={30} color="#A77D5B" />
        {cartItemCount > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.menuGrid}>
          {pastries.map((item) => (
            <TouchableOpacity
            key={item.id}
            style={styles.menuButton}
            onPress={() =>
              navigation.navigate("PastryOrderPage", { pastryItems: [{ ...item, quantity: 1 }] })
            }
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={50}
              color="#A77D5B"
            />
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>          
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {/* Menu Button */}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialCommunityIcons name="cup" size={30} color="#A77D5B" />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>

        {/* Order Button */}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Order")}
        >
          <MaterialCommunityIcons
            name="cart-outline"
            size={30}
            color="#A77D5B"
          />
          <Text style={styles.navText}>Order</Text>
        </TouchableOpacity>

        {/* Profile Button */}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <MaterialCommunityIcons
            name="account-outline"
            size={30}
            color="#A77D5B"
          />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PastriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF8FE",
    paddingTop: 20,
  },
  topImageContainer: {
    position: "absolute",
    top: -60,
    left: -90,
  },
  topImage: {
    height: 250,
    width: 300,
    resizeMode: "contain",
  },
  textOverlay: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  menuTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000",
    fontFamily: "Roboto",
    marginTop: 100,
    paddingLeft: 100,
    textAlign: "center",
  },
  cartButton: {
    position: "absolute",
    top: 60,
    right: 20,
    backgroundColor: "transparent",
    flexDirection: "row",
  },

  cartBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#A77D5B",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  cartBadgeText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },
  scrollContainer: {
    flex: 1,
    marginTop: 200,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  menuButton: {
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    padding: 20,
    elevation: 5,
    marginBottom: 20,
    marginHorizontal: "2.5%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  menuText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginTop: 10,
    fontFamily: "Roboto",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    fontSize: 14,
    textAlign: "center",
    color: "#A77D5B",
    marginTop: 5,
    fontFamily: "Roboto",
  },
});
