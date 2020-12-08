import React, { useContext } from 'react' // these are basically like the math import and others that we use in Python
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format'

export const Balance = () => { // this is where the logic lives
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    // this is what we're ultimately returning. Basically like the return in Python
    return (
        <>
          <h4>Your Balance</h4>
          <h1>${numberWithCommas(total)}</h1>
        </>
    )
}



