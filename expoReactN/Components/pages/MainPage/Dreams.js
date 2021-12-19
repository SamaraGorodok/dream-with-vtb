import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,ScrollView
} from "react-native";
import React, {useState} from "react";
import ListDream from "./ListDream";

export default function Dreams({navigation}) {
    const loadSceneMakeDream = () => {
        navigation.navigate("MakeDream");

    }

    const [dreams, setDreams] = useState([
        {text:"MackBook",index:"1"},
        {text:"Путешествие",index:"2"},
        {text:"Микрофон", index:"3"},
    ])
    return (
        <View >
            <View style={styles.header}>
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Text style={styles.headerText}>Мечты</Text>
                </View>

                <View style={styles.manageDreams} style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity onPress={loadSceneMakeDream}>
                        <Image source={require('../../../assets/ManageDreams.png')} style={styles.manageDreams}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.dreamsContainer}>
                    <FlatList style={styles.container}
                              contentContainerStyle={styles.children} data={dreams} keyExtractor={item => item.index} renderItem={
                        ({item})=>(<ListDream navigation={navigation} el={item}/>)
                    }/>
            </View>
        </View>


    )




}


const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        flex: 0,
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: "#FFFFFF"
    },
    headerText: {
        flex: 0,
        marginLeft: 10,
        fontSize: 30
    },
    manageDreams: {
        flex: 0,
        marginRight: 10,
        marginTop: 10,
    },
    dreamsContainer:{
        marginTop:60,
    }

})
