

const store = require('./app/store')
const { counterActions } = require('./features/counter/counterSlice')
const { dynamicCounterActions } = require('./features/dynamicCounter/dynamicCounterSlice')
const { fetchPost } = require('./features/post/postSlice')



store.subscribe(() => {
    // console.log(store.getState())
})






store.dispatch(counterActions.increment())
store.dispatch(fetchPost())

