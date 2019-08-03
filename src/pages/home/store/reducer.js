import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList:[],
  writerList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeInfo = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList)
  });
};

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(fromJS(action.list)),
    articlePage: action.nextPage
  });
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_INFO:
      return changeHomeInfo(state, action);
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case constants.TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.flag);
    default:
      return state;
  }
}