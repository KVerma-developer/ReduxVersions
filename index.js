const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators= redux.bindActionCreators


//actionTypes
const CAKE_ORDER='CAKE_ORDER';
const CAKE_RESTOCKED='CAKE_RESTOCKED';
const ICECREAM_ORDER ='ICECREAM_ORDER';
const ICECREAM_RESTOCKED='ICECREAM_RESTOCKED';

// One store for the entire application
// Responsibilities -
// ➤Allows access to state via getState()


//action creator

/**
 * The above code defines functions for ordering and restocking cakes and ice cream.
 * @returns Four different action objects are being returned by the functions: `orderCake()`,
 * `orderIcecream()`, `restockCake()`, and `restockIcecream()`. Each action object has a `type`
 * property that specifies the type of action being performed, and a `payload` property that provides
 * additional data for the action.
 */


function orderCake(qty=1){
return{
    type:CAKE_ORDER,
    payload:qty
}
} 
function orderIcecream(qty=1){
    return{
    type:ICECREAM_ORDER,
    payload:qty
}
};
function restockCake(qty=1){
    return{
        type: CAKE_RESTOCKED,
        payload:qty
    }
}

function restockIcecream(qty=1){
    return{
        type: ICECREAM_RESTOCKED,
        payload:qty
        };
}

const initialState={
numOfCakes:10,
numOfIcecream:20,
cash:0
}


// ➤Allows state to be updated via dispatch(action)

const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDER:
            return {
            
                ...state,
                numOfCakes: state.numOfCakes- action.payload,
                cash: state.cash + 500 * action.payload
                }


        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes+ action.payload


            }   
            
        case ICECREAM_ORDER:
            return{

                ...state,
                numOfIcecream:state.numOfIcecream - action.payload,
                cash: state.cash + 200 *action.payload

            }
        case ICECREAM_RESTOCKED:
            return{

                ...state,
                numOfIcecream:state.numOfIcecream + action.payload
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
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(5)) //there is qty of restocked of cakes

const actions = bindActionCreators({orderCake,restockCake,orderIcecream,restockIcecream},store.dispatch)
actions.orderCake(2);
actions.orderCake();
actions.restockCake(3);
actions.orderIcecream(2);
actions.restockIcecream(2);
unsubscribe()