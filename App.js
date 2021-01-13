import React from 'react';
import store from './src/store/store'
import { Provider } from 'react-redux'
import Board from './src/screens/Board'
import Home from './src/screens/Home'
import Finish from './src/screens/Finish'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Sudokuuu Game' }}
          />
          <Stack.Screen
            name="Board"
            component={Board}
            options={{ title: 'Sudokuuu Game' }}
          />
          <Stack.Screen
            name="Finish"
            component={Finish}
            options={{ title: 'Congratulations!' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}