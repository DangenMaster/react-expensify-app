import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { AddExpensePage } from "../../components/AddExpensePage";

test('should render AddExpensePage correctly', () => {
  const wrapper = shallow(<AddExpensePage />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit with props', () => {
  const onSubmitSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={history} />);
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});