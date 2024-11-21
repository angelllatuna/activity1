// ProfileScreen.js
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.profilePictureContainer}>
        <FontAwesome name="user-circle" size={80} color="#fff" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Full Name" value="Anna Avetisyan" editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="call" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Phone Number" value="888 123 4567" editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Email" value="info@aplusdesign.co" editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="user" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Gender" value="Female" editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="location-sharp" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Address" value="123 Main St, Cityville" editable={false} />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="calendar" size={20} color="#6A11CB" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Birthdate" value="January 1, 1990" editable={false} />
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
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
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#333',
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
