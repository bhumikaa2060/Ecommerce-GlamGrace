import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Added missing import

const initialState = {
  isLoading: false,
  productList: [],
};

export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async ({filterParams, sortParams}) => {
    console.log(fetchAllFilteredProducts, "fetchAllFilteredProducts")

    const query = new URLSearchParams({
      ...filterParams,
      sortBy: sortParams,
    });

    try {
      const result = await axios.get(`http://localhost:5000/api/shop/products/get?${query}`);
      return result?.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
    console.log(result);
    
  }
);

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        console.log(action.payload, "action.payload");
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        console.error("Fetch products failed:", action.error);
        state.isLoading = false;
        state.productList = [];
      });
  },
});

export default shoppingProductSlice.reducer;

// const { createSlice } = require("@reduxjs/toolkit");

// import { createAsyncThunk } from "@reduxjs/toolkit";





// const initialState ={
//     isLoading : false,
//     productList :  []
// }

// export const fetchAllFilteredProducts = createAsyncThunk(
//     "/products/fetchAllProducts",
//     async () => {
//       const result = await axios.get(
//         "http://localhost:5000/api/shop/products/get"
//       );
  
//       return result?.data;
//     }
//   );

//  const shoppingProductSlice = createSlice({
//     name: 'shoppingProducts',
//     initialState ,
//     reducers: {},
//     extraReducers: (builder)=>{

//         builder.addCase(fetchAllFilteredProducts.pending,(state,action)=>{
//             state.isLoading= true
//         })
//         .addCase(fetchAllFilteredProducts.fulfilled,(state,action)=>{
//             console.log(action.payload);
//             state.isLoading= false
//             state.productList= action.payload
//         })
//         .addCase(fetchAllFilteredProducts.rejected,(state,action)=>{
//             console.log(action.payload);
//             state.isLoading= false
//             state.productList= []
//         })
       





//     }

//  }

//  )


//  export default shoppingProductSlice.reducer








// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios"; // Added missing import

// const initialState = {
//   isLoading: false,
//   productList: [],
// };

// export const fetchAllFilteredProducts = createAsyncThunk(
//   "/products/fetchAllProducts",
//   async () => {
//     try {
//       const result = await axios.get("http://localhost:5000/api/shop/products/get");
//       return result?.data;
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       throw error;
//     }
//   }
// );

// const shoppingProductSlice = createSlice({
//   name: "shoppingProducts",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllFilteredProducts.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
//         console.log(action.payload, "action.payload");
//         state.isLoading = false;
//         state.productList = action.payload.data;
//       })
//       .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
//         console.error("Fetch products failed:", action.error);
//         state.isLoading = false;
//         state.productList = [];
//       });
//   },
// });

// export default shoppingProductSlice.reducer;


