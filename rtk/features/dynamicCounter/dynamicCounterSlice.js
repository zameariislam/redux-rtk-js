
const createSlice = require('@reduxjs/toolkit').createSlice

const { counterActions } = require('../counter/counterSlice')

// initial State 

const initialState = {
    count: 0
}

const dynamicCounterSlice = createSlice({
    name: 'dynamicCounter',
    initialState,
    reducers: {
        increment: (state, action) => {

            state.count += action.payload
        },
        decrement: (state, action) => {

            state.count -= action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(counterActions.increment, (state, action) => {
             state.count += 1
        })
    }

    // {
    //     ['counter/increment']:(state,action)=>{
    //         state.count+=1


    //     }

    // }



})

module.exports = dynamicCounterSlice.reducer
module.exports.dynamicCounterActions = dynamicCounterSlice.actions
console.log(dynamicCounterSlice.actions)




