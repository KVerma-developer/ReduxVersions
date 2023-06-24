const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios')
const thunkMiddleware =require("redux-thunk").default;
//states

const intialState={
    loading:false,
    users:[],
    error:'',
}

///actions
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED ='FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'



const fetchUsersRequested=()=>{
    return{
        type:FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccess=(users)=>{
    return{
        type:FETCH_USERS_SUCCEEDED,
        payload:users
    }
}

const fetchUsersFailed=(error)=>{
    return {
        type:FETCH_USERS_FAILED,
        payload:error
    }
}


///reducers
const reducer =(state=intialState,action)=>{
    switch(action.type){

        case FETCH_USERS_REQUESTED:
            return{
                ...state,
                loading:true
             }
        

         case FETCH_USERS_SUCCEEDED:
            return{
                loading:false,
                users: action.payload,
                error:""

            }
        
         case FETCH_USERS_FAILED:
            return{
               ...state,
               loading: false,
                error:action.payload

            }


        default : 
            return state;
            
        
        }

}


const fetchUsers=()=>{

    return function(dispatch){
        dispatch(fetchUsersRequested())
        
        axios
       .get('https://jsonplaceholder.typicode.com/users')
       .then((response)=>{
        const users = response.data.map((user)=>(user.address.street))
        dispatch(fetchUsersSuccess(users))
       }).catch(error=>{
        
           dispatch(fetchUsersFailed(error))
       })
    }
   
}

const store =createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(fetchUsers())


    