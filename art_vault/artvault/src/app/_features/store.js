import { configureStore } from '@reduxjs/toolkit'
import sessionReducer from './gallery/gallerySlice'

export const store = configureStore({
    reducer: {
        session: sessionReducer,
    },
})
