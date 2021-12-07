import React from 'react';
import {View, StyleSheet, Pressable,Text} from 'react-native';
import styles from './styles';
const Button = (props) => {

    const {type,content,onPress}=props;

    // console.warn(type);
    const backgroundColor= type==='primary' ? '#171A20CC': '#FFFFFFA6';
    const textColor= type==='primary' ? '#FFFFFF': '#171A20';

    return (

        <View style={styles.container}>
            <Pressable
            style={[styles.buttons,{backgroundColor:backgroundColor}]}
            onPress={()=>onPress()}
            >
            <Text style={[styles.text,{color:textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
}

// const styles = StyleSheet.create({})

export default Button;
