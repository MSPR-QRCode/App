//Import React
import React from 'react';
import {View, StyleSheet, Alert, TextInput} from 'react-native';

//import components
import DefaultLayout from '../components/layouts/DefaultLayout';
import List from '../components/List/List';

//Import Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

//import Style
import stylePage from '../styles/stylePage';

//import service
import {getPromos} from '../services/qrcode';

//import redux
import {connect} from 'react-redux';

class ListPromo extends React.Component {
  
  firstId = 0;
  nbOfQrCode = 1;
  search = ""; 

  constructor(props) {
    super(props);
    this.state = {
      promos: [],
      isLoading: false,
      refreshing: false,
    };
  }

  async componentDidMount() {
    this.props.navigation.addListener('focus', async () => {
      this.search = "";
      
      await this.resetListPromo();
    });
  }

  loadPromos = async () => {
    try {
      if (!this.state.isLoading && this.firstId < this.nbOfQrCode) {
        this.setState({isLoading: true});
        this.firstId = this.state.promos.length;

        console.log(this.firstId);

        const data = await getPromos(this.firstId, this.search, this.props.QRCodeScanned);
        this.nbOfQrCode = data.NbOfQrCode;
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

  async resetListPromo() {
    this.firstId = 0;
      this.nbOfQrCode = 1;
      await this.setState(
        {
          promos: [],
        },
        async () => {
          await this.loadPromos();
        },
      );
  }

  async searchPromo(searchText) {
    this.search = searchText; 
    await this.resetListPromo();
  }

  render() {
    return (
      <DefaultLayout titleHeader={'Promotions'}>
        <View style={{...styles.container, ...stylePage.container_page}}>
          <View style={styles.containerSearchBar}>
            <Icon name="search" style={styles.iconSearch} size={25} />
            <TextInput style={styles.searchBar} value={this.search}  onChangeText={value => this.searchPromo(value)} />
          </View>
          <List
            promos={this.state.promos}
            loading={this.state.isLoading}
            loadPromos={this.loadPromos}
            navigate={this.props.navigation.navigate}></List>
        </View>
      </DefaultLayout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSearchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: 25,
    paddingVertical: 10,
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  searchBar: {
    height: 45,
    flex: 1,
    zIndex: 10,  
    borderWidth: 0, 
  },
  iconSearch: {
    elevation: 2,
  },
});

const mapStateToProps = (state) => {
  return {
    QRCodeScanned: state.QRCodeReducers.QRCodeScanned,
  };
};
export default connect(mapStateToProps)(ListPromo);

