const redux = require('redux');
const createStore = redux.createStore;



//TYPES
const CAKE_ORDER='CAKE_ORDER';
const CAKE_RESTOCKED='CAKE_RESTOCKED';

// One store for the entire application
// Responsibilities -
// ➤Allows access to state via getState()



function orderCake(){
return{
    type:CAKE_ORDER,
    payload:1
}
} 

function restockCake(qty=1){
    return{
        type: CAKE_RESTOCKED,
        payload:qty
    }
}

const initialState={
numOfCakes:10,
cash:0
}
// ➤Allows state to be updated via dispatch(action)

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDER:
            return {
                ...state,
                numOfCakes: state.numOfCakes- action.payload,
                cash: state.cash + 500
                }


        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes+ action.payload


            }        
                default :
                return state
            }


}

// ➤Holds application state
const store = createStore(cakeReducer);
console.log('Intial state',store.getState());
// >Registers listeners via subscribe(listener)
const unsubscribe=store.subscribe(()=>console.log('update state',store.getState()))


// ➤Handles unregistering of listeners via the function returned by subscribe(listener)
// h
//listener
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(restockCake(5)) //there is qty of restocked of cakes
unsubscribe()