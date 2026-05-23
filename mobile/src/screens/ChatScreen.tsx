import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', sender: 'other', content: 'Hey! How are you?', timestamp: '10:30' },
    { id: '2', sender: 'user', content: "I'm doing great!", timestamp: '10:32' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: String(messages.length + 1),
          sender: 'user',
          content: message,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'user' && styles.sentMessage,
            ]}
          >
            <View
              style={[
                styles.messageBubble,
                item.sender === 'user' && styles.sentBubble,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  item.sender === 'user' && styles.sentText,
                ]}
              >
                {item.content}
              </Text>
            </View>
          </View>
        )}
        scrollEnabled
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#b0b0b0"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSendMessage}
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 4,
    paddingHorizontal: 16,
  },
  sentMessage: {
    justifyContent: 'flex-end',
  },
  messageBubble: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: '75%',
  },
  sentBubble: {
    backgroundColor: '#a855f7',
  },
  messageText: {
    color: '#e0e0e0',
    fontSize: 14,
  },
  sentText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopColor: '#2d2d2d',
    borderTopWidth: 1,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    borderColor: '#2d2d2d',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#e0e0e0',
  },
  sendButton: {
    backgroundColor: '#a855f7',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ChatScreen;
