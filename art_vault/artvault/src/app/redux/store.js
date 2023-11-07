import { configureStore } from '@reduxjs/toolkit'
import sessionReducer from './slices/sessionSlice'

export const store = configureStore({
    reducer: {
        session: sessionReducer,
    },
})
