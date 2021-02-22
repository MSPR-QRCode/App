//import React
import React from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';

//import components
import DefaultLayout from '../components/layouts/DefaultLayout';
import List from '../components/List/List';

//import Style
import stylePage from '../styles/stylePage';

//import redux and actions
import {connect} from 'react-redux';
import { removeQRCode } from '../store/actions/qrcode';

//import service
import {getMyQRCodes} from '../services/qrcode';

/**
 * COMPONENT
 * @category Pages
 */
class ListPromoUser extends React.Component {
  firstId = 0;

  /**
   * set State (promosUser and isLoading)
   * @param {*} props 
   */
  constructor(props) {
    super(props);

    this.state = {
      promosUser: [],
      isLoading: false,
    };
  }

   /**
   * LifeCycle : react 
   * If the page is focus : reset List
   */
  async componentDidMount() {
      this.props.navigation.addListener('focus', async() => {
        await this.loadQRCodes();
      });
  }

  /**
   * load qrCode scanned. 
   * Is called again when the user is at the end of the FlatList.
   */
  loadQRCodes = async () => {
    const QRCodeScanned = [...this.props.QRCodeScanned]; 
    QRCodeScanned.reverse();

    try {
      if (!this.state.isLoading) {
        this.setState({isLoading: true});
        const data = await getMyQRCodes(QRCodeScanned);
        this.setState({
          promosUser: data.MyQrCodes,
          isLoading: false,
        });

        if(data.Unknown_idQrCode.length > 0) {
          this.props.removeQRCode(data.Unknown_idQrCode);
        }

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
      this.setState({isLoading: false});
    }
  };

  /**
   * 
   */
  render() {
    return (
      <DefaultLayout titleHeader={'Mes codes'}>
        <View style={{...stylePage.container_page, ...styles.container}}>
          <List
            promos={this.state.promosUser}
            loading={this.state.isLoading}
            navigate={this.props.navigation.navigate}></List>
        </View>
      </DefaultLayout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    QRCodeScanned: state.QRCodeReducers.QRCodeScanned,
  };
};

const mapDispatchToProps = (dispach) => {
  return {
    removeQRCode : (value) => dispach(removeQRCode(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPromoUser);
