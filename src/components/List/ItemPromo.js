//import React
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

//import styles
import {red} from '../../styles/color';

//import service
import { formatDate } from '../../services/date';

const ItemPromo = ({item, navigate}) => {

  const displayDetailPromo = () => {
      navigate("Detail", item); 
  }

  const displayIdQRCode = (item) => {
    if(item.codePromo) 
      return <Text  numberOfLines={1} style={styles.idQRCode}>{item.codePromo}</Text>
  }


   return (
    <TouchableOpacity style={styles.item} onPress={() => displayDetailPromo()}>
    <Text  numberOfLines={1} style={styles.title}>{item.name}</Text>
    {displayIdQRCode(item)}
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
    title: {
        fontSize: 24,
        fontFamily:  "Montserrat-ExtraBold"  
    },
    idQRCode: {
      color: red, 
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