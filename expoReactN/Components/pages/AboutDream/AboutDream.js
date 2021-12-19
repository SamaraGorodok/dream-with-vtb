import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import SemiCircleProgress from "../../SemiCircleProgress";
import ProgressDream from "./ProgressDream";
import ManageDream from "./ManageDream";

export default function AboutDream({navigation}) {

    return (
        <View style={styles.viewStyle}>
                <View style={styles.progress}>
                    <Text style={styles.nameDream}>Macbook pro</Text>
                    <Text style={styles.valueDream}>20 000/189 000</Text>
                    <Image style={styles.iconDream} source={require("../../../assets/macbook.png")}/>
                    <Text style={{fontSize:15,textAlign:"center"}}>осталось</Text>
                    <Text style={styles.timeDream}>2 года</Text>
                </View>
                <View style={styles.dreamManage}>
                    <ProgressDream/>
                    <ManageDream navigation={navigation}/>
                </View>
        </View>


    )
}
const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
    },
    dreamInfo: {
        marginTop: 100,
        textAlign:"center"
    },
    nameDream:{
        fontSize:30,
        textAlign:"center"
    },
    valueDream:{
        fontSize: 15,
        textAlign:"center"
    },
    timeDream:{
        textDecorationLine: "underline",
        textAlign:"center"
    },
    dreamManage:{
        padding:10,
        backgroundColor: "#EBECF0",
        borderWidth: 1,
        borderColor: "#BEBEBE",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width:"100%",
        height:"50%",
        marginTop:20

    },
    iconDream:{
        marginTop: 15,
        marginBottom: 5
    },
    progress:{
        marginTop:30
    }

})
