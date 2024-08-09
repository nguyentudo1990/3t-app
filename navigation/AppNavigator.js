import React from 'react';
import TabNavigator from './TabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import ItemDetailsScreen from 'screens/ItemDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{ headerShown: false, orientation: 'portrait' }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
