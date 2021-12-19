import {ScrollView, StyleSheet, View} from "react-native";
import React from "react";
import Header from "./Header";
import Progress from "./Progress";
import Dreams from "./Dreams";

export default function MainPage({navigation}) {

    return (
        <View style={styles.viewStyle}>
            <View>
                <Header style={styles.header} navigation={navigation}/>
            </View>

            <View style={styles.progress}>
                <Progress/>
            </View>
            <View>
                <Dreams navigation={navigation}/>
            </View>


        </View>


    )
}
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#FFFFFF",
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0
    },
    progress: {
        marginTop: 100
    }
})
