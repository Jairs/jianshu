import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterItem,
  WriterItemInfo
} from '../style';

class Writer extends Component {
  render () {
    const { list } = this.props; 
    return (
      <WriterWrapper>
        {
          list.map((item) => (
            <WriterItem key={item.get('id')}>
              <img
                className='pic'
                src={item.get('imgUrl')}
                alt='' 
              />
              <WriterItemInfo>
                <h3>{item.get('name')}</h3>
                <p>{item.get('desc')}</p>
              </WriterItemInfo>
              <span className='attention'>
                <i className='iconfont'>&#xe603;</i>
                关注
              </span>
            </WriterItem>
          ))
        }
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'writerList'])
});

export default connect(mapStateToProps,null)(Writer);