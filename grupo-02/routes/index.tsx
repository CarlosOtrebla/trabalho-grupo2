import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Sobre from '../screens/Sobre';
import Contato from '../screens/Contato';
import Ajuda from '../screens/Ajuda';
import Home from '../screens/Home';

export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name='home' color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name='Ajuda'
          component={Ajuda}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name='file-text' color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name='Sobre'
          component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name='file-text' color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name='phone-call' color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
