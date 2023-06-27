const { cakeActions } = require('../cake/cakeSlice')


const createSlice = require('@reduxjs/toolkit').createSlice


const initialState={
    numOfIceCream:20
}

const iceCreamSlice=createSlice({
    name:'iceCream',
    initialState:initialState,



    reducers:{
    ordered:(state)=>{
        state.numOfIceCream--
    },
    restocked:
    (state,action)=>{
        state.numOfIceCream+=action.payload


    },
    },
    // extraReducers:{
    //     ['cake/ordered']:(state)=>{
    //         state.numOfIceCream--
    //     }
    // }
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered,state =>{
            state.numOfIceCream--

        })

    }




})

module.exports= iceCreamSlice.reducer;
module.exports.iceCreamActions =iceCreamSlice.actions;