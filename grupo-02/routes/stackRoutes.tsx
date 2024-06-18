import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ajuda from '../screens/Ajuda';
import Contato from '../screens/Contato';
import Sobre from '../screens/Sobre';
import Home from '../screens/Home';
export default function StackRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
       
      />
      <Stack.Screen
        name='Ajuda'
        component={Ajuda}
        options={{
          headerTitle: 'Ajuda',
          headerTintColor: 'blue',
        
        }}
      />
      <Stack.Screen
        name='Sobre'
        component={Sobre}
        options={{
          headerTitle: 'Sobre',
          headerTintColor: 'blue',
        }}
      />
      <Stack.Screen
        name='Contato'
        component={Contato}
        options={{
          headerTitle: 'Home',
          headerTintColor: 'blue',
        }}
      />
    </Stack.Navigator>
  );
}
