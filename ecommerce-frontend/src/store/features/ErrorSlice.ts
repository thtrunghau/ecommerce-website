import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
  error: string | null;
  loading: boolean;
}

const initialState: ErrorState = {
  error: null,
  loading: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setError } = errorSlice.actions;
export default errorSlice.reducer;
