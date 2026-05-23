import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AuthScreen = ({ navigation }: any) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // TODO: Call authentication API
      console.log('Auth submitted');
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>ConnectSphere</Text>
        <Text style={styles.subtitle}>Find your perfect connection</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, isLogin && styles.activeTab]}
          onPress={() => setIsLogin(true)}
        >
          <Text style={[styles.tabText, isLogin && styles.activeTabText]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, !isLogin && styles.activeTab]}
          onPress={() => setIsLogin(false)}
        >
          <Text style={[styles.tabText, !isLogin && styles.activeTabText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        {!isLogin && (
          <>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#b0b0b0"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#b0b0b0"
              value={lastName}
              onChangeText={setLastName}
            />
          </>
        )}

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#b0b0b0"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#b0b0b0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={[styles.button, styles.primaryButton, loading && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Loading...' : isLogin ? 'Login' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  contentContainer: {
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#b0b0b0',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#242424',
    borderRadius: 8,
    marginBottom: 32,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#a855f7',
    borderRadius: 6,
  },
  tabText: {
    fontSize: 16,
    color: '#b0b0b0',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  form: {
    gap: 16,
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderColor: '#2d2d2d',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#e0e0e0',
    fontSize: 16,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: '#a855f7',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

export default AuthScreen;
