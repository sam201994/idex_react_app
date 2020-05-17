/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Help from 'containers/Help/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import styled from 'styled-components';
import Header from 'components/header';
import Footer from 'components/footer';

import SideBar from 'components/sideBar';
import { ToggleButtonContainer, ToggleButton } from 'components/sidebarButton';

import GlobalStyle from '../../global-styles';

const Page = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBarVisible: false,
    };
  }

  toggleSideBar = () => {
    const { isSideBarVisible } = this.state;
    this.setState({
      isSideBarVisible: !isSideBarVisible,
    });
  };

  render() {
    const { isSideBarVisible } = this.state;
    return (
      <Page>
        {isSideBarVisible ? <SideBar /> : null}
        <ToggleButtonContainer>
          <ToggleButton onClick={this.toggleSideBar}>•</ToggleButton>
        </ToggleButtonContainer>
        <GlobalStyle />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Container>
                <Header header="Profile" />
                <HomePage />
                        <Footer />

              </Container>
            )}
          />
          <Route
            exact
            path="/profile"
            render={() => (
              <Container>
                <Header header="Profile" />
                <HomePage />
                        <Footer />

              </Container>
            )}
          />
          <Route
            exact
            path="/help"
            render={() => (
              <Container>
                <Header header="Help" />
                <Help />
                        <Footer />

              </Container>
            )}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Page>
    );
  }
}
export default App;
