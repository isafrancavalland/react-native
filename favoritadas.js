import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ListaUniversidades from './listaUniversidades';
import ContextoFavoritas from './contextoFavoritas';

export default function FavouritedUniversities(props) {
    let { listaFavoritas, setListaFavoritas } = useContext(ContextoFavoritas)

    function removerFavoritado(uni) {
        return function () {
            let aux = listaFavoritas

            aux.delete(uni)

            setListaFavoritas(aux)
        }
    }

    return <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <ListaUniversidades data={Array.from(listaFavoritas.values())} itemIdKey={"name"} onItemPress={removerFavoritado} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEF9FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
