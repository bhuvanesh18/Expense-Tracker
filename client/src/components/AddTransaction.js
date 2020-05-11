import React,{ useState, useContext } from 'react';
import { GlobalContext } from "./../context/GlobalState";

const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    //Get Transactions
    const context = useContext(GlobalContext);
    const {addTransaction} = context;

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <React.Fragment>
             <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} className="mb-5">
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="text"><span className="h5">Text</span></label>
                        <input type="text" id="text" className="form-control" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." required />
                    </div>
                </div>
                <div className="form-row">
                        <label htmlFor="amount" className="col-md-12 mb-3">
                            <span className="h5">Amount</span>
                            <span className="text-danger">  (negative - expense, positive - income)</span>
                        </label>
                        <input type="number" id="amount" className="col-md-3 mb-3 ml-1 form-control" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." required/>
                </div>
                <button className="btn btn-primary">Add transaction</button>
            </form>
        </React.Fragment>
    )
}

export default AddTransaction
