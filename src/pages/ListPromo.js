//Import React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ListPromo extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>ListPromo</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#55efc4",
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        paddingBottom:20
    }
})

export default ListPromo; 