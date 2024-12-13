import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from "./CartContext";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.length;

  return (
    <View style={styles.container}>
      {/* Top Image Section */}
      <View style={styles.topImageContainer}>
        <Image source={require('../assets/topImage.png')} style={styles.topImage} />
        <View style={styles.textOverlay}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.usernameText}>Missandei</Text>
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

      {/* Beverages and Pastries Section */}
      <Text style={styles.selectText}>Explore our menu</Text>
      <View style={styles.menuGrid}>
        {/* Beverages Option */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Beverages')}
        >
          <Image source={require('../assets/beverages.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>Beverages</Text>
        </TouchableOpacity>

        {/* Pastries Option */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Pastries')}
        >
          <Image source={require('../assets/pastries.png')} style={styles.menuImage} />
          <Text style={styles.menuText}>Pastries</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {/* Menu Button */}
        <TouchableOpacity style={styles.navButton} 
        onPress={() => navigation.navigate('HomeScreen')}>
          <MaterialCommunityIcons name="cup" size={30} color="#A77D5B" />
          <Text style={styles.navText}>Menu</Text>
        </TouchableOpacity>

        {/* Order Button */}
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('Order')}
        >
          <MaterialCommunityIcons name="cart-outline" size={30} color="#A77D5B" />
          <Text style={styles.navText}>Order</Text>
        </TouchableOpacity>

        {/* Profile Button */}
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <MaterialCommunityIcons name="account" size={30} color="#A77D5B" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

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
  welcomeText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    fontFamily: 'Roboto',
    marginTop: 100,
    marginLeft: 70,
  },
  usernameText: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
    fontFamily: 'Roboto',
    marginLeft: 60,
  },
  selectText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginTop: 250,
    fontFamily: 'Roboto',
  },
  menuGrid: {
    marginTop: 20,
    alignItems: 'center',
  },
  menuButton: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    padding: 20,
    elevation: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  menuImage: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    resizeMode: 'contain',
  },
  menuText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    fontFamily: 'Roboto',
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
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#A77D5B',
    marginTop: 5,
    fontFamily: 'Roboto',
  },
});
