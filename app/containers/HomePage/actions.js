export const ActionTypes = {
  CHANGE_LANGUAGE: 'containers/HomePage/CHANGE_LANGUAGE',
  SAVE_PROFILE: 'containers/HomePage/SAVE_PROFILE',
};

const changeLanguage = language => ({
  type: ActionTypes.CHANGE_LANGUAGE,
  payload: {
    language,
  },
});

const saveProfile = (name, email) => ({
  type: ActionTypes.SAVE_PROFILE,
  payload: {
    name,
    email,
  },
});

export default {
  changeLanguage,
  saveProfile,
};
