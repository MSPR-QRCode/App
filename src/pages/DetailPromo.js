//import React
import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

class DetailPromo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <StatusBar backgroundColor={'black'}/>
      <View style={styles.container}>
        <Text>Detail Promo</Text>
       
      </View>
    </> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailPromo;
