import { configureStore } from '@reduxjs/toolkit'
import InformationSlice from './informationSlice'
import CountriesAndStates from './countries&statesSlice'

export const store = configureStore({
  reducer: {
    informations : InformationSlice,
    countriesAndStates : CountriesAndStates
  },
})