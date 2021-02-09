import * as actionType from "./actionType";
import axios from "../../axios";

export const vendorTypeSetData = (vendorType) => {
    return {
      type: actionType.VENDOR_TYPE_SET_DATA,
      vendorType: vendorType,
    };
  };
  
  export const vendorTypeFailData = () => {
    return {
      type: actionType.VENDOR_TYPE_FAIL_DATA,
    };
  };

export const vendorTypeGetData = () => {
    return (dispatch) => {
        axios
          .get("vendortypes")
          .then((res) => {
            console.log(res.data, "vendor type res");
            dispatch(vendorTypeSetData(res.data));
          })
    
          .catch((error) => dispatch(vendorTypeFailData()));
      };
}