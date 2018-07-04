import selectExpensesTotal from '../../selectors/expenses-total.js';
import moment from 'moment';
import expenses from '../fixtures/expenses'


//add all expenses
test('should add up all expenses amounts', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toEqual(114195);
  });

//add a single expense
  test('should add up a single expense amounts', () => {
    const total = selectExpensesTotal([expenses[0]]);
    expect(total).toEqual(195);
  });

//add 0 expenses  
  test('should add up no expense amount', () => {
    const total = selectExpensesTotal([]);
    expect(total).toEqual(0);
  });
