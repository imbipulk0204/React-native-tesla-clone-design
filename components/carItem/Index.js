import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import Button from '../Buttons/Index';

import styles from './style';

const CarItem = (props) => {
    const {name,tagLine,image,tagLineCTA}=props.car;
    return (
        <View style={styles.carConatiner}>
               <ImageBackground style={styles.image} source={image} />
            <View style={styles.titlesHead}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitles}>
                    {tagLine} 
                    {' '}
                    <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
                </Text>
            </View>

          {/* buttons */}
             <View style={styles.buttonContainer}>
                <Button type={"primary"} content={"Custom Order"}
                    onPress={()=> console.warn("custom order was pressed")}
                />

                <Button type={"secondary"} content={"Existing Inventory"}
                    onPress={()=> console.warn("Exisiting Inventory was pressed")}
                />
            </View>
      </View>
    );
}

// const styles = StyleSheet.create({})

export default CarItem;
