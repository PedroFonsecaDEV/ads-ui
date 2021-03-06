import {
  CREATE_CREATIVES_FAILED,
  CREATE_CREATIVES_START,
  CREATE_CREATIVES_SUCCESSFUL,
  GET_CREATIVES_FAILED,
  GET_CREATIVES_START,
  GET_CREATIVES_SUCCESSFUL,
  ICreativeAction,
  SIGN_OUT,
  UPDATE_CREATIVES_FAILED,
  UPDATE_CREATIVES_START,
  UPDATE_CREATIVES_SUCCESSFUL,
} from "../../actions";

import { createCreativeReducer } from "./creative.create";
import { getCreativeReducer } from "./creative.get";
import { ICreativeState } from "./creative.interface";
import { updateCreativeReducer } from "./creative.update";

const creativeReducer = (
  state: ICreativeState = {
    creatives: [],
  },
  action: ICreativeAction,
) => {
  switch (action.type) {
    case GET_CREATIVES_START:
    case GET_CREATIVES_SUCCESSFUL:
    case GET_CREATIVES_FAILED:
      return getCreativeReducer(state, action);
    case CREATE_CREATIVES_FAILED:
    case CREATE_CREATIVES_START:
    case CREATE_CREATIVES_SUCCESSFUL:
      return createCreativeReducer(state, action);
    case UPDATE_CREATIVES_FAILED:
    case UPDATE_CREATIVES_START:
    case UPDATE_CREATIVES_SUCCESSFUL:
      return updateCreativeReducer(state, action);
    case SIGN_OUT:
      return {
        creatives: [],
      };
    default:
      return state;
  }
};

export default creativeReducer;
