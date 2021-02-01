//import API
import API from './api';

const numberOfQrCode = 10;

/**
 *
 * @param {*} idCode
 * @return {*} data
 */
export const getQRCode = async (idCode) => {
  const response = await API.get(`/qrcode?idQrCode=${idCode}`);
  return response.data;
};

/**
 *
 * @param {number} numberOfQrCode
 * @param {number} firstId
 * @returns {*} data
 */
export const getPromos = async (firstId) => {
  const response = await API.post('/les-promotions', {
    numberOfQrCode,
    firstId,
  });

  return response.data;
};

/**
 *
 * @param {number} myQRCodes
 * @returns {*} data
 */
export const getMyQRCodes = async (MyIdQRCodes) => {
  const response = await API.post('/mes-qrcodes', {
    MyIdQRCodes,
  });

  return response.data;
};
