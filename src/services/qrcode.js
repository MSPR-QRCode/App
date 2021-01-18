//import API
import API from './api'; 

/**
 * 
 * @param {*} idCode 
 * @return {*} data
 */
export const getQRCode = async (idCode) => {
    const response = await API.get(`/qrcode?idQrCode=${idCode}`); 
    return response.data;
}

