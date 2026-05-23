# ConnectSphere Mobile App

## Overview

React Native mobile app using Expo for iOS and Android.

## Quick Start

### Prerequisites
- Node.js 16+
- Expo CLI: `npm install -g expo-cli`

### Installation

```bash
npm install
npm start
```

### Run on Device

#### iOS Simulator
```bash
npm run ios
```

#### Android Emulator
```bash
npm run android
```

#### Using Expo Go (Easiest)
1. Download Expo Go from App Store or Play Store
2. Run `npm start`
3. Scan QR code with Expo Go app

## Project Structure

```
src/
├── screens/
│   ├── AuthScreen.tsx
│   ├── DiscoverScreen.tsx
│   ├── MatchesScreen.tsx
│   ├── ChatScreen.tsx
│   ├── ProfileScreen.tsx
│   └── TravelScreen.tsx
└── App.tsx
```

## Features

✅ Dark theme UI
✅ User authentication
✅ Discover/swiping
✅ Matches and messaging
✅ Profile management
✅ Travel planning
✅ Real-time chat

## Technologies

- React Native
- Expo
- TypeScript
- NativeWind (Tailwind for RN)
- React Navigation
- Supabase
- Axios

## Building for Production

### iOS
```bash
exp build:ios
```

### Android
```bash
exp build:android
```

## Environment Variables

See `.env.example`

## Deployment

- **iOS**: App Store
- **Android**: Google Play Store
- **Both**: EAS Build (Expo)

## Support

See main README.md for more information.
