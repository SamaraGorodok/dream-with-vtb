import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

import React, {useState} from "react";
import SemiCircleProgress from "../../SemiCircleProgress";
import {useAuth} from "../../../security/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfilePage({navigation}){
    const { isAuth, setIsAuth } = useAuth()

    const authHandler = async () => {
        /*axios({
            url: 'http://localhost:15995/auth/logout',
            method: 'get'
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
                navigation.navigate("Auth/main");
            });*/
        await AsyncStorage.setItem('token', 'w23eefq234Ad')
        setIsAuth(false)
    }


    return (

        <View style={styles.viewStyle}>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                <TouchableOpacity underlayColor="#ffffff00"  onPress={authHandler}>
                    <Image source={require('../../../assets/logout.png')} style={styles.imageStyle}/>
                </TouchableOpacity>
            <TouchableOpacity nderlayColor="#ffffff00"  onPress={authHandler}>
                <Text style={{marginTop:18,marginLeft:10}}>Выйти</Text>
            </TouchableOpacity>
            </View>

        </View>


    )

}

const styles = StyleSheet.create({
    viewStyle: {
        marginLeft: 0,
        flex: 0,
        flexDirection: 'row',
        backgroundColor: "white"
    },
    imageStyle: {
        flex: 0,
        marginTop: 10,
        marginLeft: 10,
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor: "white"
    },
})
