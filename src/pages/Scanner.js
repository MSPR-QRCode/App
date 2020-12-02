//import React
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export class Scanner extends React.Component {

    constructor(props){
        super(props); 
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Scanner</Text>
        <Button
          title="Go to Notifications"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81ecec',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Scanner;
