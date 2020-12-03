//import React
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

//import components
import DefaultLayout from '../components/layouts/DefaultLayout'

export class Scanner extends React.Component {

    constructor(props){
        super(props); 
    }

  render() {
    return (
     <DefaultLayout titleHeader={"Scanner"}>
        <View style={styles.container}>
        <Text>Scanner</Text>
        <Button
          title="Go to Notifications"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
      </View>
     </DefaultLayout>
     
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
