import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const MatchesScreen = ({ navigation }: any) => {
  const [matches] = React.useState([
    {
      id: '1',
      name: 'Sarah',
      lastMessage: 'Hey! How are you?',
      photo: 'https://via.placeholder.com/100?text=Sarah',
      unread: 2,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Matches</Text>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.matchCard}
            onPress={() => navigation.navigate('Chat', { matchId: item.id })}
          >
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
            {item.unread > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.unread}</Text>
              </View>
            )}
          </TouchableOpacity>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 16,
  },
  matchCard: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2d2d2d',
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e0e0e0',
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 14,
    color: '#b0b0b0',
  },
  badge: {
    backgroundColor: '#ec4899',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default MatchesScreen;
