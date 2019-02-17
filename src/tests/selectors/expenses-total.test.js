import expensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test('should return 0 if no expenses', () => {
  const res = expensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const res = expensesTotal([expenses[0]]);
  expect(res).toBe(1.95);
});

test('should correctly add up a multiple expenses', () => {
  const res = expensesTotal(expenses);
  expect(res).toBe(1141.95);
});