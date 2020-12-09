//Import React 
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//Import Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

//Import Style 
import {red, grey} from '../../styles/color';


export const BottomMenuItem = ({title, iconName, isCurrent}) => {

  const inset = useSafeAreaInsets();

  return (
    <View
      style={{...styles.bottomMenuItem, paddingBottom: inset.bottom}}>
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

