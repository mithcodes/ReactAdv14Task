import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

  const [isEditing,setIsEDiting]=useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: new Date().toISOString() + Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  const startEditingHandler=()=>{
    setIsEDiting(true);
  }

  const stopEditingHandler=()=>{
    setIsEDiting(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler} className='AddButton'>Add Expense</button>}
     {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
