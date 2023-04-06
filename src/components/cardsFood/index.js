import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import {LinearGradient} from 'expo-linear-gradient'
import {useNavigation} from '@react-navigation/native'

export function CardsFood({data}){

    const navegation = useNavigation()

    function handleNavegation(){
        navegation.navigate('Details', {data: data})
    }

    return(
        <TouchableOpacity
            activeOpacity={0.9}
            style={style.container}
            onPress={handleNavegation}
        >
            <Image
                source={{uri:data.cover}}
                style={style.image}
            />
            <View style={style.info}>
                <Text style={style.name}>{data.name}</Text>
                <Text style={style.description}>{data.total_ingredients} ingredientes | {data.time} min</Text>
            </View>
            <LinearGradient
                style={style.gradient}
                colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.80)']}
            />
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    container: {
        marginBottom: 14,
    },
    image:{
        width: "100%",
        height: 200,
        borderRadius: 14
    },
    info: {
        position: "absolute",
        bottom: 14,
        left: 14,
        zIndex: 99,
    },
    name:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    description:{
        color: "#ECECEC",
    },
    gradient:{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "55%",
        borderRadius: 14,
        zIndex: 1,
        backgroundColor: "transparent",
    }
})