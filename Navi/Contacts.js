import * as React from "react"
import { View, Text, Image, StyleSheet, Pressable } from "react-native"


export default function Contact({navigation}){
    return(
        <>
     
        <View>
            
                <Text style={{color: '#009688', marginLeft: 30, marginTop: 60}}>
                    Messages
                </Text>
                 <View style={styles.MatchPic}>
                <Pressable onPress={() => navigation.navigate('Chat')}>
                <Image
                source={require("../assets/pexels-wildan-zainul-faki-3364110.jpg")}
                style = {styles.MTfeatureImg}/>
                </Pressable>
                </View>
                <View style={styles.MatchPic}>
                <Pressable onPress={() => navigation.navigate('Chat')}>
                <Image
                source={require("../assets/pexels-mentatdgt-1390534.jpg")}
                style = {styles.MTfeatureImg}/>
                </Pressable>
                </View>
                <View style={styles.MatchPic}>
                <Pressable onPress={() => navigation.navigate('Chat')}>
                <Image
                source={require("../assets/pexels-pixabay-262391.jpg")}
                style = {styles.MTfeatureImg}/>
                </Pressable>
                </View>
            
        </View>
        </>
    )
};





const styles = StyleSheet.create({
    MTfeatureImg: {
        width: 100,
        height: 130,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 20,
    },

    MatchPic: {
        width: 100,
        height: 130,
        marginTop: 10,
        
    }
    
    
})