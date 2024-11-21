import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();

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

        <TextInput
          style={styles.input}
          placeholder="Enter your Full Name"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Phone Number"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor="#666"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#666"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

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
    backgroundColor: '#EDF8FE',
    alignItems: 'center',
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
  formContainer: {
    marginTop: 250,  // Adjust this value based on topImage height
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#A77D5B',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
  },
  loginLink: {
    fontSize: 16,
    color: '#A77D5B',
    fontWeight: 'bold',
  },
});
