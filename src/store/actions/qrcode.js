import {ADD_QRCODE} from "../actionsType/qrcode";

export const addQRCode = (value) => {
    return {
        type: ADD_QRCODE, 
        value, 
    }
}