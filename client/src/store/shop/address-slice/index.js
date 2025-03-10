// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import axios from 'axios'


// const initialState = {
//     isLoading : false,
//     addressList :[]
// }


// export const addNewAddress = createAsyncThunk('/address/addNewAddress', async(formData)=>{

//     const response = await axios.post('http://localhost:5000/api/shop/address/add', formData)

//     return response.data;
// })




// const addressSlice = createSlice({
//     name: 'address',
//     initialState,
//     reducers : (builder)=>{


//     }
// })






// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   isLoading: false,
//   addressList: [],
// };

// export const addNewAddress = createAsyncThunk(
//   "/addresses/addNewAddress",
//   async (formData) => {
//     const response = await axios.post(
//       "http://localhost:5000/api/shop/address/add",
//       formData
//     );

//     return response.data;
//   }
// );

// export const fetchAllAddresses = createAsyncThunk(
//   "/addresses/fetchAllAddresses",
//   async (userId) => {
//     const response = await axios.get(
//       `http://localhost:5000/api/shop/address/get/${userId}`
//     );

//     return response.data;
//   }
// );

// export const editaAddress = createAsyncThunk(
//   "/addresses/editaAddress",
//   async ({ userId, addressId, formData }) => {
//     const response = await axios.put(
//       `http://localhost:5000/api/shop/address/update/${userId}/${addressId}`,
//       formData
//     );

//     return response.data;
//   }
// );

// export const deleteAddress = createAsyncThunk(
//   "/addresses/deleteAddress",
//   async ({ userId, addressId }) => {
//     const response = await axios.delete(
//       `http://localhost:5000/api/shop/address/delete/${userId}/${addressId}`
//     );

//     return response.data;
//   }
// );

// const addressSlice = createSlice({
//   name: "address",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addNewAddress.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addNewAddress.fulfilled, (state, action) => {
//         state.isLoading = false;
//       })
//       .addCase(addNewAddress.rejected, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(fetchAllAddresses.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchAllAddresses.fulfilled, (state, action) => {
//         state.isLoading = false;
        
//       })
//       .addCase(fetchAllAddresses.rejected, (state) => {
//         state.isLoading = false;
        
//       });
//   },
// });

// export default addressSlice.reducer;









// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   isLoading: false,
//   addressList: [],
// };

// export const addNewAddress = createAsyncThunk(
//   "/addresses/addNewAddress",
//   async (formData) => {
//     const response = await axios.post(
//       "http://localhost:5000/api/shop/address/add",
//       formData
//     );
    
//     return response.data;
//   }
// );

// export const fetchAllAddresses = createAsyncThunk(
//   "/addresses/fetchAllAddresses",
//   async (userId) => {
//     const response = await axios.get(
//       `http://localhost:5000/api/shop/address/get/${userId}`
//     );
    
//     return response.data;
//   }
// );

// export const editAddress = createAsyncThunk(
//   "/addresses/editAddress",
//   async ({ userId, addressId, formData }) => {
//     const response = await axios.put(
//       `http://localhost:5000/api/shop/address/update/${userId}/${addressId}`,
//       formData
//     );
    
//     return response.data;
//   }
// );

// export const deleteAddress = createAsyncThunk(
//   "/addresses/deleteAddress",
//   async ({ userId, addressId }) => {
//     const response = await axios.delete(
//       `http://localhost:5000/api/shop/address/delete/${userId}/${addressId}`
//     );
    
//     return response.data;
//   }
// );

// const addressSlice = createSlice({
//   name: "address",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(addNewAddress.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addNewAddress.fulfilled, (state, action) => {
//         state.isLoading = false;
//       })
//       .addCase(addNewAddress.rejected, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(fetchAllAddresses.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchAllAddresses.fulfilled, (state, action) => {
//         state.isLoading = false;
//         // Fix: Update the addressList with the fetched addresses
//         state.addressList = action.payload?.addresses || [];
//       })
//       .addCase(fetchAllAddresses.rejected, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(editAddress.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(editAddress.fulfilled, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(editAddress.rejected, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(deleteAddress.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteAddress.fulfilled, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(deleteAddress.rejected, (state) => {
//         state.isLoading = false;
//       });
//   },
// });

// export default addressSlice.reducer;












import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  addressList: [],
};

export const addNewAddress = createAsyncThunk(
  "/addresses/addNewAddress",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/shop/address/add",
        formData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding address:", error.response?.data || error.message);
      throw error; // Re-throw to be handled by extraReducers
    }
  }
);

export const fetchAllAddresses = createAsyncThunk(
  "/addresses/fetchAllAddresses",
  async (userId) => {
    const response = await axios.get(
      `http://localhost:5000/api/shop/address/get/${userId}`
    );
    return response.data;
  }
);

export const editAddress = createAsyncThunk(
  "/addresses/editAddress",
  async ({ userId, addressId, formData }) => {
    const response = await axios.put(
      `http://localhost:5000/api/shop/address/update/${userId}/${addressId}`,
      formData
    );
    return response.data;
  }
);

export const deleteAddress = createAsyncThunk(
  "/addresses/deleteAddress",
  async ({ userId, addressId }) => {
    const response = await axios.delete(
      `http://localhost:5000/api/shop/address/delete/${userId}/${addressId}`
    );
    return response.data;
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewAddress.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addNewAddress.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchAllAddresses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        // Fix: Update the addressList with the fetched addresses
        state.addressList = action.payload?.addresses || [];
      })
      .addCase(fetchAllAddresses.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(editAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editAddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(editAddress.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAddress.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteAddress.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default addressSlice.reducer;