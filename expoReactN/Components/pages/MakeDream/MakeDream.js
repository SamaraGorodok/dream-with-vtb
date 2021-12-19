import {Text, TouchableHighlight, View, StyleSheet, Image} from "react-native";
import React from "react";
import FormMake from "./FormMake";

export default function MakeDream({navigation}){
    return(
        <View style={styles.element} >
           {/*<Text>Извините, не успели. Но на бэке логика есть.</Text>*/}
            <FormMake navigation={navigation}/>
        </View>
    )
}

const styles= StyleSheet.create({
    element:{
        padding:15,
        flexDirection: "row",
    }
})