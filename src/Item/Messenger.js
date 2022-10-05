import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const blue = '#3777f0';
const grey = 'lightgray';
const myId = 'u1';

const Messenger = ({messages}) => {

    const isMe = messages.user.id === myId;
  return (
    <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
      <Text style={{color : isMe ? 'white' : 'black'}}>{messages.content}</Text>
    </View>
  )
}

export default Messenger

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#3777f0',
        padding:10,
        margin:10,
        borderRadius:10,
        width:'75%'
    },
    leftContainer:{
        backgroundColor:grey,
        marginLeft:10,
        marginRight:'auto',
    },
    rightContainer:{
        backgroundColor:blue,
        marginLeft:'auto',
        marginRight:10,
    }

})