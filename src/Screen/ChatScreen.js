import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React from 'react'
import ChatRoomItems from '../Item/ChatRoomItem'

import chatRoomsData from '../../ass/dummy-data/ChatRooms'





function Chat () {
  return (
    <View style={styles.page}>
       <FlatList
      data={chatRoomsData}
      renderItem={({item}) =>   <ChatRoomItems chatRoom={item}/>}
      showsVerticalScrollIndicator={false}
      // ListHeaderComponent={() => <FlatList
      // data={chatRoomsData}
      // renderItem={({item}) =>   <ChatRoomItems chatRoom={item}/>}
      // showsVerticalScrollIndicator={false}
      // horizontal
      // />}
      />
       
    </View>

  )
}

export default Chat;

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white',
    flex:1

  }
});