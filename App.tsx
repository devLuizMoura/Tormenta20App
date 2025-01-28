import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NarrativaScreen from './screens/NarrativaScreen';
import CriarPersonagemScreen from './screens/CriarPersonagemScreen';

type RootStackParamList = {
  Narrativa: undefined;
  CriarPersonagem: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Narrativa">
        <Stack.Screen name="Narrativa" component={NarrativaScreen} options={{ title: 'Aventura' }} />
        <Stack.Screen name="CriarPersonagem" component={CriarPersonagemScreen} options={{ title: 'Criar Personagem' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
