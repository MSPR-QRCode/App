//import React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DetailPromo extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>Detail Promo</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
    }
})

export default DetailPromo; 