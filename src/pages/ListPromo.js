//Import React
import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

//import components
import DefaultLayout from '../components/layouts/DefaultLayout';
import List from '../components/List/List';
import LoadingList from '../components/List/LoadingList';

//import Style
import stylePage from '../styles/stylePage';

//import service
import {getPromos} from '../services/qrcode';

class ListPromo extends React.Component {
  firstId = 0;

  constructor(props) {
    super(props);
    this.state = {
      promos: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.loadPromos();
  }

  loadPromos = async () => {
    try {
      if (!this.state.isLoading) {
        this.setState({isLoading: true});
        this.firstId = this.state.promos.length;
        console.log('firstId', this.firstId);
        const data = await getPromos(this.firstId);
        this.setState({
          promos: [...this.state.promos, ...data.promotions],
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Problème de chargement',
        'Il y a eu un problème de chargement de la liste',
        [
          {
            text: 'Ok',
            onPress: () => {
              this.setState({isLoading: false});
            },
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
  };

  render() {
    return (
      <DefaultLayout titleHeader={'Promotions'}>
        <View style={{...styles.container, ...stylePage.container_page}}>
          <List
            promos={this.state.promos}
            loading={this.state.isLoading}
            loadPromos={this.loadPromos}></List>
        </View>
      </DefaultLayout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default ListPromo;
