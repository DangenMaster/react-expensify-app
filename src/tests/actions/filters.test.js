import moment from "moment";
import { setTextFilter, sortByFilter, setStartDateFilter, setEndDateFilter } from "./../../actions/filters";

test('should generate setText action object', () => {
  const text = 'Qwerty';
  const action = setTextFilter({ text });
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    payload: { text }
  });
});

test('should generate sortBy action object', () => {
  const sortBy = 'date';
  const action = sortByFilter({ sortBy });
  expect(action).toEqual({
    type: 'SORT_BY',
    payload: { sortBy }
  });
});

test('should generate setStartDate action onject', () => {
  const action = setStartDateFilter({ startDate: moment(0) });
  expect(action).toEqual({
    type: 'START_DATE',
    payload: {
      startDate: moment(0)
    }
  });
});

test('should generate setEndDate action onject', () => {
  const action = setEndDateFilter({ endDate: moment(0) });
  expect(action).toEqual({
    type: 'END_DATE',
    payload: {
      endDate: moment(0)
    }
  });
});