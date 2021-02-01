//import action type
import {ADD_QRCODE, REMOVE_QRCODE} from '../actionsType/qrcode';

const initialState = {
  QRCodeScanned: [
    'MSPR_pNEWFymvHZ',
    'MSPR_8Wtva0VRQY',
    'MSPR_MhPlFTD70S',
    'MSPR_unknown',
  ],
};

const QRCodeReducers = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case ADD_QRCODE:
      const QRCodeIndex = state.QRCodeScanned.findIndex(
        (item) => item === action.value,
      );
      //Si l'index n'est pas trouvé
      if (QRCodeIndex === -1) {
        nextState = {
          ...state,
          QRCodeScanned: [...state.QRCodeScanned, action.value],
        };
      }
      return nextState || state;
    case REMOVE_QRCODE:
      const unknownQRCode = action.value;

      let listRemoveQRCode = [];

      unknownQRCode.forEach((unknown) => {
        const QRCodeIndex = state.QRCodeScanned.findIndex(
          (item) => item === unknown,
        );
        if (QRCodeIndex !== -1) {
          listRemoveQRCode.push(unknown);
        }
      });
      nexState = {
        ...state,
        QRCodeScanned: state.QRCodeScanned.filter(
          (item) => !listRemoveQRCode.includes(item),
        ),
      };

      return nexState || state;

    default:
      return state;
  }
};

export default QRCodeReducers;
