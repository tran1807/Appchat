import { StyleSheet, Text, View ,FlatList,SafeAreaView} from 'react-native'
import React from 'react'
import {useRoute,useNavigation} from '@react-navigation/core';
import Messengers from '../../src/Item/Messenger';
import chatRoomData from '../../ass/dummy-data/Chats';
import MessengerInputs from '../Item/MesengerInput';


function ChatRoomScreen () {
  const route = useRoute();
  const navigation = useNavigation();
  console.warn('Displayung chat room : ',route.params?.id)
  navigation.setOptions({title: 'Elon Muck'})
  
  return (
    <SafeAreaView style={styles.page}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({item}) => <Messengers messages={item}/>}
                inverted
            />
            <MessengerInputs/>
         </SafeAreaView>
       )
     }

export default ChatRoomScreen

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1,
    }
})


