import { Box, Heading, Image, ZStack, Button, Link } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export const Tabs = ({Title, Imagen, Page}) => {
  const navigation = useNavigation();
    return (
      <Box h={16}>
        <ZStack alignItems="center" justifyContent="center">
        <Box bg="indigo.700" h={16} rounded="lg">
          <Image source={Imagen} height={"full"} resizeMode={"cover"} alt={"fondo1"} rounded="lg" />
        </Box>
        <Box h={16} w={"full"} rounded="lg" flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} px={2}>
          <Heading size={"md"} color={"blueGray.50"}>{Title}</Heading>
          <Link w={"full"} h={"full"} rounded="lg" onPress={()=> navigation.navigate(Page)}></Link>
        </Box>             
      </ZStack>
      </Box>
    )
}