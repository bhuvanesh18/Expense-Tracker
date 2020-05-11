import React,{ useContext } from 'react';
import { GlobalContext } from "./../context/GlobalState";
import Transaction from './Transaction';

const TransactionList = () => {

    //Get Transactions
    const context = useContext(GlobalContext);
    const {transactions} = context;

    return (
        <React.Fragment>
            <div className="overflow-scroll">
                <div className="ml-5 col-10">
                    <h3 className="text-center text-light">History</h3>
                    <ul className="list-group">
                        { transactions.map(transaction => 
                            <Transaction key={transaction.id} transaction={transaction}/> 
                        ) }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TransactionList
