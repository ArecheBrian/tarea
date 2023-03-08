import { configureStore } from "@reduxjs/toolkit";
import PeopleApi from "../Features/peopleApiSlice"
import EdadPeopleApi from "../Features/edadPeopleSlice"


export const Store = configureStore({
    reducer:{
        PeopleApi,
        EdadPeopleApi
    }
})