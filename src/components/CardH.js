import { Box, Heading, Input, IconButton, HStack } from "native-base"
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";

export const GenderCard = ()=> {
    const [name, setName]= useState("")
    return (
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
    )
}

export const EdadCard = ()=> {
    return (
        <Box h={24} bg={"blueGray.50"} borderRadius={20} p={4}>
            <Heading size={"sm"}>Coloca la Edad</Heading>
            <HStack space={3}><Input variant="underlined" placeholder="Underlined" w={"85%"} /> 
                <IconButton backgroundColor={"blue.700"} variant={"solid"} borderRadius={"full"}
                    _icon={{
                        as: FontAwesome,
                        name: "search"
                    }} 
                />
            </HStack>
        </Box>
    )
}

export const UniCard = ()=> {
    return (
        <Box h={24} bg={"blueGray.50"} borderRadius={20} p={4}>
            <Heading size={"sm"}>Coloca el pais</Heading>
            <HStack space={3}><Input variant="underlined" placeholder="Underlined" w={"85%"} /> 
                <IconButton backgroundColor={"green.500"} variant={"solid"} borderRadius={"full"}
                    _icon={{
                        as: FontAwesome,
                        name: "search"
                    }} 
                />
            </HStack>
        </Box>
    )
}

