import UniversityListItem from "./itemListaUniversidades";

import { FlatList, StyleSheet } from 'react-native';


export default function ListaUniversidades({ data, itemIdKey, onItemPress }) {
    return <FlatList
        style={styles.listaUniversidades}
        data={data}
        renderItem={({ item }) => <UniversityListItem university={item} onPress={onItemPress(item)} />}
        keyExtractor={(item) => item[itemIdKey]} />
}

const styles = StyleSheet.create({
    listaUniversidades: {
        margin: 8,
        paddingHorizontal: 16,
        paddingTop: 16,
        overflow: 'scroll'
    }
})