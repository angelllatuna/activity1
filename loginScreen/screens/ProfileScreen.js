import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const ProfileScreen = () => {
  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);

  // State for profile information
  const [profile, setProfile] = useState({
    fullName: "Anna Avetisyan",
    phoneNumber: "888 123 4567",
    email: "info@aplusdesign.co",
    gender: "Female",
    address: "123 Main St, Cityville",
    birthdate: "January 1, 1990",
  });

  // Handle Edit button click
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Handle input change
  const handleInputChange = (field, value) => {
    setProfile({
      ...profile,
      [field]: value,
    });
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
      </View>

      <TouchableOpacity style={styles.editButton} onPress={toggleEditMode}>
        <Text style={styles.editButtonText}>{isEditing ? "Save Profile" : "Edit Profile"}</Text>
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
    height: 60, // Increase the height of the input fields
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#333',
    fontSize: 16, // Increase font size for better visibility
    paddingVertical: 10, // Add vertical padding for better readability
  },
  editableInput: {
    backgroundColor: '#f0f8ff', // Light blue background to indicate editable fields
    borderColor: '#6A11CB', // Blue border for edit mode
    borderWidth: 1,
    borderRadius: 8,
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
