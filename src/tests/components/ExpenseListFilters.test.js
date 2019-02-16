import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { filters, altFilters } from "../fixtures/filters";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";

let setStartDateFilter, setEndDateFilter, setTextFilter, sortByFilter, wrapper;

beforeAll(() => {
  setStartDateFilter = jest.fn();
  setEndDateFilter = jest.fn();
  setTextFilter = jest.fn();
  sortByFilter = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setStartDateFilter={setStartDateFilter}
      setEndDateFilter={setEndDateFilter}
      setTextFilter={setTextFilter}
      sortByFilter={sortByFilter}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'Internet';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date/amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    preventDefault: () => {},
    target: { value }
  });
  expect(sortByFilter).toHaveBeenLastCalledWith(value);
});

test('should handle calendar date changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDateFilter).toHaveBeenLastCalledWith(startDate);
  expect(setEndDateFilter).toHaveBeenLastCalledWith(endDate);
});

test('should handle calendar focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});