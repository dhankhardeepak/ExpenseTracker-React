import './App.css';
import './component/Header'
import Header from './component/Header';
import Balance from './component/Balance';
import Expenseincome from './component/Expenseincome';
import History from './component/History';
import TransactionList from './component/TransactionList';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <div className="App">
          <Header />
          <Balance />
          <Expenseincome />
          <History />
          <TransactionList />
    </div>
    </GlobalProvider>
  );
}

export default App;
