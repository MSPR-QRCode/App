//Import React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import components
import DefaultLayout from '../components/layouts/DefaultLayout';
import List from '../components/List/List';

//import Style
import stylePage from '../styles/stylePage'; 

class ListPromo extends React.Component {


    render() {
        return (
            <DefaultLayout titleHeader={"Promotions"}>
            <View style={{...styles.container, ...stylePage.container_page}}>
                <List></List>
            </View>
            </DefaultLayout>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        // alignItems: 'center', 
        // justifyContent: 'center', 
     
    }
})

export default ListPromo; 