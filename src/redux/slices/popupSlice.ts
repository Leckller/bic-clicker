import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define o tipo do objeto inicial do slice
interface PopupState {
  loja: boolean,
  status: boolean
}

// Define o valor inicial do slice
const initialState: PopupState = {
  loja: false,
  status: false
}

export const popupSlice = createSlice({
  // Cria um nome para o slice, passa o valor inicial, e passa os reducers (actions)
  name: 'popup',
  initialState,
  reducers: {
    status: (state) => {
      state.status = !state.status
    },
    loja: (state) => {
      state.loja = !state.loja
    },
  },
})

// desestrutura e exporta as actions
export const { loja, status } = popupSlice.actions

// Cria selector para o slice click
export const selectActualPopups = (state: RootState) => state.popup;

export default popupSlice.reducer;