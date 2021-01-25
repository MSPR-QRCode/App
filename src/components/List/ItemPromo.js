//import React
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

//import service
import { formatDate } from '../../services/date';

const ItemPromo = ({item}) => {
   return (
    <TouchableOpacity style={styles.item}>
    <Text  numberOfLines={1} style={styles.title}>{item.name}</Text>
    <Text style={styles.date}>Date limite : { formatDate(item.dateExp) }</Text>
    <Text numberOfLines={2} style={styles.message}>{item.description}</Text>
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