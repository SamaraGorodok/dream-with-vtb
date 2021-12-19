import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import React from "react";
import SemiCircleProgress from "../../SemiCircleProgress";

export default function ProgressDream(){
    return(
        <View style={styles.progressRow}>
            <SemiCircleProgress progressShadowColor	={"white"}	interiorCircleColor={"#EBECF0"} circleRadius={70} percentage={10} progressWidth={5}  progressColor={"dodgerblue"} >
                <Text style={{ backgroundColor: "#EBECF0",fontSize: 32, color: "dodgerblue" }}>10%</Text>
            </SemiCircleProgress>
            <View style={styles.textPlan}>
                <Text style={{fontSize:30}}>10000</Text>
                <Text style={{fontSize:20, textAlign: "center"}}>₽/мес</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressRow:{
        flexDirection: "row",
        justifyContent:"center"
    }
})