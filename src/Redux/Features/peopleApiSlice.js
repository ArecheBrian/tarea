import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPeople = createAsyncThunk(
    "People/name",
   async ()=> {
        try{
            const response = await axios.get("https://api.genderize.io/?name=irma")
            if(response.status === 200) return response.data
        } catch(err){
            console.log(err.message)
        }
    }
)

const initialState = {
    peopleData: null, status: 'idle' // 'pending' // 'failed' // 'success'
}

const PeopleApi = createSlice({
    name: "PeopleApi",
    initialState,
    extraReducers(builder){
        builder.addCase(fetchPeople.fulfilled, (state, action)=> {
            state.peopleData = action.payload;
            state.status = 'success'
        }).addCase(fetchPeople.pending, (state, action)=>{
            state.status = 'pending'
        }).addCase(fetchPeople.rejected, (state, action)=>{
            state.status = 'failed'
        })
    }
})

export default PeopleApi.reducer