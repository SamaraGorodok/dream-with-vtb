import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const ButtonSep = () =>(
    <View style={styles.separation}></View>
)

const Cont = () =>(
    <View style={styles.cont}></View>
)

const IndexPage = ({navigation}) => {
    const loadScene = () =>{
        navigation.navigate('Auth/main');
    }

     return(
         <View style={styles.container}>

             <View>
                 <Image style={styles.icon}
                        source={require("../../assets/Logo.png")}/>
             </View>
             <View>
                 <Image style={styles.placeholder}
                        source={require('../../assets/placeHolder.png')}/>
             </View>
             <ButtonSep/>
             <Text style={styles.titleText}>накопи на мечту {"\n" }с ВТБ</Text>
             <ButtonSep/>
             <TouchableOpacity style={styles.buttonOneStyle}  onPress={loadScene}>
                 <Text style={styles.text}> Войти через ВТБ</Text>
             </TouchableOpacity>
             <ButtonSep/>
             <TouchableOpacity style={styles.buttonTwoStyle}>
                 <Text style={styles.text}> Инструкция</Text>
             </TouchableOpacity>
         </View>

     )
}

export default IndexPage;

const styles = StyleSheet.create({
    separation:{
        marginVertical: 8,
    },
    titleText:{
        marginTop: 10,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 36,
        textAlign: "center",
        marginBottom: 10

    },
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width:170,
        height:60,
        marginTop: 40,

    },
    placeholder:{
        width: 240,
        height: 240,
        marginBottom: 20,
        resizeMode:"cover",
    },
    text:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: 18,
        lineHeight: 22,
        color: "white"
    },
    buttonOneStyle: {
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
    cont:{
        width: 375,
        height:403,
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 47,
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderStyle: "solid"

    }
});