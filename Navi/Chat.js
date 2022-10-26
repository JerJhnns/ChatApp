import * as React from "react"
import { useState, Component } from "react"
import { View, Text, Image, StyleSheet, Pressable} from "react-native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import axios from "axios";



export default function Chat ({navigation}){
    const [message, setMessage] = useState([]);
    const [name, setName] = useState(" ");
    const [text, setText] = useState("");


    const url = 'http://10.0.2.2:8000/user/message';

    const handleSubmit = (e) => {e && e.PreventDefault && e.PreventDefault()
        
        axios
        .post(url, text)
        .then( async (response) => {
            const result = response.data;
            console.log(result)
        })

    if({text}){
        const d = {text}
        setMessage((props)=> [...props, d ])
        setText("")
    }}

    const Line = () => {
        return(
            <>
            <Text>{text}</Text>
            </>
        )
    }
   

    return(
        <>
        
     
        
        <Pressable style={styles.appButtonContainer} onPress={() => navigation.navigate('Contacts')}>
       
        <Text style={styles.appButtonText}> Go back </Text>
        </Pressable>
        
        <View style={{padding: 10, }}>
        {/*<ScrollView style={styles.scrollView}>*/}
        
    
        { message.map((a)=> 
        <View style={styles.messageView}> 
        <Text style={styles.messages}>{a.text}
        </Text>
        </View>)}
        
        
        
         <TextInput
        style={styles.input}
        placeholder="  Write your message"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
         />
      
    </View>
        <Pressable
         style={styles.sendButton}
         onPress={handleSubmit}>
            <Text style={styles.sendText}>Send</Text>
        </Pressable>
       
    </>

    )};





const styles = StyleSheet.create({
    appButtonContainer: {
        left: 10,
        top: 60,
        height: 25,
        width: 80,
        backgroundColor: "#009688",
        borderRadius: 20,
        position: "absolute",
        
      },
      appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
      ,
      input: {
        left: 20,
        top: 700,
        width: 250,
        height: 40,
        borderColor: "#009688",
        borderWidth: 3,
        borderRadius: 9,
        position: "absolute"
       

      }
      ,
      texter:{
        top: 650,
        fontSize: 20,
        borderWidth: 3,
        borderRadius: 19,
       
      },
      sendButton: {
        left: 280,
        top: 700,
        height: 40,
        width: 80,
        backgroundColor: "#009688",
        borderRadius: 20,
        position: "absolute",
        
      },
      sendText:{
    
        top: 5,
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        
        textTransform: "uppercase",
      },
      messageView:{
        top: 80,
        paddingTop: 10,
        borderRadius: 10,
        borderColor: "#009688",
        borderWidth: 1,
        width: 200,
        
      },

      messages: {
        fontWeight: "bold",
        left: 20,
        bottom: 10,


      },
      scrollView: {
        top: 80,
        height: 550,
        
      }
      
    })
