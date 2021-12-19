import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useState} from "react";
import InteractiveTextInput from "react-native-text-input-interactive";
import {useAuth} from "../../../security/useAuth";

export default function AuthConfirm(){

    const [code, setCode] = useState('')
    const { isAuth, setIsAuth } = useAuth()

    const authHandler = async () => {
        await AsyncStorage.setItem('token', 'w23eefq234Ad')
        await AsyncStorage.getItem('code')
        setIsAuth(true)
    }

    return (
        <View style={styles.container}>

            <View>
                <InteractiveTextInput value={code} onChangeText={setCode} style={styles.textInput} mainColor="#1e72d9" placeholder='Код'/>
            </View>
            <Text style={styles.titleText}>Вам пришел код</Text>

            <TouchableOpacity style={styles.buttonOneStyle} onPress={authHandler}>
                <Text style={styles.text}>Подтвердить</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    textInput:{
      width:"20%",
    },
    titleText:{
        marginTop: 10,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10

    },
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 22,
        color: "white"
    },
    buttonOneStyle: {
        marginTop: 80,
        backgroundColor: "#4B84E8",
        borderRadius: 14,
        width: 321,
        height:50,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonTwoStyle: {
        backgroundColor: "rgba(75, 132, 232, 0.56)",
        borderRadius: 14,
        width: 321,
        height:50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
    },
});