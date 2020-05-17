export const ActionTypes = {
  CHANGE_LANGUAGE: 'containers/HomePage/CHANGE_LANGUAGE',
};

const changeLanguage = language => ({
  type: ActionTypes.CHANGE_LANGUAGE,
  payload: {
    language,
  },
});

export default {
  changeLanguage,
};
