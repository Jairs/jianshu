import * as constants from './constants'

const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {

  const newState = JSON.parse(JSON.stringify(state));

  if (action.type === constants.SEARCH_FOCUS) {
    newState.focused = true;
  }

  if (action.type === constants.SEARCH_BLUR) {
    newState.focused = false;
  }

  return newState;
  
} 