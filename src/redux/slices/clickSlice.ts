import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define o tipo do objeto inicial do slice
interface ClickState {
  money: number
}

// Define o valor inicial do slice
const initialState: ClickState = {
  money: 0
}

export const clickSlice = createSlice({
  // Cria um nome para o slice, passa o valor inicial, e passa os reducers (actions)
  name: 'click',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.money += 1 * action.payload
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.money -= action.payload
    },
  },
})

// desestrutura e exporta as actions
export const { increment, decrement } = clickSlice.actions

// Cria selector para o slice click
export const selectActualMoney = (state: RootState) => state.clicks.money

export default clickSlice.reducer