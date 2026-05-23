import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Heart, X } from 'lucide-react';

const DiscoverScreen = () => {
  const [profiles, setProfiles] = useState([
    {
      id: '1',
      name: 'Sarah',
      age: 26,
      location: 'New York, NY',
      bio: 'Travel enthusiast and hiking lover',
      photo: 'https://via.placeholder.com/400x500?text=Sarah',
      matchScore: 0.92,
    },
  ]);

  const handleLike = (id: string) => {
    setProfiles(profiles.filter(p => p.id !== id));
  };

  const handlePass = (id: string) => {
    setProfiles(profiles.filter(p => p.id !== id));
  };

  const currentProfile = profiles[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>

      {currentProfile ? (
        <ScrollView style={styles.card}>
          <Image
            source={{ uri: currentProfile.photo }}
            style={styles.photo}
          />

          <View style={styles.matchBadge}>
            <Text style={styles.matchScore}>
              {Math.round(currentProfile.matchScore * 100)}% Match
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.name}>
              {currentProfile.name}, {currentProfile.age}
            </Text>
            <Text style={styles.location}>{currentProfile.location}</Text>
            <Text style={styles.bio}>{currentProfile.bio}</Text>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.button, styles.passButton]}
              onPress={() => handlePass(currentProfile.id)}
            >
              <Text style={styles.buttonText}>Pass</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.likeButton]}
              onPress={() => handleLike(currentProfile.id)}
            >
              <Text style={styles.buttonText}>Like</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No more profiles</Text>
        </View>
      )}
    </View>
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
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2d2d2d',
  },
  photo: {
    width: '100%',
    height: 400,
    backgroundColor: '#242424',
  },
  matchBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#1a1a1a99',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  matchScore: {
    color: '#ec4899',
    fontSize: 12,
    fontWeight: '600',
  },
  info: {
    padding: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#b0b0b0',
    marginBottom: 12,
  },
  bio: {
    fontSize: 14,
    color: '#e0e0e0',
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  passButton: {
    backgroundColor: '#2d2d2d',
  },
  likeButton: {
    backgroundColor: '#a855f7',
  },
  buttonText: {
    color: '#e0e0e0',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#b0b0b0',
    fontSize: 16,
  },
});

export default DiscoverScreen;
