import { View, Text ,Image, useWindowDimensions} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreens from '../../src/Screen/HomeScreen'
import ChatScreens from '../../src/Screen/ChatScreen'
import AddScreens from '../../src/Screen/AddScreen'
import SettingsScreens from '../../src/Screen/SettingScreen'
import ChatRoomScreens from '../../src/Item/ChatRoomScreen'
import LoginScreen from '../../src/Views/Login'
import RegisterScreen from '../../src/Views/Register'

import Ionicon from 'react-native-vector-icons/Ionicons'
import AntDesigns from 'react-native-vector-icons/AntDesign'
import EvilIcon from 'react-native-vector-icons/EvilIcons'

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


function BottomTab(){
  return(
  <Tab.Navigator initialRouteName='Chat'screenOptions={({}) => ({
    headerShown:false,
    tabBarActiveTintColor: 'red',
    tabBarInactiveTintColor: 'gray',
  })}
  >
  <Tab.Screen name="Chat" component={ChatScreens} options={{headerTitle:ChatHeader,tabBarLabelStyle:{fontSize:13},
    tabBarIcon : ({color,tintColor})=> (<Ionicon name='chatbubble-ellipses-outline' size={30} color={color} tintColor={tintColor}/>),
  }}/>
  {/* <Tab.Screen name="Home" component={HomeScreens} options={{tabBarLabelStyle:{fontSize:13},
    tabBarIcon : ({color})=> ( <AntDesigns name='home' size={30} color={color}/>),
  }}/> */}
  <Tab.Screen name="Add" component={AddScreens}options={{tabBarLabelStyle:{fontSize:13},
    tabBarIcon : ({color})=> <AntDesigns name='adduser' size={30} color={color}/>
  }}/>
  <Tab.Screen name="Settings" component={SettingsScreens}options={{tabBarLabelStyle:{fontSize:13},
    tabBarIcon : ({color})=> <AntDesigns name='setting' size={30} color={color}/>
  }}/>
  
</Tab.Navigator>
  );
}
// const HomeHeader = (props) =>{
//   const { width } = useWindowDimensions();
//   return(
//     <View style={{
//       flex:1,
//       flexDirection:'row',
//       justifyContent:'space-between',
//     alignItems:'center',
//     width,
//     padding:10
    
//     }}>
//       <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
//       style={{width:30,height:30,borderRadius:30,backgroundColor:'red'}}
//       />
//     <Text style={{flex:1,textAlign:'center',fontSize:22,fontWeight:'bold',marginLeft:40}}>Chat</Text>
//     <EvilIcon name='camera' size={35} color='#000' style={{marginHorizontal:10}}/>
//     <AntDesigns name='edit' size={24} color='#000' style={{marginHorizontal:10}}/>
//     </View>
//   )
// };

const ChatHeader = (props) =>{
  const { width } = useWindowDimensions();
  return(
    <View style={{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
    alignItems:'center',
    width,
    padding:10
    
    }}>
      <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
      style={{width:30,height:30,borderRadius:30}}
      />
    <Text style={{flex:1,textAlign:'center',fontSize:22,fontWeight:'bold',marginLeft:40}}>Chat</Text>
    <EvilIcon name='camera' size={35} color='#000' style={{marginHorizontal:10}}/>
    <AntDesigns name='edit' size={24} color='#000' style={{marginHorizontal:10}}/>
    </View>
  )
};
const ChatRoomHeader = (props) =>{
  const { width } = useWindowDimensions();
  console.log(props);
  return(
    <View style={{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width : width - 25,
      marginRight: '15%',
      padding:10,
      marginLeft:-30
    
    }}>
      <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
      style={{width:30,height:30,borderRadius:30}}
      />
    <Text style={{flex:1,marginLeft:10}}>{props.children}</Text>
    <EvilIcon name='camera' size={35} color='#000' style={{marginHorizontal:10}}/>
    <AntDesigns name='edit' size={24} color='#000' style={{marginHorizontal:10}}/>
    </View>
  )
};

export default function IndexContent() {
  return (
    <NavigationContainer>
    {/* <Stack.Navigator initialRouteName='BottomTab'screenOptions={{headerShown:true}} >
    <Stack.Screen name="BottomTab" component={BottomTab} 
       options={{ headerTitle: HomeHeader }}
    /> */}
    <Stack.Navigator initialRouteName='Login'screenOptions={{headerShown:false}} >
    <Stack.Screen name="Chat" component={ChatScreens} 
    options={{ headerTitle: ChatHeader }}
    />
    <Stack.Screen name="ChatRoom" component={ChatRoomScreens} 
    options={{ headerTitle: ChatRoomHeader, headerBackTitleVisible:false}}
    />
    <Stack.Screen name="BottomTab" component={BottomTab} 
       options={{ headerTitle: ChatHeader }}
    />
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="Register" component={RegisterScreen}  />
  </Stack.Navigator>
    </NavigationContainer>
   
  )
}


 