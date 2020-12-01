//Import React 
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

//Import Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

//Import Style 
import {blue, grey} from '../../styles/color';


export const BottomMenuItem = ({iconName, isCurrent}) => {
  return (
    <View
      style={styles.bottomMenuItem}>
      <Icon
        name={iconName}
        size={32}
        style={{ color: isCurrent ? blue : grey }}
      />
    </View>
  );
};

//Protypes
// BottomMenuItem.propTypes = {
//   iconName: PropTypes.string.isRequired,
//   isCurrent: PropTypes
// };

//Styles 
const styles = StyleSheet.create({
    bottomMenuItem: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
})

