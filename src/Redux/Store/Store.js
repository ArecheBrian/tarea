import { configureStore } from "@reduxjs/toolkit";
import PeopleApi from "../Features/peopleApiSlice"
import EdadPeopleApi from "../Features/edadPeopleSlice"
import UniApi from "../Features/universidadesSlice"


export const Store = configureStore({
    reducer:{
        PeopleApi,
        EdadPeopleApi,
        UniApi
    }
})