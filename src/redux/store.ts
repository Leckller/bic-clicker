import { configureStore } from '@reduxjs/toolkit'
import clickSlice from './slices/clickSlice'
import popupSlice from './slices/popupSlice'

export const store = configureStore({
  reducer: {
    clicks: clickSlice,
    popup: popupSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch