import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import advertiserReducer from "./advertiser";
import authReducer from "./auth";
import campaignListReducer from "./campaignList";
import campaignReducer from "./campaign";
import confirmationTypeReducer from "./confirmationType";
import creativeReducer from "./creative";
import creativeInstanceReducer from "./creativeinstance";
import creativeSetReducer from "./creativeset";
import creativeTypeReducer from "./creativetype";
import drawerReducer from "./drawer";
import geoCodeReducer from "./geocode";
import invoiceReducer from "./invoice";
import reportReducer from "./report";
import segmentReducer from "./segment";
import snackBarReducer from "./snackbar";
import userReducer from "./user";

export default combineReducers<any, any>({
  advertiserReducer,
  authReducer,
  campaignListReducer,
  campaignReducer,
  confirmationTypeReducer,
  creativeInstanceReducer,
  creativeReducer,
  creativeSetReducer,
  creativeTypeReducer,
  drawerReducer,
  form: formReducer,
  geoCodeReducer,
  invoiceReducer,
  reportReducer,
  segmentReducer,
  snackBarReducer,
  userReducer,
});
