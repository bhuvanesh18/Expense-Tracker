import React,{ useContext } from 'react';
import { GlobalContext } from "./../context/GlobalState";

const Transaction = ({transaction}) => {

    //Get Transactions
    const context = useContext(GlobalContext);
    const {deleteTransaction} = context;

    const sign = transaction.amount > 0 ? '+' : '-';
    const list = "list-group-item text-break text-wrap mt-3 rounder";
    const borderClass = transaction.amount > 0 ? ' plus' : ' minus';
    const listClass = list + borderClass;
    console.log({listClass});

    return (
        <>
        <li className={listClass}>
            {transaction.text}
            <span className="float-right">{sign}&#8377;{Math.abs(transaction.amount)}</span>
        </li>
        <button style={{width:32+"px"}} className="btn btn-danger text-center mt-n5 ml-n4" onClick={ () => deleteTransaction(transaction.id)}>x</button>
        </>
    )
}

export default Transaction
