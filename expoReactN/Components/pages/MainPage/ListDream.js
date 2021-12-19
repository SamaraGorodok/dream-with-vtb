import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import React from "react";
import * as Progress from 'react-native-progress';

export default function ListDream({el,navigation}){
    const loadSceneAboutDream = () => {
        navigation.navigate("AboutDream");

    }
    return(
        <View style={styles.element} >
            <TouchableOpacity onPress={loadSceneAboutDream}>
            <Image source={require("../../../assets/dreamIcon.png")}/>
                </TouchableOpacity>
            <View style={{marginLeft:10,flex: 1, flexDirection: "column",}}>
                <TouchableOpacity onPress={loadSceneAboutDream}>
                    <Text>{el.text}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={loadSceneAboutDream}>
                <Progress.Bar
                    progress={0.3} width={270} color={"dodgerblue"} style={{height:7}}
                />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    element:{
        padding:15,
        flexDirection: "row",
    },
})