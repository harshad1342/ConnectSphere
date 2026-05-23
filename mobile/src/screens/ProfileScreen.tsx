import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 28,
    bio: 'Travel enthusiast',
    location: 'New York, NY',
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={profile.firstName}
            onChangeText={(val) => setProfile({ ...profile, firstName: val })}
            editable={isEditing}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={profile.lastName}
            onChangeText={(val) => setProfile({ ...profile, lastName: val })}
            editable={isEditing}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={String(profile.age)}
            onChangeText={(val) => setProfile({ ...profile, age: parseInt(val) })}
            editable={isEditing}
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={[styles.input, styles.bioInput, !isEditing && styles.disabledInput]}
            value={profile.bio}
            onChangeText={(val) => setProfile({ ...profile, bio: val })}
            editable={isEditing}
            multiline
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.disabledInput]}
            value={profile.location}
            onChangeText={(val) => setProfile({ ...profile, location: val })}
            editable={isEditing}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => setIsEditing(!isEditing)}
      >
        <Text style={styles.buttonText}>
          {isEditing ? 'Save' : 'Edit Profile'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.dangerButton]}>
        <Text style={styles.dangerButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 24,
  },
  form: {
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    color: '#b0b0b0',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderColor: '#2d2d2d',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#e0e0e0',
    fontSize: 16,
  },
  disabledInput: {
    backgroundColor: '#242424',
  },
  bioInput: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: '#a855f7',
  },
  dangerButton: {
    backgroundColor: '#ef444499',
    borderColor: '#ef4444',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dangerButtonText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;
