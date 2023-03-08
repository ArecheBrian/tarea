import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box, Heading, Input, IconButton, HStack } from "native-base"
import { FontAwesome } from '@expo/vector-icons';
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
        <Box flex={1} bg={"fuchsia.800"} p={5}>
            <Box h={24} bg={"blueGray.50"} borderRadius={20} p={4}>
            <Heading size={"sm"}>Coloca el Nombre</Heading>
            <HStack space={3}><Input onChangeText={value => setName(value)} variant="underlined" placeholder="Underlined" w={"85%"} /> 
                <IconButton backgroundColor={"fuchsia.900"} variant={"solid"} borderRadius={"full"}
                    _icon={{
                        as: FontAwesome,
                        name: "search"
                    }} 
                />
            </HStack>
        </Box>
        </Box>
    )
}