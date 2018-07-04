import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import filters from '../../reducers/filters';
import { ExpensesSummary } from '../../components/ExpensesSummary';


test('should render single expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot;
})

test('should render multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512312} />);
    expect(wrapper).toMatchSnapshot;
})