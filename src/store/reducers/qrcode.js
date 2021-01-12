const initialState = {qrCodeScanned: []};

const qrCodeReducers = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case 'ADD_QR_CODE_SCANNED':
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
