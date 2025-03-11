import ReduxValues from "../ReduxValues";

export const isLoading = (flag = false) => {
  return {
    type: ReduxValues.GlobalActions.SET_IS_LOADING,
    isLoading: flag,
  };
};
export const isSnackBarOpen = ({ isOpen = false, msg, customIcon }) => {
  return {
    type: ReduxValues.GlobalActions.SET_SNACKBAR,
    isOpen,
    msg,
    customIcon,
  };
};
