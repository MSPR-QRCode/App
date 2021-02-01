//import React
import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

//import style
import {red} from '../../styles/color';

const Loading = ({msg}) => {
  return (
    <View style={styles.containerLoading}>
      <View style={styles.alertLoading}>
        <ActivityIndicator size="large" color={red} />
        <Text style={styles.msgLoading}>{msg}</Text>
      </View>
    </View>
  );
};
Loading.propTypes = {
  msg: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  containerLoading: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertLoading: {
    maxWidth: 300, 
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0,
    shadowRadius: 16.00,

    elevation: 8,
  },
  msgLoading: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
});

export default Loading;
