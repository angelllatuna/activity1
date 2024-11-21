// import React, { useState, useEffect } from "react";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import Toast from 'react-native-toast-message';

const BeverageDetail = ({ route }) => {
  const { name } = route.params;
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);
  const [cupSize, setCupSize] = useState("None");
  const [sweetener, setSweetener] = useState("None");
  const [flavor, setFlavor] = useState("None");
  const [creamer, setCreamer] = useState("Milk");
  const [price, setPrice] = useState(50);
  const [cartItems, setCartItems] = useState([]);

  const priceList = {
    "Normal Size": 50,
    "Large Size": 80,
    "Extra Large": 120,
  };

  useEffect(() => {
    setPrice(priceList[cupSize]);
  }, [cupSize]);

  const handleAddToCart = () => {
    if (!cupSize || cupSize === "None") {
      Toast.show({
        type: "error",
        text1: "Please select a cup size!",
      });
      return;
    }
  
    let finalPrice = price;
  
    if (flavor && flavor !== "None") {
      finalPrice += 10;
    }
  
    if (creamer && creamer !== "Milk") {
      finalPrice += 5;
    }
    
    const selectedBeverage = {
      id: Math.random().toString(),
      name,
      size: cupSize,
      sweetener,
      flavor,
      creamer,
      price: finalPrice,
      quantity: 1,
    };
  
    addToCart(selectedBeverage);
  
    Toast.show({
      type: "success",
      text1: "Item added to cart successfully!",
    });
  };
  

  const addToOrder = () => {
    const selectedBeverage = {
      id: Math.random().toString(),
      name,
      size: cupSize,
      sweetener,
      flavor,
      creamer,
      quantity: 1,
      price,
    };
    navigation.navigate("OrderPage", { orderItems: [selectedBeverage] });
  };

  const renderFlavorPicker = () => {
    let flavorOptions = [];

    if (name === "Taho") {
      flavorOptions = ["Classic", "Ube", "Strawberry"];
    } else if (name === "Shake") {
      flavorOptions = ["Mango", "Watermelon", "Avocado", "Ube"];
    } else if (!["Americano", "Cappuccino", "Latte", "Barako Coffee", "Espresso", "Cold Brew", "Sikwate"].includes(name)) {
      flavorOptions = ["Vanilla", "Caramel", "Pumpkin Spice"];
    }

    return (
      flavorOptions.length > 0 && (
        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Flavor</Text>
          <Picker
            selectedValue={flavor}
            style={styles.picker}
            onValueChange={(itemValue) => setFlavor(itemValue)}
          >
            <Picker.Item label="Choose Flavor" value="" />
            {flavorOptions.map((flavorOption) => (
              <Picker.Item key={flavorOption} label={flavorOption} value={flavorOption} />
            ))}
          </Picker>
        </View>
      )
    );
  };

  const renderSweetenerPicker = () => {
    return (
      !["Taho", "Shake"].includes(name) && (
        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Sugar Level</Text>
          <Picker
            selectedValue={sweetener}
            style={styles.picker}
            onValueChange={(itemValue) => setSweetener(itemValue)}
          >
            <Picker.Item label="Choose Sugar Level" value="" />
            <Picker.Item label="25%" value="25%" />
            <Picker.Item label="50%" value="50%" />
            <Picker.Item label="75%" value="75%" />
            <Picker.Item label="100%" value="100%" />
          </Picker>
        </View>
      )
    );
  };

  const renderCreamerPicker = () => {
    return (
      !["Taho", "Sikwate", "Shake", "Americano", "Cappuccino", "Barako Coffee", "Espresso", "Cold Brew"].includes(name) && (
        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Creamer</Text>
          <Picker
            selectedValue={creamer}
            style={styles.picker}
            onValueChange={(itemValue) => setCreamer(itemValue)}
          >
            <Picker.Item label="Choose Milk" value="Milk" />
            <Picker.Item label="Oatmilk" value="Oatmilk" />
            <Picker.Item label="Almond Milk" value="Almond Milk" />
            <Picker.Item label="Whole Milk" value="Whole Milk" />
            <Picker.Item label="Soy Milk" value="Soy Milk" />
          </Picker>
        </View>
      )
    );
  };

  return (
    <View style={styles.container}>
    {/* Top Image Section */}
    <View style={styles.topImageContainer}>
      <Image source={require('../assets/topImage.png')} style={styles.topImage} />
      
    </View>

      <View style={styles.header}>
        <Image
          source={require("../assets/adaptive-icon.png")}
          style={styles.image}
        />
        <Text style={styles.beverageName}>{name}</Text>
      </View>

      <View style={styles.optionsContainer}>
        <Text style={styles.sectionTitle}>What's included</Text>

        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Cup Size</Text>
          <Picker
            selectedValue={cupSize}
            style={styles.picker}
            onValueChange={(itemValue) => setCupSize(itemValue)}
          >
            <Picker.Item label="Choose your cup size" value="" />
            <Picker.Item label="Normal Size" value="Normal Size" />
            <Picker.Item label="Large Size" value="Large Size" />
            <Picker.Item label="Extra Large" value="Extra Large" />
          </Picker>
        </View>

        {renderSweetenerPicker()}
        {renderFlavorPicker()}
        {renderCreamerPicker()}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.placeOrderButton}
            onPress={addToOrder}
          >
            <Text style={styles.placeOrderText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BeverageDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF8FE",
    paddingTop: 20,
    paddingLeft: 35,
    paddingRight: 30,
  },
  topImageContainer: {
    position: "absolute",
    top: -120,
    left: -100,
  },
  topImage: {
    height: 250,
    width: 300,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  usernameText: {
    fontSize: 18,
    color: "#fff",
  },
  header: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  beverageName: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  optionsContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionLabel: {
    fontSize: 16,
    color: "#333",
    width: "40%",
  },
  picker: {
    width: "50%",
    height: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  addToCartButton: {
    backgroundColor: "#A77D5B",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  placeOrderButton: {
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    flex: 1,
  },
  placeOrderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
