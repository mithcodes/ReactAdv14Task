import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const uniqueYears = Array.from(new Set(props.items.map((expense) => expense.date.getFullYear())));
  const [selectedYear, setSelectedYear] = useState(null);

  const yearChangeHandler = (event) => {
    const selectedYear = event.target.value === '' ? null : parseInt(event.target.value, 10);
    setSelectedYear(selectedYear);
    props.onFilter(selectedYear);
  };

  const filteredExpenses = selectedYear
    ? props.items.filter((expense) => expense.date.getFullYear() === selectedYear)
    : props.items;

  return (
    <div>
      <div>
        <label>Select Year:</label>
        <select value={selectedYear === null ? '' : selectedYear} onChange={yearChangeHandler}>
          <option value="">All Years</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
