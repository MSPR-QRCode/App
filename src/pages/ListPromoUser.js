//import React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ListPromoUser extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>ListPromoUser</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#a29bfe",
        alignItems: 'center', 
        justifyContent: 'center', 
    }
})

export default ListPromoUser; 