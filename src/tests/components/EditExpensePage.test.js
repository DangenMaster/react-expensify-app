import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { EditExpensePage } from "../../components/EditExpensePage";

test('Should render EditExpensePage correctly', () => {
  const wrapper = shallow(<EditExpensePage />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
  const onSubmitSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<EditExpensePage expense={expenses[0]} onSubmit={onSubmitSpy} history={history} />);
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove expense', () => {
  const onClickSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<EditExpensePage expense={expenses[0]} onClick={onClickSpy} history={history} />);
  wrapper.find('button').simulate('click', { preventDefault: () => {} });
  expect(onClickSpy).toHaveBeenLastCalledWith(expenses[0].id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
