import { 
      StyleSheet,
      Text,
      View ,
      TextInput,
      Pressable,
      KeyboardAvoidingView,
      Platform} from 'react-native'
import React,{useState} from 'react'
import Feathers from 'react-native-vector-icons/Feather'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import AntDesigns from 'react-native-vector-icons/AntDesign'

const MesengerInput = () => {
  const [messages,setMessages] = useState('');

  const sendMessenger = ()=>{
    console.warn('sending: ',messages);
    setMessages('');
  }
  const onPlusClicker = ()=>{
    console.warn('On Plus Click ');
   
  }

  const onPress = () =>{
    if(messages){
      sendMessenger();
    }else{
      onPlusClicker();
    }
  }

  return (
    <KeyboardAvoidingView 
       style={styles.root}
       behavior={Platform.OS === "ios" ? "padding" : "height"}
       keyboardVerticalOffset={100}
       >
      <View style={styles.inputContainer}>
        <Feathers name='smile' size={24} color='#595959' style={styles.icon}/>
         <TextInput style={styles.input}
         value={messages}
         onChangeText={setMessages}
         placeholder='Enter text...'
         />
         <EvilIcon name='camera' size={35} color='#595959' style={styles.icon}/>
         <Feathers name='mic' size={23} color='#595959' style={styles.icon}/>
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {messages ?<Feathers name='send' size={24} color='white'/> : <AntDesigns name='plus' size={24} color='white'/>}
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default MesengerInput;

const styles = StyleSheet.create({
  root:{
   
    alignItems:'center',
    flexDirection:'row',
    padding:10
  },
  inputContainer:{
    backgroundColor:'#f2f2f2',
    flex:1,
    marginRight:10,
    borderRadius:25,
    borderColor:'#dedede',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    padding:1
  },
  icon:{
    marginHorizontal:5,
  },
  input:{
    flex:1,
    marginHorizontal:5,
  },
  buttonContainer:{
    width:45,
    height:45,
    backgroundColor:'#3777f0',
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center'
  },
buttonText:{
  color:'white',
  fontSize:25
}

})