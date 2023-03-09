import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUniversidad = createAsyncThunk(
    "Uni/Webs",
   async ()=> {
        try{
            const response = await axios.get("http://universities.hipolabs.com/search?country=Dominican+Republic")
            if(response.status === 200) return response.data
        } catch(err){
            console.log(err.message)
        }
    }
)

const initialState = {
    uniData: null, status: 'idle' // 'pending' // 'failed' // 'success'
}

const UniApi = createSlice({
    name: "PeopleApi",
    initialState,
    extraReducers(builder){
        builder.addCase(fetchUniversidad.fulfilled, (state, action)=> {
            state.uniData = action.payload;
            state.status = 'success'
        }).addCase(fetchUniversidad.pending, (state, action)=>{
            state.status = 'pending'
        }).addCase(fetchUniversidad.rejected, (state, action)=>{
            state.status = 'failed'
        })
    }
})

export default UniApi.reducer