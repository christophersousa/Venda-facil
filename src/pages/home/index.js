import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import { Logo } from '../../components/logo'
import { CardsFood } from '../../components/cardsFood'
import { useState, useEffect } from 'react'
import {useNavigation} from '@react-navigation/native'

import {Text as MotiText} from 'moti'

import api from '../../services/api'

export function Home(){

    const [inputValue, setInputValue] = useState("")
    const [food, setFood] = useState([])

    const navigation = useNavigation()

    function handleSearch(){
        if(!inputValue) return;
        let input = inputValue
        setInputValue("")
        navigation.navigate("Search", {name:input})
    }

    useEffect(() => {
        async function fetchApi(){
            const response = await api.get('/foods')
            setFood(response.data)
        }
        fetchApi()
    },[])

    return(
        <SafeAreaView style={styles.container}>
            <Logo/>
            <MotiText
                style={styles.title}
                from={{
                    opacity: 0,
                    translateY: 15
                }}
                animate={{
                    opacity: 1,
                    translateY: 0
                }}
                transition={{
                    delay: 100,
                    type: 'timing',
                    duration: 650
                }}
            >
                Encontre a receita
            </MotiText>

            <MotiText
                style={styles.title}
                from={{
                    opacity: 0,
                    translateY: 18
                }}
                animate={{
                    opacity: 1,
                    translateY: 0
                }}
                transition={{
                    delay: 150,
                    type: 'timing',
                    duration: 850
                }}
            >
                que combina com você
            </MotiText>

            <View style={styles.form}>
                <TextInput
                    placeholder='Digite o nome de uma comida ...'
                    style={styles.input}
                    value={inputValue}
                    onChangeText={(text)=>setInputValue(text)}
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name="search" size={28} color="#4CBE6C"/>
                </TouchableOpacity>
            </View>

            <FlatList
                data={food}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <CardsFood data={item}/>}
                showsVerticalScrollIndicator={false}

            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3f9ff",
        paddingTop: 46,
        paddingStart: 14,
        paddingEnd: 14
    },
    title:{
        fontSize: 26,
        fontWeight: "bold",
        color: "#0e0e0e"
    },
    form:{
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 8,
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#ececec",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    input:{
        width: "90%",
        maxWidth: "90%",
        height: 46,
        paddingLeft: 8,
        paddingRight: 8,
    }
})