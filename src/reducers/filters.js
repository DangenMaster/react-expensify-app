import moment from "moment";

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.payload.text
      };
    case 'SORT_BY':
      return {
        ...state,
        sortBy: action.payload.sortBy
      };
    case 'START_DATE':
      return {
        ...state,
        startDate: action.payload.startDate
      };
    case 'END_DATE':
      return {
        ...state,
        endDate: action.payload.endDate
      };
    default:
      return state;
  }
};

export default filtersReducer;