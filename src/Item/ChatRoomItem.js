import { StyleSheet, Text, View ,Image,Pressable} from 'react-native'
import React from 'react';
import {useNavigation} from '@react-navigation/core';

function ChatRoomItem({chatRoom}){
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onPress =()=>{
    console.warn('pressed on ', user.name)
    navigation.navigate('ChatRoom',{id: chatRoom.id});
    
  }
  return (
    <Pressable onPress={onPress} style={styles.container}>
    <Image source ={{uri: user.imageUri}}
    style={styles.image}></Image>

    {chatRoom.newMessages ? <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
    </View> : null}

    <View style={styles.rightContainer}>
      <View style={styles.row}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
      </View>
      <Text numberOfLines={1} ellipsizeMode='middle' style={styles.text}>{chatRoom.lastMessage.content}</Text>
    </View>
  </Pressable>
  )
}

export default ChatRoomItem;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10
      },
      image:{
        height:60,
        width:60,
        borderRadius:50,
        marginRight:10,
      },
      badgeContainer:{
        backgroundColor:'#3777F0',
        width:20,
        height:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'white',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:53,
        top:10
      },
      badgeText:{
        color:'#fff',
        fontSize:12
      },
      rightContainer:{
        justifyContent:'center',
        flex:1
      },
      row:{
         flexDirection:'row',
         justifyContent:'space-between',
         
      },
      name:{
         fontWeight:'bold',
         fontSize:18,
         marginBottom:3
      },
      text:{
         color:'gray'
      }
});