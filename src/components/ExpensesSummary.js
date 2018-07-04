import React from 'react';
import ExpensesTotalSelector from '../selectors/expenses-total';
import ExpensesFilterSelector from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(props.expensesTotal / 100).format('0,0.00')
    return (
        <div>
            <p>{expenseWord} Count: {props.expensesCount}</p>
            <p>{expenseWord} : ${formattedExpensesTotal} </p>
        </div>
    )
}


const mapStateToProps = (state) => {
    const visibleExpenses = ExpensesFilterSelector(state.expenses, state.filters);
    return {
      expensesCount: visibleExpenses.length,
      expensesTotal: ExpensesTotalSelector(visibleExpenses)
    };
  };
  
  export default connect(mapStateToProps)(ExpensesSummary);