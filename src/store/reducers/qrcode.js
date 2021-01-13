//import action type
import {ADD_QRCODE} from '../actionsType/qrcode';

const initialState = {qrCodeScanned: []};

const qrCodeReducers = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case ADD_QRCODE:
      const qrCodeIndex = state.qrCodeScanned.findIndex(
        (item) => item === action.value,
      );
      //Si l'index n'est pas trouvé
      if (qrCodeIndex === -1) {
        nextState = {
          ...state,
          qrCodeScanned: [...state.qrCodeScanned, action.value],
        };
      }
      return nextState || state;
    default:
      return state;
  }
};

export default qrCodeReducers;
