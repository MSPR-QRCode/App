//import React
import React from "react"; 
import {View, Text, StyleSheet, Platform} from 'react-native'
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//import styles
import { red } from "../../styles/color"


/**
 * COMPONENT : application header
 * @category component
 * @param {string} title
 */
const Header = ({title}) => {

    const inset = useSafeAreaInsets();

    return (
        <View style={{...styles.header, paddingTop: inset.top + 10 }}>
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
        paddingBottom: 10, 
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