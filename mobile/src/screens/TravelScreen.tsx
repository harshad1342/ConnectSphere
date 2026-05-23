import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const TravelScreen = () => {
  const [showForm, setShowForm] = useState(false);
  const [plans] = React.useState([
    {
      id: '1',
      destination: 'Paris, France',
      startDate: '2024-06-01',
      endDate: '2024-06-15',
      travelers: 1,
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Travel Plans</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowForm(!showForm)}
        >
          <Text style={styles.addButtonText}>+ New</Text>
        </TouchableOpacity>
      </View>

      {showForm && (
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Destination" />
          <TextInput style={styles.input} placeholder="Start Date" />
          <TextInput style={styles.input} placeholder="End Date" />
          <View style={styles.formActions}>
            <TouchableOpacity style={[styles.button, styles.submitButton]}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setShowForm(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <FlatList
        data={plans}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.planCard}>
            <Text style={styles.destination}>{item.destination}</Text>
            <Text style={styles.dates}>
              {item.startDate} to {item.endDate}
            </Text>
            <TouchableOpacity style={[styles.button, styles.primaryButton]}>
              <Text style={styles.buttonText}>Find Companions</Text>
            </TouchableOpacity>
          </View>
        )}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e0e0e0',
  },
  addButton: {
    backgroundColor: '#a855f7',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  form: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    borderColor: '#2d2d2d',
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#242424',
    borderColor: '#2d2d2d',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: '#e0e0e0',
    marginBottom: 8,
  },
  formActions: {
    flexDirection: 'row',
    gap: 8,
  },
  planCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    borderColor: '#2d2d2d',
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
  },
  destination: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 4,
  },
  dates: {
    color: '#b0b0b0',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    flex: 1,
  },
  primaryButton: {
    backgroundColor: '#a855f7',
  },
  submitButton: {
    backgroundColor: '#a855f7',
  },
  cancelButton: {
    backgroundColor: '#2d2d2d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TravelScreen;
