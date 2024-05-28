import { configureStore } from '@reduxjs/toolkit'
import clickSlice from './slices/clickSlice'

export const store = configureStore({
  reducer: {
    clicks: clickSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch