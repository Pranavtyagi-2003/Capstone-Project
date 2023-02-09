import {configureStore} from '@reduxjs/toolkit'
import { adminReducer } from './Reducer/adminReducer'
import { courseReducer } from './Reducer/courseReducer'
import { otherReducer } from './Reducer/otherReducer'
import {profileReducer, subscriptionReducer, userReducer} from './Reducer/userReducer'

const store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course:courseReducer,
        subscription:subscriptionReducer,
        admin:adminReducer,
        other:otherReducer,
    }
})

export default store

export const server = "http://localhost:4000/api/v1"