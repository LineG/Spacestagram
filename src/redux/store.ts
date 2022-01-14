import { imagesReducer } from "./reducer";
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

