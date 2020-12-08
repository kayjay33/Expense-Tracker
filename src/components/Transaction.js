import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext); // our delete logic

    const sign = transaction.amount < 0 ? '-' : '+'; // to change the color depending on debit or credit

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}> 
          {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span><button // pass in the above logic in the return statement
          onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button> 
        </li>
        // what we return for the delete transaction in the DOM ^
    )
}
