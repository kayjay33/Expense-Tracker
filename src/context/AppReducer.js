// the bare minimum we need for our reducer
// Again - a reducer is just a way to change the state and send it down to your components or application
export default (state, action) => {
    switch(action.type) { // this switched is based on the type which is basically like an id
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
        return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
        }
        case 'ADD_TRANSACTION': // can use the reducer to send things down and also send things up in this case - sending up new transaction to AddTransaction.js
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload 
            }
        default:
            return state; // when it's default, we simply want to return our state as is
    }
}