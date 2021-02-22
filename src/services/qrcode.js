//import API
import API from './api';

const numberOfQrCode = 10;

/**
 * Get one Promo for API
 * @category service
 * @categoy date
 * @method
 * @param {*} idCode
 * @return {*} data
 */
export const getQRCode = async (idCode) => {
  const response = await API.get(`/qrcode?idQrCode=${idCode}`);
  return response.data;
};

/**
 * Get Promo for API (pagination infinite scroll)
 * @category service
 * @subcategory qrcodes
 * @method
 * @param {number} numberOfQrCode
 * @param {number} firstId
 * @returns {*} data
 */
export const getPromos = async (firstId, searchName, MyIdQRCodes) => {
  const response = await API.post('/promotions', {
    numberOfQrCode,
    firstId,
    searchName, 
    MyIdQRCodes
  });

  return response.data;
};

/**
 * Get QRCode's users for API
 * @category service
 * @subcategory qrcodes
 * @method
 * @param {number} myQRCodes
 * @returns {*} data
 */
export const getMyQRCodes = async (MyIdQRCodes) => {
  const response = await API.post('/my-qrcodes', {
    MyIdQRCodes,
  });

  return response.data;
};
