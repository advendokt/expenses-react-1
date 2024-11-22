import './App.css';
import Expenses from './components/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2024, 10 ,12),
      title:'New book',
      price: 30.99
    },
    {
      id: 'e2',
      date: new Date(2024, 10, 13),
      title: 'Car insurance',
      price: 294.67
    }
  ];

  return (
    <div className="App">
      <Expenses data={expenses} />
    </div>
  );
}

export default App;