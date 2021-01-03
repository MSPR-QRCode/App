import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ItemPromo = ({item}) => {
   return (
    <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
    <Text >Date limite : {item.date}</Text>
    <Text style={styles.message}>{item.message}</Text>
  </TouchableOpacity>
   ); 
}

const styles = StyleSheet.create({
    item: {
    //   backgroundColor: "red",
      margin: 10,
      borderRadius: 5,
      padding: 5,
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
        height: 3,
      },
      fontFamily:  "Montserrat-Medium"
    },  
    //
    
    title: {
        fontSize: 24,
        fontFamily:  "Montserrat-ExtraBold"  
    },
    message: {
      fontSize: 20,
      fontFamily:  "Montserrat-Regular"  
  }
  })

export default ItemPromo;