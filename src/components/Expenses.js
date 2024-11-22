import ExpensesItem from './ExpenseItem';
import './Expenses.css';
const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.data.map((expense) => (
        <ExpensesItem key={expense.id} data={expense} />
      ))}
    </div>
  );
}

export default Expenses;