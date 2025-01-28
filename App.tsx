import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NarrativaScreen from './screens/NarrativaScreen';

// Definindo o tipo para a navegação
type RootStackParamList = {
  Narrativa: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Narrativa" component={NarrativaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
