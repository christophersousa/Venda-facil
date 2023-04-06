import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import {WebView} from 'react-native-webview'

import {Feather} from '@expo/vector-icons'

export function VideoView({handleClose, url}) {
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backBottom} onPress={handleClose}>
                <Feather name="arrow-left" color="#fff" size={24}/>
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>
            <WebView
                style={styles.contentView}
                source={{uri: url}}
            />
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    backBottom:{
        backgroundColor: '#4cbe6c',
        flexDirection: 'row',
        padding: 8
    },
    backText:{
        fontWeight: 500,
        fontSize: 18,
        marginLeft: 14,
        color: '#fff'
    },
    contentView:{
        flex: 1,
        width: '100%',
    }
})