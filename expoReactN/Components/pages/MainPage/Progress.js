import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import SemiCircleProgress from "../../SemiCircleProgress";
import React from "react";

export default function Progress({navigation}){
    const loadScene = () =>{
        navigation.navigate("Auth/confirm");

    }

    return (

        <View style={styles.content}>
            <View>
                <SemiCircleProgress    circleRadius={100} percentage={100} progressWidth={10}  progressColor={"dodgerblue"} >
                    <Text style={{ fontSize: 32, color: "black" }}>20000₽</Text>
                </SemiCircleProgress>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>
                    Приблизили вас к мечте
                </Text>
                <Text style={styles.signMonths}>за этот месяц</Text>
                <Text style={styles.signSuccess}>
                    Это на 200% больше предыдущего месяца
                </Text>
            </View>

        </View>


    )
}


const styles = StyleSheet.create( {
        content: {
            backgroundColor:"white",
            alignItems: 'center',
            flex: 0,
            justifyContent: 'center'
        },
        textContainer:{
            textAlign:"center",
            marginTop:10
        },
        mainText:{
        textAlign: "center"
        },
        signSuccess:{
            color:"dodgerblue",
            textAlign: "center",
            marginTop: 10
        },
        signMonths:{
            textDecorationLine: "underline",
            textAlign: "center"

        }
    }
    )
