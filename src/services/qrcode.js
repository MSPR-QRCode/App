//import API
import API from './api';

const numberOfQrCode = 10;

/**
 * Get one Promo for API
 * @param {*} idCode
 * @return {*} data
 */
export const getQRCode = async (idCode) => {
  const response = await API.get(`/qrcode?idQrCode=${idCode}`);
  return response.data;
};

/**
 * Get Promo for API (pagination infinite scroll)
 * @param {number} numberOfQrCode
 * @param {number} firstId
 * @returns {*} data
 */
export const getPromos = async (firstId, search, MyIdQRCodes) => {
  const response = await API.post('/les-promotions', {
    numberOfQrCode,
    firstId,
    search, 
    MyIdQRCodes
  });

  return response.data;
};

/**
 * Get QRCode's users for API
 * @param {number} myQRCodes
 * @returns {*} data
 */
export const getMyQRCodes = async (MyIdQRCodes) => {
  const response = await API.post('/mes-qrcodes', {
    MyIdQRCodes,
  });

  return response.data;
};
