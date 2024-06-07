import BuscarUniversidades from "./pesquisa";
import FavouritedUniversities from "./favoritadas";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContextoFavoritas from "./contextoFavoritas";
import { useState } from "react";

const Stack = createNativeStackNavigator()

export default function App() {
  let [listaFavoritas, setListaFavoritas] = useState(new Set());

  return <ContextoFavoritas.Provider value={{ listaFavoritas, setListaFavoritas }}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Universidades" component={BuscarUniversidades} />
        <Stack.Screen name="Favoritos" component={FavouritedUniversities} />
      </Stack.Navigator>
    </NavigationContainer>
  </ContextoFavoritas.Provider>
}