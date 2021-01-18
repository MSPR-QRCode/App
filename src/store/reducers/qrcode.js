//import action type
import {ADD_QRCODE} from '../actionsType/qrcode';

const initialState = {QRCodeScanned: []};

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
    default:
      return state;
  }
};

export default QRCodeReducers;
