import {ADD_QRCODE, REMOVE_QRCODE} from "../actionsType/qrcode";

/**
 * action add a qrcode
 * @category store - qrcodes
 * @method
 * @param {string} value id QRCode
 * @return {objet}
 */
export const addQRCode = (value) => {
    return {
        type: ADD_QRCODE, 
        value, 
    }
}

/**
 * action remove a qrcode
 * @category store - qrcodes
 * @method
 * @param {string} value id QRCode
 * @return {objet}
 */
export const removeQRCode = (value) => {
    return {
        type: REMOVE_QRCODE, 
        value
    }
}