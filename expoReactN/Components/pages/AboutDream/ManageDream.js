import {Text, View, StyleSheet, Image, TouchableOpacity, Pressable, ToastAndroid} from "react-native";
import React from "react";

export default function ManageDream({navigation}){

    const loadSetDreamScene = () =>{
        navigation.navigate("SetDream")
    }

    const some = ()=>{
        ToastAndroid.show("Не успели подвязать бэк к frontend", ToastAndroid.SHORT)
    }
    return(
        <View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={some} style={styles.mainButtonStyle}>
                    <Text style={{textAlign: "center",color:"dodgerblue",}}>Проверить цену на ЕКаталог</Text>
                </TouchableOpacity>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonOneStyle} onPress={loadSetDreamScene}>
                    <Text style={{textAlign: "center",color:"dodgerblue",}}>Изменить</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={some} style={styles.buttonTwoStyle}>
                    <Text style={{textAlign: "center",color:"red",}}>Удалить</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOneStyle:{
        width:"46%",
        marginRight:"8%",
        backgroundColor:"white",
        borderRadius:10,
        padding: 12,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    buttonTwoStyle:{
        width:"46%",
        backgroundColor:"white",
        borderRadius:10,
        padding: 12,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    buttonRow:{
        marginTop:30,
        flexDirection: "row",
    },
    buttonsContainer:{
        marginTop: 30,
        width:"80%",
        marginLeft:"10%",
    },
    mainButtonStyle:{
        backgroundColor:"white",
        borderRadius:10,
        padding: 12,
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
})