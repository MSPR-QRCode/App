//import React
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

//Size
const {width} = Dimensions.get('screen');
const lengthMask = width / 1.75;
const sizeBorder = 8;
const borderRadius = 4;

const MaskScanner = () => {
  const numbers = [1, 2, 3];

  const row1 = numbers.map((column) => (
    <View
      key={column}
      style={
        column === 1 ? styles.col1 : column === 3 ? styles.col3 : styles.col
      }></View>
  ));

  const row3 = numbers.map((column) => (
    <View
        key={column}
      style={
        column === 1 ? styles.col4 : column === 3 ? styles.col6 : styles.col
      }></View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.row}>{row1}</View>
      <View style={styles.row}></View>
      <View style={styles.row}>{row3}</View>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    height: lengthMask,
    width: lengthMask,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  col: {
    flex: 1,
  },
  col1: {
    flex: 1,
    borderColor: 'white',
    borderLeftWidth: sizeBorder,
    borderTopWidth: sizeBorder,
    borderTopLeftRadius: borderRadius,
  },
  col3: {
    flex: 1,
    borderColor: 'white',
    borderRightWidth: sizeBorder,
    borderTopWidth: sizeBorder,
    borderTopRightRadius: borderRadius,
  },
  col4: {
    flex: 1,
    borderColor: 'white',
    borderLeftWidth: sizeBorder,
    borderBottomWidth: sizeBorder,
    borderBottomLeftRadius: borderRadius,
  },
  col6: {
    flex: 1,
    borderColor: 'white',
    borderRightWidth: sizeBorder,
    borderBottomWidth: sizeBorder,
    borderBottomRightRadius: borderRadius,
  },
});

export default MaskScanner;
