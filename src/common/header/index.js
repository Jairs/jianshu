import React from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store' 
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>区块链</SearchInfoItem>
          <SearchInfoItem>小程序</SearchInfoItem>
          <SearchInfoItem>vue</SearchInfoItem>
          <SearchInfoItem>毕业</SearchInfoItem>
          <SearchInfoItem>PHP</SearchInfoItem>
          <SearchInfoItem>故事</SearchInfoItem>
          <SearchInfoItem>flutter</SearchInfoItem>
          <SearchInfoItem>理财</SearchInfoItem>
          <SearchInfoItem>美食</SearchInfoItem>
          <SearchInfoItem>投稿</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null;
  }
}

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe69d;</i>
          {getListArea(focused)}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>
          <i className='iconfont'>&#xe615;</i>            
          写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
    // <=> focused: state.get('header').get('focused')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
