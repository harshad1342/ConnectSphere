import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

// Screens
import AuthScreen from './screens/AuthScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import MatchesScreen from './screens/MatchesScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';
import TravelScreen from './screens/TravelScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DiscoverStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DiscoverList" component={DiscoverScreen} />
  </Stack.Navigator>
);

const MatchesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MatchesList" component={MatchesScreen} />
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfileView" component={ProfileScreen} />
  </Stack.Navigator>
);

const TravelStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="TravelList" component={TravelScreen} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#1a1a1a',
        borderTopColor: '#2d2d2d',
        borderTopWidth: 1,
      },
      tabBarActiveTintColor: '#a855f7',
      tabBarInactiveTintColor: '#b0b0b0',
    }}
  >
    <Tab.Screen
      name="Discover"
      component={DiscoverStack}
      options={{
        tabBarLabel: 'Discover',
      }}
    />
    <Tab.Screen
      name="Matches"
      component={MatchesStack}
      options={{
        tabBarLabel: 'Matches',
      }}
    />
    <Tab.Screen
      name="Travel"
      component={TravelStack}
      options={{
        tabBarLabel: 'Travel',
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStack}
      options={{
        tabBarLabel: 'Profile',
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0f0f0f" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={MainTabs} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
