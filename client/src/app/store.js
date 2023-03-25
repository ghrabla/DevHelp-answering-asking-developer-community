import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../services/authUser/authSlice'


export const store = configureStore({
  reducer: {
    authUser: authReducer,
    
  },
})
