import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }, {
    id: 2,
    title: '手绘',
    imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList: [{
    id: 1,
    title: '忘记牛熊，当下积极买入并长期持有！',
    desc: '最近市场很是火热，今天上证指数更是时隔8个月重新站上了3000点关口，从最低点以来的涨幅也达到了22%，可以说是已经进入了技术性牛市了。 行情好...',
    imgUrl: '//upload-images.jianshu.io/upload_images/4688154-6d26ed9841f7194f.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 2,
    title: 'Flutter 仿滴滴出行App',
    desc: '绿色出行 Flutter 仿滴滴出行App地图：采用高德地图，仅简单完成了部分功能，基础地图，地址检索，逆地理编码。界面：仿滴滴主界面，地图中心...',
    imgUrl: '//upload-images.jianshu.io/upload_images/13222938-d7aae2fd8438f09d?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 3,
    title: '最平淡的菜，感受最真实的幸福，特别适合不想做饭的人',
    desc: '现在吃饭不像以前，慢慢悠悠的做菜，然后花1-2个小时细细品味，都是在时间上需求很紧张，所以我们的吃食，也朝着快速的方向发展，今儿就教大家一个简易...',
    imgUrl: '//upload-images.jianshu.io/upload_images/13705176-23d3e422327a8271.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 4,
    title: '减肥最重要的一步，你做了吗？',
    desc: '减肥最重要的一步，你做对了吗？ 大家好，我是你们的老朋友黄教练。 上一篇文章黄教练跟大家分享了一个健身新手最常见的错误。有两万多的阅读量...',
    imgUrl: '//upload-images.jianshu.io/upload_images/14903703-748f4935340e0446.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}