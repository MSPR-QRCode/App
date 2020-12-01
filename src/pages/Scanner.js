//import React
import React from 'react';
import { View,Text,  StyleSheet } from 'react-native';

export class Scanner extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>Scanner</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex:1, 
      backgroundColor: "#81ecec",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Scanner; 