import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box, Heading, Input, IconButton, HStack } from "native-base"
import { Fontisto } from '@expo/vector-icons';
import { useState } from "react";
import { fetchPeople } from "../Redux/Features/peopleApiSlice"

export const GeneroScreen =()=> {
    const state = useSelector((state)=> state?.PeopleApi)
    const dispatch = useDispatch()
    const [name, setName]= useState("")
    useEffect(()=>{
            dispatch(fetchPeople())
    }, [])
    return (
        <Box flex={1} bg={"blueGray.50"} p={5}>
            <Box h={24} bg={"white"} shadow={2} borderRadius={20} p={4}>
                <Heading size={"sm"}>Coloca el Nombre</Heading>
                <Input mt={3} onChangeText={value => setName(value)} variant="underlined" placeholder="Underlined" w={"99%"} /> 
            </Box>
            {
                state.peopleData.name === name.toLocaleLowerCase() && state.peopleData.gender === "female" && <Box pt={10} w={"full"} bg={"secondary.300"} borderRadius={15} mt={10} alignItems={"center"}><Fontisto name="female" size={300} color="white" /></Box>
            }{
                state.peopleData.name === name.toLocaleLowerCase() && state.peopleData.gender === "male" && <Box pt={10} w={"full"} bg={"blue.400"} borderRadius={15} mt={10} alignItems={"center"}><Fontisto name="male" size={300} color="white" /></Box>
            }
        </Box>
    )
}