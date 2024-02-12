import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import juiceService from "./juiceService";

const juiceSlice = createSlice({
  name: "juice",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    alljuice: [],
    singleJuice: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJuice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJuice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.alljuice = action.payload;
      })
      .addCase(fetchJuice.rejected, (state) => {
        state.isError = true;
      })
      .addCase(fetchSingleJuice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleJuice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleJuice = action.payload;
      })
      .addCase(fetchSingleJuice.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default juiceSlice.reducer;

export const fetchJuice = createAsyncThunk("FETCH/JUICE", async () => {
  try {
    return await juiceService.getjuice();
  } catch (error) {
    console.log(error);
  }
});

export const fetchSingleJuice = createAsyncThunk("SINGLE/JUICE", async (id) => {
  try {
    return await juiceService.getsinglejuice(id);
  } catch (error) {
    console.log(error);
  }
});
