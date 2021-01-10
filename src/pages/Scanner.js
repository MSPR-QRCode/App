//import React
import React from 'react';
import {Alert, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

//import components
import DefaultLayout from '../components/layouts/DefaultLayout';
import MaskScanner from '../components/layouts/MaskScanner';

//import service
import {getQRCode} from '../services/qrcode';

export class Scanner extends React.Component {
  ifScan = true;

  constructor(props) {
    super(props);
  }

  /**
   * Scanner QR code
   * @param {*} QRcode
   */
  scannerQRCode = async (QRcode) => {
    if (QRcode.type === 'QR_CODE' && this.ifScan) {
      this.ifScan = false;
      try {
        const code = JSON.parse(QRcode.data);
        if (code.idQrCode) {
          const promo = await getQRCode(code.idQrCode);

          console.log(promo);

          Alert.alert(
            'Scanned Data',
            promo.codePromo,
            [
              {
                text: 'Okay',
                onPress: () => {
                  
                },
                style: 'cancel',
              },
            ],
            {cancelable: false},
          );
          
        }
        this.ifScan = true;
      } catch (error) {
        console.log('error', error);
        this.ifScan = true;
      }
      
    }
  };

  render() {
    return (
      <DefaultLayout titleHeader={'Scanner'}>
        <RNCamera style={styles.camera} onBarCodeRead={this.scannerQRCode}>
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

export default Scanner;
