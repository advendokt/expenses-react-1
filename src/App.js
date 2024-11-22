import './App.css';
import ExpensesItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
    {
      date: new Date(2024, 10 ,12),
      title:'New book',
      price: 30.99
    },
    {
      date: new Date(2024, 10, 13),
      title: 'Car insurance',
      price: 294.67
    }
  
  ]
  

  return (
    <div className="App">
      <ExpensesItem data={expenses[0]}/>
      <ExpensesItem data={expenses[1]}/>
    </div>
  );
}

export default App;
