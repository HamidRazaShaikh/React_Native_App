/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




const App = () => {
 
  

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Text style = {{ color: 'white', fontSize: 24}}>AwesomeProject</Text>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle : {
   backgroundColor: 'red',
   flex: 1,
   alignItems:"center",
   justifyContent: 'center'
   
  },
 
});

export default App;
