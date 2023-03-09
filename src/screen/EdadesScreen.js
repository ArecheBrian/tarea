import { Box, Heading, Input, IconButton, HStack, Image } from "native-base"
import { FontAwesome } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { Imagenes } from "../assets/img";
import { fetchEdadPeople } from "../Redux/Features/edadPeopleSlice";
import { useDispatch, useSelector } from "react-redux";

export const EdadesScreen =()=> {
    const state = useSelector((state)=> state.EdadPeopleApi)
    const [name, setName]= useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchEdadPeople())
    }, [])
    return (
        <Box flex={1} bg={"blue.700"} p={5}>
            <Box h={24} bg={"blueGray.50"} borderRadius={20} p={4}>
                <Heading size={"sm"}>Coloca la Edad</Heading>
                <Input mt={3}  onChangeText={value => setName(value)} variant="underlined" placeholder="Underlined" w={"99%"} /> 
            </Box>
            {
                state.peopleData.name === name.toLocaleLowerCase() && state.peopleData.age < 18 && <Box w={"full"} bg={"amber.400"} borderRadius={15} mt={10} alignItems={"center"} h={80}><Image source={Imagenes.nino} h={80}/></Box>
            }{
                state.peopleData.name === name.toLocaleLowerCase() && state.peopleData.age < 40 && <Box w={"full"} bg={"amber.400"} borderRadius={15} mt={10} alignItems={"center"} h={80}><Image source={Imagenes.joven} h={80}/></Box>
            }{
                state.peopleData.name === name.toLocaleLowerCase() && state.peopleData.age >= 40 && <Box w={"full"} bg={"amber.400"} borderRadius={15} mt={10} alignItems={"center"} h={80}><Image source={Imagenes.viejo} h={80}/></Box>
            }
        </Box>
    )
}