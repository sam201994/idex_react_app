/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
  fullName: {
    id: `${scope}.fullName`,
    defaultMessage: 'Full Name',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  changePassword: {
    id: `${scope}.changePassword`,
    defaultMessage: 'Change Password',
  },
  selectAppLanguage: {
    id: `${scope}.selectAppLanguage`,
    defaultMessage: 'Select App Language',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
  logonAllDevices: {
    id: `${scope}.logonAllDevices`,
    defaultMessage: 'Log on all devices',
  },
  editProfile: {
    id: `${scope}.editProfile`,
    defaultMessage: 'Edit Profile',
  },
});
