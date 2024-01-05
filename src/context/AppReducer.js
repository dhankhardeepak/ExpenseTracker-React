// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter((id) => id.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[...state.transactions, action.payload]
            }    
        default:
            return state;
    }
}