
import * as React from 'react';
// import colors from './assets/colors/colors';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './components/home';
import Details from './components/details';
import OrderPage from './components/oderPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options = {{headerShown : false}}/>
        <Stack.Screen name="Details" component={Details} options = {{headerShown : false}}/>
        <Stack.Screen name="Order" component={OrderPage} options = {{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
