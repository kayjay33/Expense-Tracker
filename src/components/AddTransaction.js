import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    // Need to create a piece of state (text) then the function to manipulate that state (setText)
    // Then set that to useState and add in what you want for a default argument ('')
    // Then do the same for the amount
    // Then we connect up to our input by using the value element and an onChange so that it updates to what we want
    // Then you can check inside the components section of devTools to make sure that when you type
    // something into the inputs that it's working
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext); // from the reducer 

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        text,
        amount: +amount // this turns the amount into a number (was previously a string)
      }

      addTransaction(newTransaction); // listed as new transaction in the logic
    }

    return (
        <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} // plugs in our state and what we want to check for (onchange)
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}
