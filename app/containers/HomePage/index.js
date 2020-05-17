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
import messages from 'utils/messages';
import ProfileBox from 'components/profileBox';
import { BlackText, GreyText, BlueText, InputBox } from 'components/textTypes';
import { bindActionCreators } from 'redux';
import { changeLocale } from 'containers/LanguageProvider/actions';
import Actions from './actions';

const FormBox = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  width: auto;
  max-width: 500px;
  margin: 20px;
  border: 1px solid #f2f2f2;
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
  cursor: pointer;
  min-width: 80px;
`;

const EditSaveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
  min-width: 80px;
  margin-bottom: 10px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  select {
    height: 20px;
    font-size: 10px;
    margin: 10px;
  }
`;

const CheckBox = styled.div`
  margin-right: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  height: 14px;
  width: 14px;
  border: 1px solid #c2c2c2;
  background-color: ${props =>
    props.logoutOnAllDevices ? `#2CB308` : `#ffffff`};
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editProfile: false,
      name: props.userInfo.fullName,
      email: props.userInfo.email,
      logoutOnAllDevices: false,
    };
  }

  componentDidMount() {
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    this.setState({
      name: name || this.props.userInfo.fullName,
      email: email || this.props.userInfo.email,
    });
  }

  renderText = field => (
    <ProfileDetilsRow>
      <FieldBox>
        <BlueTextContainer>
          <BlueText size={10}>
            <FormattedMessage {...messages[field]} />
          </BlueText>
        </BlueTextContainer>
      </FieldBox>
    </ProfileDetilsRow>
  );

  toggleEditProfile = () => {
    const { editProfile } = this.state;
    this.setState({
      editProfile: !editProfile,
    });
  };

  onLanguageChange = e => {
    const { actions } = this.props;
    actions.onLocaleToggle(e.target.value);
  };

  renderLanguage = () => (
    <Bottom>
      {this.renderText('selectAppLanguage')}
      <Dropdown>
        <select
          id="dropdown"
          onChange={this.onLanguageChange}
          value={this.props.language}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </Dropdown>
    </Bottom>
  );

  renderProfile = userInfo => {
    const { name, email, editProfile } = this.state;
    return (
      <div>
        <ProfileDetilsBox>
          <GreyText size={10}>
            <FormattedMessage {...messages.fullName} />
          </GreyText>
          <BlackText size={10}>{userInfo.fullName}</BlackText>

          {editProfile ? (
            <InputBox size={14}>
              <input
                type="text"
                name="fullName"
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </InputBox>
          ) : null}
        </ProfileDetilsBox>
        <ProfileDetilsBox>
          <GreyText size={10}>
            <FormattedMessage {...messages.email} />
          </GreyText>
          <BlackText size={10}>{userInfo.email}</BlackText>
          {editProfile ? (
            <InputBox size={14}>
              <input
                type="text"
                name="email"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </InputBox>
          ) : null}
        </ProfileDetilsBox>
      </div>
    );
  };

  onSaveProfile = () => {
    const { name, email } = this.state;
    const { actions } = this.props;
    this.setState({
      editProfile: false,
    });
    actions.saveProfile(name, email);
  };

  renderSaveButton = () => {
    const { editProfile } = this.state;
    if (editProfile)
      return (
        <BlueText size={10} onClick={this.onSaveProfile}>
          <FormattedMessage {...messages.saveProfile} />
        </BlueText>
      );
    return (
      <GreyText size={10}>
        <FormattedMessage {...messages.saveProfile} />
      </GreyText>
    );
  };

  toggleCheckBox = () => {
    const { logoutOnAllDevices } = this.state;
    this.setState({
      logoutOnAllDevices: !logoutOnAllDevices,
    });
  };

  renderLogout = () => {
    const { logoutOnAllDevices } = this.state;
    return (
      <ProfileDetilsRow>
        <CheckBox
          logoutOnAllDevices={logoutOnAllDevices}
          onClick={this.toggleCheckBox}
        />
        <FieldBox>
          <BlueTextContainer>
            <BlackText size={10}>
              <FormattedMessage {...messages.logoutOnAllDevices} />
            </BlackText>
          </BlueTextContainer>
        </FieldBox>
      </ProfileDetilsRow>
    );
  };

  render() {
    const { userInfo } = this.props;
    const { editProfile } = this.state;
    const editProfileText = editProfile ? 'back' : 'editProfile';
    return (
      <div>
        <FormBox>
          <ProfileBoxRow>
            <ProfileBox size={100} />
          </ProfileBoxRow>
          <ProfileDetilsRow>
            {this.renderProfile(userInfo)}
            <div>
              <EditSaveContainer onClick={this.toggleEditProfile}>
                <BlueText size={10}>
                  <FormattedMessage {...messages[editProfileText]} />
                </BlueText>
              </EditSaveContainer>
              <EditSaveContainer>{this.renderSaveButton()}</EditSaveContainer>
            </div>
          </ProfileDetilsRow>
          <BreakLine />
          {this.renderText('changePassword')}
          <BreakLine />
          {this.renderLanguage()}
          <BreakLine />
          <Bottom>
            {this.renderText('logout')}
            {this.renderLogout()}
          </Bottom>
        </FormBox>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { homePage, language } = state;
  return {
    userInfo: homePage.userAccountInfo,
    language: language.locale,
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      saveProfile: Actions.saveProfile,
      onLocaleToggle: changeLocale,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
