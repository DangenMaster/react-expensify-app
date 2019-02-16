import moment from "moment";
import filtersReducer from "./../../reducers/filters";

const defaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(defaultState);
});

test('should set text filter', () => {
  const text = 'amount';
  const state = filtersReducer(defaultState, {
    type: 'SET_TEXT_FILTER',
    payload: { text }
  });
  expect(state).toEqual({ ...defaultState, text });
});

test('should set sortBy date/amount', () => {
  const sortBy = 'amount';
  const state = filtersReducer(defaultState, { 
    type: 'SORT_BY',
    payload: { sortBy }
  });
  expect(state).toEqual({ ...defaultState, sortBy });
});

test('should set startDate filter', () => {
  const startDate = moment(0);
  const state = filtersReducer(defaultState, {
    type: 'START_DATE',
    payload: { startDate }
  });
  expect(state).toEqual({ ...defaultState, startDate });
});

test('should set endDate filter', () => {
  const endDate = moment(0);
  const state = filtersReducer(defaultState, {
    type: 'END_DATE',
    payload: { endDate }
  });
  expect(state).toEqual({ ...defaultState, endDate });
});
