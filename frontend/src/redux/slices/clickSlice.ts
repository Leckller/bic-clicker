import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { ClickState } from '../../types/Bic'

// Define o valor inicial do slice
const initialState: ClickState = {
  money: 0,
  bonus: false,
  clickBase: 1,
  multiplicador: 1,
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
    toggleBonus: (state) => {
      state.bonus = !state.bonus
      if(state.bonus) {
        state.multiplicador *= 10;
        return;
      }  state.multiplicador /= 10;
    },
    upgrade: (state, action: PayloadAction<{type: "multiplicador" | "click", value: number}>) => {
      if(action.payload.type == "multiplicador") {
        state.multiplicador += action.payload.value
        return;
      }
      state.clickBase += action.payload.value
    }
  },
})

// desestrutura e exporta as actions
export const { increment, decrement, toggleBonus, upgrade } = clickSlice.actions

// Cria selector para o slice click
export const selectActualMoney = (state: RootState) => state.clicks.money

export default clickSlice.reducer