import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const ProfileScreen = () => {
  // State for profile information
  const [profile, setProfile] = useState({
    fullName: "Anna Avetisyan",
    phoneNumber: "09876543265",
    email: "info@aplusdesign.com",
    gender: "Female",
    address: "123 Main St, Cityville",
    birthdate: "January 1, 1990",
  });

  // States for errors
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [birthdateError, setBirthdateError] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  // Handle Edit button click
  const toggleEditMode = () => {
    if (isEditing) {
      validateForm(); // Validate form on save attempt
    } else {
      setIsEditing(true); // Allow editing if not in edit mode
    }
  };

  // Handle input change
  const handleInputChange = (field, value) => {
    setProfile({
      ...profile,
      [field]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    let valid = true;

    // Clear previous errors
    setFullNameError("");
    setEmailError("");
    setPhoneNumberError("");
    setGenderError("");
    setAddressError("");
    setBirthdateError("");

    // Full Name Validation
    if (!profile.fullName) {
      setFullNameError("Full Name is required.");
      valid = false;
    }

    // Email Validation
    const emailValid = profile.email.includes("@") && profile.email.includes(".com");
    if (!profile.email || !emailValid) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    // Phone Number Validation (check if it's 11 digits for a valid phone number)
    if (!profile.phoneNumber || profile.phoneNumber.length !== 11) {
      setPhoneNumberError("Phone number must be 11 digits.");
      valid = false;
    }

    // Gender Validation
    if (!profile.gender) {
      setGenderError("Gender is required.");
      valid = false;
    }

    // Address Validation
    if (!profile.address) {
      setAddressError("Address is required.");
      valid = false;
    }

    // Birthdate Validation
    if (!profile.birthdate) {
      setBirthdateError("Birthdate is required.");
      valid = false;
    }

    // If valid, toggle to view mode
    if (valid) {
      setIsEditing(false); // Disable editing
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.profilePictureContainer}>
        <FontAwesome name="user-circle" size={80} color="#6A11CB" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput
          style={[styles.input, isEditing && styles.editableInput]}
          placeholder="Full Name"
          value={profile.fullName}
          onChangeText={(text) => handleInputChange("fullName", text)}
          editable={isEditing}
        />
        {fullNameError && <Text style={styles.errorText}>{fullNameError}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="call" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput
          style={[styles.input, isEditing && styles.editableInput]}
          placeholder="Phone Number"
          value={profile.phoneNumber}
          onChangeText={(text) => handleInputChange("phoneNumber", text)}
          editable={isEditing}
        />
        {phoneNumberError && <Text style={styles.errorText}>{phoneNumberError}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput
          style={[styles.input, isEditing && styles.editableInput]}
          placeholder="Email"
          value={profile.email}
          onChangeText={(text) => handleInputChange("email", text)}
          editable={isEditing}
        />
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Feather name="user" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput
          style={[styles.input, isEditing && styles.editableInput]}
          placeholder="Gender"
          value={profile.gender}
          onChangeText={(text) => handleInputChange("gender", text)}
          editable={isEditing}
        />
        {genderError && <Text style={styles.errorText}>{genderError}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="location-sharp" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput
          style={[styles.input, isEditing && styles.editableInput]}
          placeholder="Address"
          value={profile.address}
          onChangeText={(text) => handleInputChange("address", text)}
          editable={isEditing}
        />
        {addressError && <Text style={styles.errorText}>{addressError}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="calendar" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput
          style={[styles.input, isEditing && styles.editableInput]}
          placeholder="Birthdate"
          value={profile.birthdate}
          onChangeText={(text) => handleInputChange("birthdate", text)}
          editable={isEditing}
        />
        {birthdateError && <Text style={styles.errorText}>{birthdateError}</Text>}
      </View>

      <TouchableOpacity style={styles.editButton} onPress={toggleEditMode}>
        <Text style={styles.editButtonText}>
          {isEditing ? "Save Profile" : "Edit Profile"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF8FE',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    width: '100%',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A11CB',
  },
  profilePictureContainer: {
    backgroundColor: '#6A11CB',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 8,
    height: 60, 
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    paddingVertical: 10,
  },
  editableInput: {
    backgroundColor: '#f0f8ff',
    borderColor: '#6A11CB',
    borderWidth: 1,
    borderRadius: 8,
  },
  errorText: {
    position: 'absolute',
    right: 10,
    top: 12,
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
  },
  editButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    backgroundColor: '#6A11CB',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
