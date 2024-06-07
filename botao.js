import { Pressable, Text } from "react-native";


export default function Botao({ onPress, title, style }) {
    return (
        <Pressable style={style.button} onPress={onPress}>
            <Text style={style.text}>{title}</Text>
        </Pressable>
    );
}