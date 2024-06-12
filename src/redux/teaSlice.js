import { createSlice } from '@reduxjs/toolkit'

export const teaSlice = createSlice({
  name: 'teas',
  initialState: {
    selectedCategory: "GREEN"
  },
  reducers: {
    filerCategory: (state, action) => {
        state.selectedCategory = action.payload;
    }
  }
})

export const getSelectedCategory = state => state.teas.selectedCategory;
export const { filterCategory } = teaSlice.actions;
export default teaSlice.reducer;