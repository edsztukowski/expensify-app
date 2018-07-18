import uuid from 'uuid';
import database from '../firebase/firebase';

// BEFORE FIREBASE
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes


// AFTER FIREBASE
// components call action Generator
// action generator returns function
// component dispatches function (?) -> need module
// function runs (has ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({id} = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense( {id} ));
    })
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses
})

// START_SET_EXPENSES
//fetch all expense data
//parse data into an array (check firebase js file)
//dispatch set_expenses
export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      let expenses = [];
      snapshot.forEach((currentExpense) => {
          expenses.push({
              id: currentExpense.key,
              ...currentExpense.val()            
          })
      })
      dispatch(setExpenses(expenses));
    });
  }
}
