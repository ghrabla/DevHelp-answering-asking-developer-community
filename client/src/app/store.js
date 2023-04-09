import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../services/authUser/authSlice'
import questionReducer from '../services/question/questionSlice'


export const store = configureStore({
  reducer: {
    authclient: authReducer,
    question: questionReducer
  },
})
