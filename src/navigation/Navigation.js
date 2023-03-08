import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClimaScreen } from "../screen/ClimaScreen";
import { EdadesScreen } from "../screen/EdadesScreen";
import { GeneroScreen } from "../screen/GeneroScreen";
import { HomeScreen } from "../screen/HomeScreen";
import { UniversidadesScreen } from "../screen/UniversidadesScreen";

const MyStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Genero" component={GeneroScreen}/>
            <Stack.Screen name="Edades" component={EdadesScreen}/>
            <Stack.Screen name="Universidades" component={UniversidadesScreen}/>
            <Stack.Screen name="Clima" component={ClimaScreen}/>
        </Stack.Navigator>
    )
}

export const MyApp = () => {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}