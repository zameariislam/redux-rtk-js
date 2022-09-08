
const createSlice = require('@reduxjs/toolkit').createSlice

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
    }



})

module.exports = dynamicCounterSlice.reducer
module.exports.dynamicCounterActions = dynamicCounterSlice.actions
console.log(dynamicCounterSlice.actions)




