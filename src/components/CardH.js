import { Box, Heading, Input, IconButton, HStack, VStack } from "native-base"
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";

export const GenderCard = ()=> {
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

export const UniversidadCard = ({name, link}) => {
    return (
        <VStack h="32" w={"full"} bg={"white"} shadow={5} borderRadius={15} p={5} space={9}>
            <HStack w={"full"} justifyContent={"space-between"}>
                <Heading size={"sm"}>{name}</Heading>
            </HStack>
            <HStack w={"full"} justifyContent={"space-between"}>
                <Heading size={"sm"}>Link: </Heading>
                <Heading size={"sm"} color={"blue.600"}>{link}</Heading>
            </HStack>
        </VStack>
    )
}