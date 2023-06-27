const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState={
    loading:false,
    users:[],
    error:''
}

/* `createAsyncThunk` is a function provided by the `@reduxjs/toolkit` library that allows you to
create an asynchronous action creator. In this case, `fetchUsers` is an asynchronous action creator
that will fetch data from the `https://jsonplaceholder.typicode.com/users` API endpoint and return
an array of user IDs. The first argument to `createAsyncThunk` is a string that will be used as the
action type, and the second argument is a function that returns a promise. */

const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => response.data.map(user => user.name))
      
  });
  

const userSlice = createSlice({
    name:'user',
    initialState:initialState,

    extraReducers: builder=>{
        builder.addCase(fetchUsers.pending,state =>{
            state.loading= true;
        })

        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
            state.error=''
        })

        builder.addCase(fetchUsers.rejected,(state,action)=>{
            
            state.loading= false;
            state.users=[];
            state.error=action.error.message
        })
    },

})


module.exports =userSlice.reducer
module.exports.fetchUsers= fetchUsers
