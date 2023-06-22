const redux = require('redux');
const createStore = redux.createStore;


const STREET_UPDATED='STREET_UPDATED';

const updateStreet=(street,city)=>{
    return{
        type: STREET_UPDATED,
        payload: street,
        payload1:city

}
};

const initialState={
    name:'ashneer',
    address:{
        street:'Mall road',
        city:'Shimla',
        state:'HP'
    },
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
      case STREET_UPDATED:
        return {
          ...state,
          address: {
            ...state.address,
            street: action.payload,
            city:action.payload1
          }
        };
      default:
        return state;
    }
  };

const store = redux.createStore(reducer);
console.log('intial state', store.getState()) 
const unsubscribe=store.subscribe(()=>console.log('update state',store.getState()))

store.dispatch(updateStreet('mall ','sandila'))
/* `unsubscribe()` is a function that is returned by the `store.subscribe()` method. It is used to
unsubscribe or stop listening to changes in the store. In the given code, `unsubscribe()` is called
after dispatching an action to the store and printing the updated state. This ensures that the
console does not log any further updates to the state. */
unsubscribe()

  





