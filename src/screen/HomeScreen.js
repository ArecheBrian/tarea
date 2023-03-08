import { Box, Button, Center, Image, VStack } from "native-base"
import { Imagenes } from "../assets/img"
import { Tabs } from "../components/Tabs"

export const HomeScreen = () => {
    return (
        <Box flex={1} bg={"blueGray.900"}>
            <Center flex={2}>
                <Image source={Imagenes.cajaDeHerramienta} width={"70%"} height={"70%"} alt="booxImg"/>
            </Center>
            <Box flex={4} bg={"blueGray.50"} borderTopRadius={35}>
                <VStack space={4} p={5} mt={10}>
                    <Tabs Title={"Genero"} Imagen={Imagenes.generoFondo} Page={"Genero"}/>
                    <Tabs Title={"Edades"} Imagen={Imagenes.edadesFondo} Page={"Edades"}/>
                    <Tabs Title={"Universidad"} Imagen={Imagenes.uniFondo} Page={"Universidades"}/>
                    <Tabs Title={"Clima"} Imagen={Imagenes.climaFondo} Page={"Clima"}/>
                </VStack>
            </Box>
        </Box>
    )
}