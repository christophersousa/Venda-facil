import { useEffect, useState } from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {useIsFocused} from '@react-navigation/native'

import {getFavorites} from '../../util/store'
import {CardsFood} from '../../components/cardsFood'

export function Favorites(){

    const [favorites, setFavorites] = useState([])
    const isFocused = useIsFocused()

    useEffect(() => {

        let isActive = true

        async function getReceipes(){
            const result = await getFavorites('@appReceita')

            if(isActive){
                setFavorites(result)
            }
        }

        if(isActive){
            getReceipes()
        }

        return ()=>{
            isActive = false;
        }

    },[isFocused])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Receitas favorítas</Text>
            {favorites.length === 0 && (
                <Text>Você não tem nenhuma receita favorita</Text>
            )}
            <FlatList
                data={favorites}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <CardsFood data={item}/>}
                contentContainerStyle={{marginTop:14}}
                showsVerticalScrollIndicator={false}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#F3f9ff",
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 36
    },
    title: {
        fontSize: 24,
        fontWeight: 500,
        marginBottom: 14
    }
})