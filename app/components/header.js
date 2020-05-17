import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { MdNotificationsNone } from 'react-icons/Md';

import { BlackText, GreyText } from './textTypes';
import ProfileBox from './profileBox';

const HeaderRow = styled.div`
  background-color: #ffffff;
  height: 100px;
  display: flex;
  flex-direction: row;
`;

const OuterBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  margin-left: ${props => `${props.marginLeft}px`};
  margin-right: ${props => `${props.marginRight}px`};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-right 5px;
  min-width: ${props => `${props.minWidth}px`};
`;

class Header extends Component {
  render() {
    const { userInfo, header } = this.props;
    return (
      <HeaderRow>
        <OuterBox marginLeft={20}> 
          <Box>
            <BlackText size={14}>{header}</BlackText>
          </Box>
        </OuterBox>
        <OuterBox justifyContent="flex-end" marginRight={20}>
          <Box>
            <MdNotificationsNone color="blue" />
          </Box>
          <Box minWidth={60}>
            <BlackText size={10}>{userInfo.fullName}</BlackText>
            <GreyText size={10}>{userInfo.fullName}</GreyText>
          </Box>
          <Box>
            <ProfileBox size={25} />
          </Box>
        </OuterBox>
      </HeaderRow>
    );
  }
}

function mapStateToProps(state) {
  const { homePage } = state;
  return {
    userInfo: homePage.userAccountInfo,
  };
}

export default connect(mapStateToProps)(Header);
