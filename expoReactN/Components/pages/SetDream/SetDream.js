import {Text, View, StyleSheet, Image, TouchableOpacity,ToastAndroid} from "react-native";
import React, {useState} from "react";
import InteractiveTextInput from "react-native-text-input-interactive";

export default function SetDream(){

    const some = () => {
        ToastAndroid.show("Не успели подвязать бэк к frontend", ToastAndroid.SHORT)
    }
    const [plan, setPlan] = useState(0)
    const {priority, setPriority} = useState(false)

    return(
        <View style={styles.viewRoot}>
                <View style={styles.header}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <View style={{flexDirection: 'column',}}>
                            <Text style={styles.nameDream}>Macbook pro</Text>
                            <Text style={styles.valueDream}>20 000/189 000</Text>
                        </View>

                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Image style={styles.icon} source={require("../../../assets/macbook.png")}/>
                    </View>
                </View>
                <InteractiveTextInput style={{width: "100%"}} value={plan} onChangeText={setPlan} mainColor="#1e72d9"
                                      placeholder='Количество месяцев'/>
                <Text style={styles.textPriority}>Мечта не является приоритетной</Text>
                <View>
                    <TouchableOpacity onPress={some} style={styles.mainButtonStyle}>
                        <Text style={{textAlign: "center",color:"dodgerblue",}}>Сделать мечту приоритетной</Text>
                    </TouchableOpacity>
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    viewRoot:{
        backgroundColor: "#FFFFFF",
    },
    textPriority:{
        textDecorationLine: "underline",
        textAlign: "center"
    },

    header:{
        flex: 0,
        flexDirection: 'row',
        backgroundColor: "white",
        marginTop:30,
    },
    buttonsContainer:{
        marginTop: 30,
        width:"80%",
        marginLeft:"10%",
    },
    icon:{
        width: 80,
        height:75,
    },
    nameDream:{
        fontSize:20
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
    },element:{

    }
})