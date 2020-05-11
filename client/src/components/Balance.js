import React,{ useContext } from 'react';
import { GlobalContext } from "./../context/GlobalState";

const Balance = () => {

    //Get Transactions
    const context = useContext(GlobalContext);
    const {transactions} = context;
    console.log({transactions});
    
    //Calculate Total Amount
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => (acc+=item),0).toFixed(2);

    return (
        <React.Fragment>
            <h4 className="text-primary">My Balance</h4>
            <h1>&#8377;{total}</h1>
        </React.Fragment>
    )
}

export default Balance
