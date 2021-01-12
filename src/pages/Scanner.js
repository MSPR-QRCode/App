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
        console.log(QRcode.data); 
        const code = JSON.parse(QRcode.data);
        if (code.idQrCode) {
          if (!code.idQrCode.startsWith('MSPR_')) throw 'Not good idQrCode';

          const promo = await getQRCode(code.idQrCode);

          Alert.alert(
            'Scanned Data',
            promo.codePromo,
            [
              {
                text: 'Okay',
                onPress: () => {
                  this.ifScan = true;
                },
                style: 'cancel',
              },
            ],
            {cancelable: false},
          );
        } else {
          throw 'QRCode is not a JSON';
        }
      } catch (error) {
        console.log(error);
        Alert.alert(
          "QRCOde inconnu",
          "Avez vous bien scanner un QRCode MSPR ?",
          [
            {
              text: 'Ok',
              onPress: () => {
                this.ifScan = true;
              },
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
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
