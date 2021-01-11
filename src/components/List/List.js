//Import React 
import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import { fakePromo } from '../../services/FakePromo';
import ItemPromo from './ItemPromo';
  
const List = () => {
    return(
        <FlatList  style={styles.list}
        data={fakePromo}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (  <ItemPromo item={item} />)}
      />
    );
}

const styles = StyleSheet.create({
    list: {
      flex: 1,
      paddingTop: 5,
      marginBottom: 15
    }
  })

export default List; 