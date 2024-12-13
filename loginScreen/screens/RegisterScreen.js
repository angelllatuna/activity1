import React, { useState } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateForm = () => {
    let valid = true;

    // Clear all errors before validating
    setFullNameError("");
    setEmailError("");
    setPhoneNumberError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // Full Name Validation
    if (!fullName) {
      setFullNameError("Full Name is required.");
      valid = false;
    }

    // Email Validation
    const emailValid = email.includes("@") && email.includes(".com");
    if (!email || !emailValid) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    // Phone Number Validation (11 digits for Philippine number)
    if (!phoneNumber || phoneNumber.length !== 11) {
      setPhoneNumberError("Phone number must be 11 digits.");
      valid = false;
    }

    // Password Validation
    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      valid = false;
    }

    if (valid) {
      navigation.navigate("Home"); // Navigate to Home if form is valid
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Image Section */}
      <View style={styles.topImageContainer}>
        <Image source={require("../assets/topImage.png")} style={styles.topImage} />
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subText}>Let's start creating your account.</Text>

        {/* Full Name */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Full Name"
            placeholderTextColor="#666"
            value={fullName}
            onChangeText={setFullName}
          />
          {fullNameError && <Text style={styles.errorText}>{fullNameError}</Text>}
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
        </View>

        {/* Phone Number */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Phone Number"
            placeholderTextColor="#666"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          {phoneNumberError && <Text style={styles.errorText}>{phoneNumberError}</Text>}
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            placeholderTextColor="#666"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
        </View>

        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#666"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {confirmPasswordError && <Text style={styles.errorText}>{confirmPasswordError}</Text>}
        </View>

        {/* Register Button */}
        <TouchableOpacity style={styles.button} onPress={validateForm}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Text style={styles.loginText}>
          Already have an account?
          {"\n"}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
  formContainer: {
    marginTop: 250, // Adjust this value based on topImage height
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
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
    marginBottom: 20,
  },
  inputContainer: {
    position: "relative",
    width: "80%",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  errorText: {
    position: "absolute",
    right: 10,
    top: 12,
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
  },
  button: {
    width: "50%",
    height: 50,
    backgroundColor: "#A77D5B",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    color: "#666",
    fontSize: 16,
    textAlign: "center",
  },
  loginLink: {
    fontSize: 16,
    color: "#A77D5B",
    fontWeight: "bold",
  },
});
