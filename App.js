import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import CarItem from './components/carItem/Index';
import CarList from './components/carList/Index';
import Header from './components/header/Index';



export default function App() {
  return (
    <View style={styles.container}>

      <Header />
      <CarList />
      {/* <StatusBar style="auto"
       animated={true}
       backgroundColor="black"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
});
 {/* <CarItem name={"Model X"} 
        tagLineCTA={"Touchless Delivery"}
        tagLine={"Starting @ $999"}
        image={require('./assets/images/ModelY.jpeg')}
      /> */}