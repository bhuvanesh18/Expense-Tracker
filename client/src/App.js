import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <Header/>
              <Balance />
              <IncomeExpenses />
              <AddTransaction />
          </div>
          <div className="col-md-6">
              <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
