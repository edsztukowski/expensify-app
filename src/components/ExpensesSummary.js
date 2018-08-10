import React from 'react';
import ExpensesTotalSelector from '../selectors/expenses-total';
import ExpensesFilterSelector from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(props.expensesTotal / 100).format('0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="button__blue" to="/create">Add Expense</Link>
                </div>
            </div>
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