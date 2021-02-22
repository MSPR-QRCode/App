//Import React 
import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ItemPromo from './ItemPromo';
import LoadingList from './LoadingList';


const List = ({promos, loading, loadPromos, navigate}) => {

    return(
      <>
        <FlatList  style={styles.list}
        data={promos}
        keyExtractor={(item, index) => index.toString() }
        renderItem={({item}) => (  <ItemPromo item={item} navigate={navigate} />)}
        onEndReachedThreshold={0.5}
        onEndReached={async () => {
          if(loadPromos) await loadPromos()
        }}
        ListFooterComponent={<LoadingList display={loading} /> }

      />
      
    </>
    );
}

const styles = StyleSheet.create({
    list: {
      flex: 1,
      paddingTop: 5,
      paddingBottom: 20
    }
  })

export default List; 