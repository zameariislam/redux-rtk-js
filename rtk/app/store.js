

const configureStore = require('@reduxjs/toolkit').configureStore
const { getDefaultMiddleware } = require('@reduxjs/toolkit')
const counterReducer = require('../features/counter/counterSlice')
const dynamicCounterReducer = require('../features/dynamicCounter/dynamicCounterSlice')
const { createLogger } = require('redux-logger')
const postReducer=require('../features/post/postSlice')



const logger = createLogger()

const store = configureStore({

    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
        post:postReducer,
       

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})

module.exports = store