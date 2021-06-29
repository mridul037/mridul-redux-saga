
import * as types from "../types";
const initialState = { 
  watchCount:0,
  starCount:0,
  forkCount:0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_WATCH_COUNTER:  
      return {
        ...state,
        watchCount: state.watchCount+1,
      };
    case types.INCREMENT_STAR_COUNTER:
      return {
        ...state,
        starCount: state.starCount+1,
      };
      case types.INCREMENT_FORK_COUNTER:
        return {
          ...state,
         forkCount:state.forkCount+1,
        };
        default:
            return state;
  }
};

export default counterReducer;
