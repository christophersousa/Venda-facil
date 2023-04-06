import {View, Text, StyleSheet, FlatList} from 'react-native'
import {useRoute} from '@react-navigation/native'
import { useEffect, useState } from 'react'

import api from '../../services/api'
import {CardsFood} from '../../components/cardsFood'


export function Search(){
    const [receipes, setReceipes] = useState([])
    const route = useRoute()

    useEffect(()=>{
        async function fetchReceipes(){
            const result = await api.get(`/foods?name_like=${route.params?.name}`)
            setReceipes(result.data)
        }
        fetchReceipes()
    },[route.params?.name])

    return(
        <View style={styles.container}>
            <FlatList
                data={receipes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <CardsFood data={item}/>}
                contentContainerStyle={{marginTop:14}}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <Text style={styles.text}>Nenhum resultado encontrado</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f9ff",
        paddingEnd: 14,
        paddingStart: 14,
        paddingTop: 14
    },
    text:{
        fontSize: 16
    }
})