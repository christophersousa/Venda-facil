import AsyncStorage from '@react-native-async-storage/async-storage';


export async function getFavorites(key){
    const myfavorete = await AsyncStorage.getItem(key)
    return JSON.parse(myfavorete) || []
}

export async function saveFavorites(key, value) {
    const myfavorete = await getFavorites(key)

    const hasItem = myfavorete.some((item) => item.id === value.id)

    if(hasItem){
        console.log("Dado já existente")
        return;
    }

    myfavorete.push(value);

    await AsyncStorage.setItem(key, JSON.stringify(myfavorete))
    console.log("Item adicionado com sucesso")
}

export async function deletarFavorito(id) {
    const receipes = await getFavorites('@appReceita')
    const myfavorete = receipes.filter(item => (item.id != id))

    await AsyncStorage.setItem('@appReceita', JSON.stringify(myfavorete))
    console.log("Item removido com sucesso")
    return myfavorete
}

export async function isFavorite(value) {
    const myfavorete = await getFavorites('@appReceita')

    const favorite = myfavorete.find(item => item.id === value.id)

    if(favorite){
        return true;
    }

    return false;
}