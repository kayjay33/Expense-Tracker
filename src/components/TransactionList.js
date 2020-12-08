import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext); // this basically pulls in our dummy data to the component using the global context in GlobalState file
    // above also uses destructuring of the transactions context

    useEffect(() => {
      getTransactions();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <>
        <h3>History</h3>
        {/* logic for our transaction list */}
        <ul className="list"> 
        {/* needs to know which transaction to render so we pass it in as props */}
        {/* then it needs to have a unique key */}
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} /> ))} 
        </ul>
        </>
    )
}
