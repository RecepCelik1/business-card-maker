    import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
        firstName : "",
        lastName : "",
        companyName : "",
        jobTitle : "",
        emailAdress : "",
        webSite : "",
        address : "",
        city : "",
        postalCode : "",
        country : { value: 'United States', label: 'United States'},
        state : "",
        logo : null,
    }


  export const InformationSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: { 

      adressContentFunc: (state, action) => {
        state[action.payload.field] = action.payload.content
      },

      uploadIconReducer : (state , action) => {
        state.logo = action.payload
      },

    },
  })
  
  // Action creators are generated for each case reducer function
  export const { adressContentFunc , uploadIconReducer } = InformationSlice.actions
  
  export default InformationSlice.reducer