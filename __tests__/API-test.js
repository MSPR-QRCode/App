//import test
import {expect} from 'chai';

//import service
import {getQRCode} from '../src/services/qrcode';

it('test getQRCode', async () => {
  const QRCode = await getQRCode('MSPR_XLAVFqitdN');
  expect(QRCode).to.have.property('name').to.equals('Test 1');
});
