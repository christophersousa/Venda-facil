import {View, Text, StyleSheet, Pressable, Image, ScrollView, Modal, Share} from 'react-native'

import {useRoute, useNavigation} from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import {Entypo, AntDesign, Feather} from '@expo/vector-icons'

import {Ingredients} from '../../components/ingredients'
import {Instruction} from '../../components/instruction'
import {VideoView} from '../../components/video'
import {isFavorite, saveFavorites, deletarFavorito} from '../../util/store'



export function Detail(){
    const route = useRoute()
    const navegation = useNavigation()
    const [modalView, setModalView] = useState(false)
    const [favorite, setFavorite] = useState(false)

    useLayoutEffect(() => {
        async function getStatusFavorites() {
            const receipeFavorete = await isFavorite(route.params?.data)
            setFavorite(receipeFavorete)
        }

        getStatusFavorites()
        navegation.setOptions({
            title: route.params?.data ? route.params?.data.name: "Detalhe da receita",
            headerRight: () =>(
                <Pressable onPress={() => handleFavoriteReceipe(route.params?.data)}>
                    {favorite ? (
                        <Entypo
                        name='heart'
                        size={28}
                        color='#ff4141'
                    />
                    ): (
                        <Entypo
                            name='heart-outlined'
                            size={28}
                            color='#ff4141'
                        />)}
                </Pressable>
            )
        })
    },[route.params?.data, navegation, favorite])

    function handleOpenModal(){
        setModalView(true)
    }

    async function handleShareReceita(){
        try {

            await Share.share({
                url: 'https://www.receitafacil.com',
                message: `Receita: ${route.params?.data.name}\n Total de ingredientes: ${route.params?.data.total_ingredients}\n Vi la no receita facil`
            })

        } catch (error) {
            console.log(error.message)
        }
    }

    async function handleFavoriteReceipe(receipe){
        if(favorite){
            await deletarFavorito(receipe.id)
            setFavorite(false)
        }else{
            await saveFavorites("@appReceita",receipe)
            setFavorite(true)
        }
    }

    return(
        <ScrollView contentContainerStyle={{paddingBottom:14}} showsVerticalScrollIndicator={false}  style={styles.container}>
            <Pressable onPress={handleOpenModal }>
                <View style={styles.play}>
                    <AntDesign name='playcircleo' size={68} color='#fefefe'/>
                </View>
                <Image
                    source={{uri: route.params?.data.cover}}
                    style={styles.image}
                />
            </Pressable>

            <View style={styles.headerDetail}>
                <View>

                    <Text style={styles.title}>{route.params?.data.name}</Text>
                    <Text style={styles.totalIngredient}>
                        Ingredientes ({route.params?.data.total_ingredients})
                    </Text>

                </View>
                <Pressable onPress={handleShareReceita}>
                    <Feather name="share-2" size={28} color="#121212"/>
                </Pressable>
            </View>

            {route.params?.data.ingredients.map((item)=>(
                <Ingredients key={item.id} data={item}/>
            ))}

            <View style={styles.areaInstruction}>
                <Text style={styles.textInstruction}>Modo de preparo</Text>
                <Feather
                    name="arrow-down"
                    size={24}
                    color="#fff"
                />
            </View>

            {route.params?.data.instructions.map((item, index)=>(
                <Instruction key={item.id} data={item} index={index}/>
            ))}

            <Modal
                visible={modalView}
                animationType='slide'
            >
                <VideoView
                    handleClose={() => setModalView(false)}
                    url={route.params?.data.video}
                />
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3f9ff",
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart: 14
    },
    image:{
        width: "100%",
        height: 200,
        borderRadius: 14,
    },
    play:{
        position: "absolute",
        zIndex: 99,
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center"
    },
    headerDetail:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 4,
        marginTop: 14,
        color: "#000"
    },
    totalIngredient:{
        fontSize: 16,
        marginBottom: 14,
    },
    areaInstruction:{
        backgroundColor:"#4cbe6c",
        flexDirection: "row",
        padding: 8,
        borderRadius: 8,
        marginBottom: 14,

    },
    textInstruction:{
        fontSize: 16,
        fontWeight: 500,
        color: "#fff",
        marginRight: 4
    }
})