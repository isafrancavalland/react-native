import { StyleSheet, Text, View } from "react-native"
import Botao from "./botao"


export default function UniversityListItem({ university, onPress }) {
    return <View style={styles.container}>
        <Botao title={university.name} style={{ text: styles.texto }} onPress={onPress} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        padding: 8,
        borderColor: "#000",
        borderWidth: 2
    },
    texto: {
        fontSize: 20
    }
})