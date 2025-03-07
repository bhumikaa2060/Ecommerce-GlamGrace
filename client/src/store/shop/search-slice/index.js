

// import { createSlice } from "@reduxjs/toolkit"


// const initialState={
//     isLoading :false,
//     searchResults: []
// }


// export const getSearchResults = createAsyncThunk(
//     "/order/getSearchResults",
//     async (keyword) => {
//       const response = await axios.get(
//         `http://localhost:5000/api/shop/search/${keyword}`
//       );
  
//       return response.data;
//     }

// );

// const searchSlice = createSlice({
//     name: 'searchSlice',
//     initialState,
//     reducers : {},
//     extraReducers : (builder)=>{
//         builder.addcase(getSearchResults .pending, (state)=>{
//             state.isLoading = true
//         })
//         .addCase(getSearchResults.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.searchResults = action.payload.data;
//           })
//           .addCase(getSearchResults.rejected, (state) => {
//             state.isLoading = false;
//             state.searchResults = [];
//           });
//     }
// })



// export const { resetSearchResults } = searchSlice.actions;

// export default searchSlice.reducer;








import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'; // Added missing axios import

const initialState={
    isLoading :false,
    searchResults: []
}

export const getSearchResults = createAsyncThunk(
    "/order/getSearchResults",
    async (keyword) => {
      const response = await axios.get(
        `http://localhost:5000/api/shop/search/${keyword}`
      );
  
      return response.data;
    }
);

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(getSearchResults.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getSearchResults.fulfilled, (state, action) => {
            state.isLoading = false;
            state.searchResults = action.payload.data;
        })
        .addCase(getSearchResults.rejected, (state) => {
            state.isLoading = false;
            state.searchResults = [];
        });
    }
})

export const { resetSearchResults } = searchSlice.actions;

export default searchSlice.reducer;