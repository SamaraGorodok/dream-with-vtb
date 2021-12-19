import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import React from "react";

export default function Header({navigation}) {
    const loadSceneProfile = () => {
        navigation.navigate("ProfilePage");

    }
    return (

        <View style={styles.viewStyle}>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Image source={require('../../../assets/Logo.png')} style={styles.imageStyle}/>
            </View>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>

            </View>
            <TouchableOpacity underlayColor="#ffffff00"  onPress={loadSceneProfile}>
                <Image source={require('../../../assets/profile_icon.png')} style={styles.profileStyle}/>
            </TouchableOpacity>
        </View>


    )
}


const styles = StyleSheet.create({
    viewStyle: {
        marginTop: 50,
        marginLeft: 0,
        flex: 0,
        flexDirection: 'row',
        backgroundColor: "white"
    },
    imageStyle: {
        flex: 0,
        marginTop: 10,
        marginLeft: 10,
        width: 80,
        height: 28,
    },
    profileStyle: {
        flex: 0,
        marginRight: 10,
        marginTop: 10,
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor: "white"

    }
})
