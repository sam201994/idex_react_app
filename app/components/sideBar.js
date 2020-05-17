import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import AppLogo from 'images/app_logo.png';
import messages from 'utils/messages';
import { WhiteText } from './textTypes';

const SideBarContainer = styled.div`
  background-color: #404040;
  width: 30%;
  min-width: 200px
  height: 100vh;
  width: 200px;
  z-index: 5;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

const Img = styled.img`
  vertical-align: middle;
  height: 70%;
  width: 40%;
  max-width: 80px;
  max-height: 100px;
`;

const MenuRow = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30px;
  text-decoration: none;
  &:hover {
    color: #ed1212;
  }
`;

const MenuContainer = styled.div`
  margin-top: 30px;
`;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      routes: [
        {
          name: 'Profile',
          id: 'profile',
        },
        {
          name: 'Help',
          id: 'help',
        },
      ],
    };
  }

  renderRow = route => (
    <MenuRow to={`/${route.id}`} key={route.id}>
      <WhiteText size={13}>
        <FormattedMessage {...messages[route.id]} />
      </WhiteText>
    </MenuRow>
  );

  render() {
    const { routes } = this.state;
    return (
      <SideBarContainer>
        <LogoContainer>
          <Img src={AppLogo} alt="avatar" />
        </LogoContainer>

        <MenuContainer>
          {routes.map(route => this.renderRow(route))}
        </MenuContainer>
      </SideBarContainer>
    );
  }
}

export default SideBar;
