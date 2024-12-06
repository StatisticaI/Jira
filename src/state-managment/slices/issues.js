import { collection, getDocs } from "firebase/firestore"
import { FIRESTORE_PATH_NAMES } from "../../core/utilis/constants"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../services/firebase";

const initialState = {
    data: [],
    isLoading: false,
    error: false
};

export const fetchIssueData = createAsyncThunk(
    'data/fetchIssueData',
    async () => {
        const queryData = await getDocs(collection(db, FIRESTORE_PATH_NAMES.ISSUES));
        return queryData.docs.map((doc) => doc.data());
    }
)

const issueSlice = createSlice({
    name: 'issueSlice',
    initialState,
    reducers: {},
    extraReducers: (promise) => {
        promise
        .addCase(fetchIssueData.pending, state => {
            state.isLoading = true;
        })
        .addCase(fetchIssueData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchIssueData.rejected, (state, action) => {
            state.isLoading = false;
            state.data = [];
            state.error = action.payload;
        })
    }
})

export default issueSlice.reducer;