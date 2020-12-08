//import React
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

//import components
import DefaultLayout from '../components/layouts/DefaultLayout'

//import Style
import stylePage from '../styles/stylePage'; 

class ListPromoUser extends React.Component {


    render() {
        const navigation = this.props.navigation; 
        return (
           <DefaultLayout titleHeader={"Mes codes"}>
                  <View style={{...stylePage.container_page, ...styles.container }}>
                  <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Detail')}
      />
            </View>
           </DefaultLayout>
         
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop:-20, 
        alignItems: 'center', 
        justifyContent: 'center', 
    }
})

export default ListPromoUser; 