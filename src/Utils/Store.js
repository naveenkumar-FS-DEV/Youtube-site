import { configureStore } from "@reduxjs/toolkit"
import ToggleSlice from '../Utils/ToggleSlice'

const appStore = configureStore({
  reducer:{
    toggle: ToggleSlice,
  },
})

export default appStore