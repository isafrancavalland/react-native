import { useContext, useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Botao from "./botao"
import UniversityList from './listaUniversidades';
import axios from 'axios';
import ContextoFavoritas from './contextoFavoritas';

export default function BuscarUniversidades({ navigation }) {
    let { listaFavoritas, setListaFavoritas } = useContext(ContextoFavoritas)
    let [listaUniversidades, setListaUniversidades] = useState([])

    let [nomeUniversidadePesquisa, setNomeUniversidadePesquisa] = useState("")
    let [paisUniversidadePesquisa, setPaisUniversidadePesquisa] = useState("")

    useEffect(() => {
        fazerBusca(null, null);
    }, []);

    function trocarTela() {
        navigation.navigate("Favoritos")
    }

    async function fazerBusca(name, country) {
        if (name === "" && country === "") {
            return
        }

        let queryParams = {}
        if (name !== "") {
            queryParams.name = name
        }

        if (country !== "") {
            queryParams.country = country
        }

        let baseUrl = 'http://universities.hipolabs.com/search'

        const response = await axios.get(baseUrl, { params: queryParams })

        console.log({ queryParams, response })

        setListaUniversidades(response.data)
    }

    function favoritar(uni) {
        return () => {
            let aux = listaFavoritas

            aux.add(uni)

            setListaFavoritas(aux)
        }
    }

    return <View style={styles.container}>
        <View>
            <TextInput
                style={styles.filtroUniversidade}
                value={nomeUniversidadePesquisa}
                placeholder={"Nome da universidade"}
                onChangeText={setNomeUniversidadePesquisa} />
            <TextInput
                style={styles.filtroUniversidade}
                value={paisUniversidadePesquisa}
                placeholder={"Pais da universidade"}
                onChangeText={setPaisUniversidadePesquisa} />
        </View>
        <View style={styles.botoesFiltroUniversidade}>
            <Botao
                style={styles.botaoUniversidades}
                title='Pesquisar'
                onPress={async function () {
                    return fazerBusca(nomeUniversidadePesquisa, paisUniversidadePesquisa)
                }} />
            <Botao
                style={styles.botaoUniversidades}
                title='Favoritos'
                onPress={trocarTela} />
        </View>
        <View style={{ flex: 1 }}>
            <UniversityList data={listaUniversidades} itemIdKey={'name'} onItemPress={favoritar} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEF9FF',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    filtroUniversidade: {
        marginBottom: 8,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 4,
        width: "20rem",
        fontSize: 20
    },
    botoesFiltroUniversidade: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "20rem",
    },
    botaoUniversidades: {
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            elevation: 3,
            backgroundColor: '#9F9FED',
            borderRadius: 4,
        },
        text: {
            fontWeight: 'bold',
            color: "white",
            fontSize: 20
        }
    },
});
