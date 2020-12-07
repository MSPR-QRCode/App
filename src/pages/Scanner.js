//import React
import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { RNCamera } from 'react-native-camera'

//import components
import DefaultLayout from '../components/layouts/DefaultLayout'; 
import MaskScanner from '../components/layouts/MaskScanner'; 

export class Scanner extends React.Component {

    constructor(props){
        super(props); 
    }

  render() {
    const navigation = this.props.navigation; 
    return (
     <DefaultLayout titleHeader={"Scanner"}>
        <RNCamera style={styles.camera}>
        {/* <MaskScanner />  */}
        <Button title="GO NAVIGATION" onPress={() => navigation.navigate('Detail')} />
        </RNCamera>
     </DefaultLayout>
     
    );
  }
}

const styles = StyleSheet.create({
 camera: {
   flex: 1, 
   justifyContent: "center", 
   alignItems: "center"
 }
});

export default Scanner;
