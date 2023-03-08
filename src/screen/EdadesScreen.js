import { Box, Heading, Input, IconButton, HStack } from "native-base"
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";


export const EdadesScreen =()=> {
    return (
        <Box flex={1} bg={"blue.700"} p={5}>
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
        </Box>
    )
}