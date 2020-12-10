//import React
import React from "react"; 
import {View, Text, StyleSheet} from 'react-native'
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//import styles
import { red } from "../../styles/color"



const Header = ({title}) => {

    const inset = useSafeAreaInsets();

    return (
        <View style={{...styles.header,paddingTop: inset.top }}>
            <Text style={styles.headerTitle}>{ title }</Text>
        </View>
    )

}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: red, 
        paddingVertical: 10, 
        borderBottomRightRadius: 20, 
        borderBottomLeftRadius: 20, 
        marginBottom:-20, 
        zIndex: 100
        
    }, 
    headerTitle:{
        textAlign: 'center', 
        color: 'white', 
        fontSize: 30, 
        fontFamily: "Montserrat-ExtraBold",
       
    }
})



export default Header; 