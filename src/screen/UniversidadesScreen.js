import { Box, Heading, Input, IconButton, HStack, ScrollView, VStack, Spinner } from "native-base"
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUniversidad } from "../Redux/Features/universidadesSlice";
import { UniversidadCard } from "../components/CardH";

export const UniversidadesScreen =()=> {
    const state = useSelector((state)=> state.UniApi)
    const [country, setCountry] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUniversidad())
    },[])
    console.log(state.uniData)
    return (
        <Box flex={1} bg={"green.500"} p={5}>
            <Box h={24} bg={"blueGray.50"} borderRadius={20} p={4}>
                <Heading size={"sm"}>Coloca el pais</Heading>
                <Input onChangeText={value => setCountry(value)} mt={3} variant="underlined" placeholder="Underlined" w={"99%"} /> 
            </Box>
            {
                state.status === "success" && 
                <ScrollView mt={5}>
                    <VStack space={5}>
                    {
                        state.uniData.map((item)=> <UniversidadCard name={item.name} link={item.web_pages[0]}/>)
                    }
                    </VStack>
                </ScrollView>
            }{
                state.status === "pending" && <HStack space={2} justifyContent="center" mt={100}>
                <Spinner accessibilityLabel="Loading posts" size={"lg"} color={"white"}/>
                <Heading color="white" size={"xl"}>
                  Loading
                </Heading>
              </HStack>
            }
        </Box>
    )
}