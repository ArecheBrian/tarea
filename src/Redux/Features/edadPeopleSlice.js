import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchEdadPeople = createAsyncThunk(
    "People/edad",
   async ()=> {
        try{
            const response = await axios.get("https://api.agify.io/?name=meelad")
            if(response.status === 200) return response.data
        } catch(err){
            console.log(err.message)
        }
    }
)

const initialState = {
    peopleData: null, status: 'idle' // 'pending' // 'failed' // 'success'
}

const EdadPeopleApi = createSlice({
    name: "PeopleApi",
    initialState,
    extraReducers(builder){
        builder.addCase(fetchEdadPeople.fulfilled, (state, action)=> {
            state.peopleData = action.payload;
            state.status = 'success'
        }).addCase(fetchEdadPeople.pending, (state, action)=>{
            state.status = 'pending'
        }).addCase(fetchEdadPeople.rejected, (state, action)=>{
            state.status = 'failed'
        })
    }
})

export default EdadPeopleApi.reducer