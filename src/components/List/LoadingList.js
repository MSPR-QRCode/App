//import React
import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

//import style
import {red} from '../../styles/color';


/**
 * Coucou
 * @author Corentin Lissillour
 * @param {*} props
 * @pro pro
 */

const Loading = ({display}) => {
  if (display) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="large" color={red} />
      </View>
    );
  }
  return (<></>)
};

const styles = StyleSheet.create({
  containerLoading: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
});

export default Loading;
