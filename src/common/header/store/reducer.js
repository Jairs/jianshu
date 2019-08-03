import * as constants from './constants'
import { fromJS } from 'immutable';

// immutable对象是不可改变的
// fromJS将js对象转化为immutable对象
// 用来使state不可改变
const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {

    if (action.type === constants.SEARCH_FOCUS) {
      // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set('focused', true);
    }

    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }

    if (action.type === constants.CHANGE_LIST) {
      return state.set('list', action.data);
    }

    return state;

}