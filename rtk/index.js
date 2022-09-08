const store = require('./app/store')
const { counterActions } = require('./features/counter/counterSlice')
const { dynamicCounterActions } = require('./features/dynamicCounter/dynamicCounterSlice')



// subscribe to the store 

store.subscribe(() => {
    // console.log(store.getState())
})

store.dispatch(counterActions.increment())
store.dispatch(counterActions.increment())
store.dispatch(counterActions.decrement())
store.dispatch(dynamicCounterActions.increment(3))
store.dispatch(dynamicCounterActions.increment(4))
store.dispatch(dynamicCounterActions.decrement(2))

console.log(dynamicCounterActions.increment)


