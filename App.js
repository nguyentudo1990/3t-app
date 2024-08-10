import 'react-native-gesture-handler';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from 'theme';

import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from 'navigation/AppNavigator';
import { StatusBar } from 'react-native';
import { useState } from 'react';
import AuthNavigator from 'navigation/AuthNavigator';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'dark-content'} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>{user ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
