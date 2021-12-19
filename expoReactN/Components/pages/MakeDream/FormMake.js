import {Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import InteractiveTextInput from "react-native-text-input-interactive";
import {useAuth} from "../../../security/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FormMake({navigation}) {
    const some = () => {
        ToastAndroid.show("Не успели подвязать бэк к frontend", ToastAndroid.SHORT)
    }

    const loadSceneSettings = ()=>{
            navigation.navigate("SetDream")
    }

    const [name, setName] = useState('')
    const {value, setValue} = useState(0)

    const authHandler = async () => {
        await AsyncStorage.setItem('token', 'w23eefq234Ad')
        setIsAuth(true)
    }

    return (
        <View style={styles.viewStyle}>
            <View style={styles.element}>
                <InteractiveTextInput value={name} onChangeText={setName} mainColor="#1e72d9"
                                      placeholder='Название мечты'/>
            </View>
            <View style={styles.element}>
                <InteractiveTextInput value={value} onChangeText={setValue} style={styles.element} mainColor="#1e72d9"
                                      placeholder='Сумма'/>
            </View>

            <TouchableOpacity onPress={loadSceneSettings} style={styles.buttonOneStyle}>
                <Text  style={{textAlign: "center",color:"dodgerblue",}} >Выбрать план</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonConfirmStyle} onPress={some}>
                <Text style={styles.text}>Подтвердить</Text>
            </TouchableOpacity>
        </View>


    )
}
const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
    }, element: {
        marginTop: 50,
    }, buttonOneStyle: {
        marginTop: 50,
        width: "97%",
        backgroundColor: "white",
        borderRadius: 5,
        padding: 12,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: {width: 1, height: 13},
    },
    buttonConfirmStyle: {
        marginTop: 210,
        backgroundColor: "#4B84E8",
        borderRadius: 14,
        width: 321,
        height:50,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 22,
        color: "white"
    },
    textChooseBtn:{
        textAlign:"center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 22,
        color: "black"
    },

})
