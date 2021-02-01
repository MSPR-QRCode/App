import {ADD_QRCODE, REMOVE_QRCODE} from "../actionsType/qrcode";

export const addQRCode = (value) => {
    return {
        type: ADD_QRCODE, 
        value, 
    }
}

export const removeQRCode = (value) => {
    return {
        type: REMOVE_QRCODE, 
        value
    }
}