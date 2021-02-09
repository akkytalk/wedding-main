import * as actionType from "../actions/actionType";

const initialState = {
  vendorType: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.VENDOR_TYPE_SET_DATA:
      return {
        ...state,
        vendorType: action.vendorType,
        error: false,
      };

    case actionType.VENDOR_TYPE_FAIL_DATA:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
