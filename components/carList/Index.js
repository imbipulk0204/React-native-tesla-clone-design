import React from 'react';
import {View, FlatList,Dimensions} from 'react-native';
import styles from './styles';
import car from './car';
import CarItem from '../carItem/Index';
const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={car}
                renderItem={({item})=><CarItem 
                    car={item}
                /> }
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

// const styles = StyleSheet.create({})

export default CarList;
