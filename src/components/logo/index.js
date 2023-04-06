import {Text, StyleSheet } from "react-native";
import {View} from 'moti'
export function Logo(){
    return(
        <View
            style={styles.AreaLogo}
            from={{
                opacity: 0,
                translateX: -50
            }}
            animate={{
                opacity: 1,
                translateX: 0
            }}
            transition={{
                type:  'spring',
                duration: 850
            }}
        >
            <Text style={styles.TextLogo}>
                Receita Facil
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    AreaLogo: {
        backgroundColor: "#4CBE6C",
        alignSelf: "flex-start",
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 30,
        marginBottom: 8
    },
    TextLogo: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    }
})