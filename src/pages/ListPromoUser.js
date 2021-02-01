//import React
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

//import components
import DefaultLayout from '../components/layouts/DefaultLayout';

//import Style
import stylePage from '../styles/stylePage';

class ListPromoUser extends React.Component {
  navigateDetail() {
    this.props.navigation.navigate('Detail', {
      idQRCode: 'MSPR_qHGEAXjfDA',
      name: 'test',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum ligula ut consequat placerat. Cras tincidunt ex ac erat commodo scelerisque ac ac dolor. Ut tincidunt orci ut nunc volutpat malesuada. Donec id sapien porta, fringilla diam massa nunc.',
      image: 'https://api-mspr.thejulienm.fr/image/skate.jpg',
      dateCrea: 1607620268,
      dateExp: 1610212268,
      codePromo: 'TEST20202021',
    });
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <DefaultLayout titleHeader={'Mes codes'}>
        <View style={{...stylePage.container_page, ...styles.container}}>
          <Button title="Go to Profile" onPress={() => this.navigateDetail()} />
        </View>
      </DefaultLayout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListPromoUser;
