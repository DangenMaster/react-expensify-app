export const setTextFilter = (payload = {}) => ({
  type: 'SET_TEXT_FILTER',
  payload
});

export const sortByFilter = (payload = {}) => ({
  type: 'SORT_BY',
  payload
});

export const setStartDateFilter = (payload = {}) => ({
  type: 'START_DATE',
  payload
});

export const setEndDateFilter = (payload = {}) => ({
  type: 'END_DATE',
  payload
});