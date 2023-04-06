import { View, Text, StyleSheet } from "react-native";

export function Ingredients({data}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{data.name}</Text>
            <Text>{data.amount}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 14,
        borderRadius: 8
    },
    title: {
        fontWeight: 500,
        fontSize: 16,
        color: '#000'
    }
})