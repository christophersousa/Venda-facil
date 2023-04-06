import { View, Text, StyleSheet } from "react-native";
export function Instruction({data, index}){
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{index + 1} - </Text>
            <Text style={styles.text}>{data.text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8,
        marginBottom: 14,
        alignItems: 'center',
    },
    number:{
        fontSize: 18,
        fontWeight: "bold",
        color: '#000'
    },
    text:{
        lineHeight: 20
    }
})