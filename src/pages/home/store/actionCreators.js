import axios from 'axios';
import * as constants from './constants';

const changeHomeInfo = (result) => ({
  type: constants.CHANGE_HOME_INFO,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writerList: result.writerList
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeInfo(result));
    })
  }
};