//import React
import React from 'react';
import {Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//import test
import {render, waitFor, act} from '@testing-library/react-native';
import {expect} from 'chai';

//import reddux
import {Provider} from 'react-redux';
import Store from '../src/store';

//Page
//Import Navigation
import Navigation from '../src/navigations';

jest.spyOn(Alert, 'alert');

const component = (
  <Provider store={Store}>
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <Navigation />
    </SafeAreaProvider>
  </Provider>
);

describe('Scanner', () => {
  it('test scan', async () => {
    const fakeQRCode = {
      type: 'QR_CODE',
      data: '{"idQRCode": "MSPR_XLAVFqitdN"}',
    };

    const {getByTestId} = render(component);
    await getByTestId(
      'defaultLayout',
    ).children[1].props.onBarCodeRead(fakeQRCode);
    await waitFor(() => getByTestId('detailPromo'));
  });
  it('error scan', async () => {
    const fakeQRCode = {
      type: 'QR_CODE',
      data: '{"idQRCode": "XLAVFqitdN"}',
    };

    const {getByTestId} = render(component);
    const test = await act(async () => {
      await getByTestId(
        'defaultLayout',
      ).children[1].props.onBarCodeRead(fakeQRCode);
    });

    const alert = Alert.alert.mock.calls[0][0];
    expect(alert).to.equals('QRCode inconnu');
  });
});
