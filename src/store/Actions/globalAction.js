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
export const setFilterSettings = ({
  categories = null,
  lowerPriceRange = 0,
  upperPriceRange = 1000,
  ratings = null,
  sortBy = null,
} = {}) => {
  return {
    type: ReduxValues.GlobalActions.SET_FILTER_SETTINGS,
    categories,
    lowerPriceRange,
    upperPriceRange,
    ratings,
    sortBy,
  };
};
