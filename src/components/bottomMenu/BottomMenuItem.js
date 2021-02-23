//Import React 
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

//Import Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

//Import Style 
import {red, grey} from '../../styles/color';


/**
 * COMPONENT : Item of the bottom menu
 * @category component
 * @param {string} title
 * @param {string} iconName
 * @param {boolean} isCurrent parameters that indicate the page displayed 
 */
const BottomMenuItem = ({title, iconName, isCurrent}) => {

  return (
    <View
      style={styles.bottomMenuItem}>
      <Icon
        name={iconName}
        size={30}
        style={{ color: isCurrent ? red : grey }}
      />
      <Text style={{fontSize:12, color: isCurrent ? red : grey }}>{title}</Text>
     
    </View>
  );
};

//Protypes
BottomMenuItem.propTypes = {
  title: PropTypes.string.isRequired, 
  iconName: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool
};

//Styles 
const styles = StyleSheet.create({
    bottomMenuItem: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    textMenuItem: {
      fontSize: 0.8
    }
})

export default BottomMenuItem; 

