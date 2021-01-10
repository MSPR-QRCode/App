import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ItemPromo = ({item}) => {
   return (
    <TouchableOpacity style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.date}>Date limite : {item.date}</Text>
    <Text style={styles.message}>{item.message}</Text>
  </TouchableOpacity>
   ); 
}

const styles = StyleSheet.create({
    item: {
       backgroundColor: "white",
      margin: 10,
      borderRadius: 5,
      padding: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
      fontFamily:  "Montserrat-Medium",

    },  
    //
    
    title: {
        fontSize: 24,
        fontFamily:  "Montserrat-ExtraBold"  
    },
    date: {
      paddingTop: 5, 
      paddingBottom: 5
  },
    message: {
      // fontSize: 20,
      fontFamily:  "Montserrat-Regular"  
  }
  })

export default ItemPromo;