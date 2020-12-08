//import React
import React from "react"; 
import {View,  StyleSheet, StatusBar} from 'react-native'
import PropTypes from 'prop-types';

//Import Components
import Header from './Header'

//import styles
import {red} from '../../styles/color'; 


const DefaultLayout = ({children, titleHeader}) => {

    return (
        <>
        <StatusBar backgroundColor={red} />
        <View style={styles.main_comtainer}>
            <Header title={titleHeader} /> 
            { children }
        </View>
    </> 
    )
}
DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired, 
    titleHeader: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    main_comtainer : {
        flex: 1,
    }
})

export default DefaultLayout; 