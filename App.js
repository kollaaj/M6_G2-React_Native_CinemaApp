import 'react-native-gesture-handler'; // must stay at the top
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Homescreen from './components/screens/HomeScreens'
import MovieId from './components/screens/movieId'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  
  function LogoTitle() {
    return (
      <Image
        style={{ width: 74, height: 48 }}
        source={require('./assets/popIcon.png')}
      />
    );
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen 
          name="Home" 
          component={Homescreen} 
          options={{ 
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#0e1824', // header color
              height: 90,
            },
            headerTintColor: '#e1e1e1', // header text color 
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="MovieId" 
          component={MovieId} 
          options={{ 
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#0e1824', // header color
              height: 90,
            },
            headerTintColor: '#e1e1e1', // header text color
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1824',
  },
});
