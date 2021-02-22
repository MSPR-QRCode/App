//import React
import React from 'react';
import {Alert, View, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

//import components
import DefaultLayout from '../components/layouts/DefaultLayout';
import MaskScanner from '../components/layouts/MaskScanner';
import Loading from '../components/layouts/Loading';

//import service
import {getQRCode} from '../services/qrcode';

//import redux and actions
import {connect} from 'react-redux';
import {addQRCode} from '../store/actions/qrcode';

/**
 * COMPONENT
 * @category Pages
 */
export class Scanner extends React.Component {
  ifScan = true;

  state = {
    loading: false,
  };

  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
  }

  /**
   * Scanner QR code
   * @param {*} QRcode
   */
  scannerQRCode = async (QRCode) => {
    if (QRCode.type === 'QR_CODE' && this.ifScan) {
      this.ifScan = false;
      try {
        const code = JSON.parse(QRCode.data);
        if (code.idQRCode) {
          if (!code.idQRCode.startsWith('MSPR_')) throw 'Not good idQRCode';
          this.changeLoading(true);
          const promo = await getQRCode(code.idQRCode);
          this.props.addQRCode(promo.idQRCode);
          this.props.navigation.navigate('Detail', promo);
          this.changeLoading(false);
          this.setScanTrue();
        } else {
          throw 'QRCode is not a good JSON';
        }
      } catch (error) {
        console.log('error scan', error);
        this.changeLoading(false);
        Alert.alert(
          'QRCode inconnu',
          'Avez vous bien scanner un QRCode MSPR ?',
          [
            {
              text: 'Ok',
              onPress: () => {
                this.setScanTrue();
              },
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      }
    }
  };

  /**
   * Set ifScan = true after 1250ms
   */
  setScanTrue = () => {
    setTimeout(() => {
      this.ifScan = true;
    }, 1250);
  };

  /**
   * change loading
   * @param {boolean} loading 
   */
  changeLoading = (loading) => {
    this.setState({loading: loading});
  };
  
  /**
   * display component loading
   */
  _displayLoading = () => {
    if (this.state.loading) {
      return <Loading msg={'Veuillez patientez nous scannons votre QRCode'} />;
    }
  };

  render() {
    console.log('QRCODESCANNED', this.props.QRCodeScanned);
    return (
      <DefaultLayout titleHeader={'Scanner'}>
        <RNCamera
          testID="camera"
          style={styles.camera}
          onBarCodeRead={this.scannerQRCode}>
          {this._displayLoading()}
          <MaskScanner />
        </RNCamera>
      </DefaultLayout>
    );
  }
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    QRCodeScanned: state.QRCodeReducers.QRCodeScanned,
  };
};
const mapDispatchToProps = (dispach) => {
  return {
    addQRCode: (value) => dispach(addQRCode(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);
