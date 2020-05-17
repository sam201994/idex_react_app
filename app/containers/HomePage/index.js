/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { connect } from 'react-redux';
import messages from './messages';

const Header = styled.div`
  background-color: #ffffff;
  height: 100px;
`;

const FormBox = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  height: 500px;
  width: auto;
  max-width: 500px;
  margin: 20px;
  border: 1px solid #f2f2f2;
`;

const ProfileBox = styled.div`
  background-color: #ffe6e6;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
const ProfileBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 20px;
`;

const ProfileDetilsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 5px;
`;

const ProfileDetilsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeadingText = styled.div`
  color: #d3d3d3;
  font-size: 10px;
  font-weight: bold;
`;
const ContentText = styled.div`
  color: #262626;
  font-size: 10px;
  font-weight: bold;
`;

const BreakLine = styled.div`
  background-color: #f2f2f2;
  height: 1px;
  margin-left: 10px;
  margin-right: 10px;
`;

const BlueTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlueText = styled.div`
  color: #0066ff;
  font-size: 10px;
  font-weight: bold;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editProfile: false,
    };
  }

  renderText = field => (
    <ProfileDetilsRow>
      <FieldBox>
        <BlueTextContainer>
          <BlueText>
            <FormattedMessage {...messages[field]} />
          </BlueText>
        </BlueTextContainer>
      </FieldBox>
    </ProfileDetilsRow>
  );

  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <Header />
        <FormBox>
          <ProfileBoxRow>
            <ProfileBox />
          </ProfileBoxRow>
          <ProfileDetilsRow>
            <div>
              <ProfileDetilsBox>
                <HeadingText>
                  <FormattedMessage {...messages.fullName} />
                </HeadingText>
                <ContentText>{userInfo.fullName}</ContentText>
              </ProfileDetilsBox>
              <ProfileDetilsBox>
                <HeadingText>
                  <FormattedMessage {...messages.email} />
                </HeadingText>
                <ContentText>{userInfo.email}</ContentText>
              </ProfileDetilsBox>
            </div>
          </ProfileDetilsRow>
          <BreakLine />

          {this.renderText('changePassword')}
          <BreakLine />

          {this.renderText('selectAppLanguage')}
        </FormBox>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { homePage } = state;
  return {
    userInfo: homePage.user.userAccountInfo,
  };
}

export default connect(mapStateToProps)(HomePage);
