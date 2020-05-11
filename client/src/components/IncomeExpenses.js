import React,{ useContext } from 'react';
import { GlobalContext } from "./../context/GlobalState";

const IncomeExpenses = () => {
    
    //Get Transactions
    const context = useContext(GlobalContext);
    const {transactions} = context;
    
    //Calculate Total Amount
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
                    .filter(item => item > 0)
                    .reduce((acc,item) => (acc+=item),0)
                    .toFixed(2);
    const expense = amounts
                    .filter(item => item < 0)
                    .reduce((acc,item) => (acc+=item),0)*-1
                    .toFixed(2);

    return (
        <div className="row mb-4">
            <div className="col-5 py-3 border rounded-lg shadow">
                <h4 className="text-success">Income</h4>
                <p className="h4">&#8377;{income}</p>
            </div>
            <div className="col-5 ml-2 py-3 border rounded-lg shadow">
                <h4 className="text-danger">Expense</h4>
                <p className="h4">&#8377;{expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
