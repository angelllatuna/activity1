import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation(); // Access navigation object

  const handleLogin = () => {
    navigation.navigate("Home"); // Navigate to HomeScreen directly
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../assets/topImage.png")}
          style={styles.topImage}
        />
      </View>

      {/* Moved the vector image upwards */}
      <Image
        source={require("../assets/loginpageVector.png")}
        style={styles.centerImage}
      />

      {/* Welcome Text Section placed below the vector */}
      <Text style={styles.welcomeText}>Welcome onboard!</Text>
      <Text style={styles.subText}>
        Let's start by logging in to your registered account.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your Username"
        placeholderTextColor="#666"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        placeholderTextColor="#666"
        secureTextEntry={true}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text style={styles.signupText}>
        Don't have an account?
        {"\n"}
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF8FE",
    alignItems: "center",
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
  centerImage: {
    width: 300,
    height: 250,
    marginTop: 180,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginHorizontal: 40,
    marginTop: 10,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    marginVertical: 10,
    elevation: 5, // Adds shadow for Android
  },
  loginButton: {
    width: "50%",
    height: 50,
    backgroundColor: "#A77D5B", // Brown color for the button
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupText: {
    marginTop: 20,
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },

  signupLink: {
    fontSize: 16,
    color: "#A77D5B",
    fontWeight: "bold",
  },
});
