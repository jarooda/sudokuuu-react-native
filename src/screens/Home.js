import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, TextInput, ImageBackground, Dimensions } from 'react-native';
import ButtonCustom from '../components/ButtonCustom'

export default function Home ({ navigation }) {
  const [name, setName] = useState('')
  const { width } = Dimensions.get('window')

  useEffect(() => {
    setName('')
  }, [])

  const playing = ({diff, time}) => {
    navigation.navigate('Board', {
      diff,
      time,
      name
    })
  }
  
  return (
    <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../../assets/sudowallpaper.jpg')}>
      <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={[styles.bgwhite, {width:width, paddingVertical:20}]}>
          <Text style={[{fontSize:40, fontWeight:'bold', textAlign:'center', paddingBottom: 50},styles.textshadow]}>SUDOKUUU GAME</Text>
          <View style={styles.container}>
            <Text style={{fontWeight:'700', fontSize: 20, marginBottom: 10}}>Who are you challenger?</Text>
            <TextInput style={styles.input} onChangeText={(e) => setName(e)} value={name}/>
          </View>
          <View style={[styles.container, {marginTop: 25}]}>
            <Text style={{fontWeight:'700', fontSize: 20, marginBottom: 10}}>Choose Difficulty</Text>
            <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
              <ButtonCustom
                param={{diff:'easy', time: 150}}
                color={'chartreuse'}
                isDisabled={name.trim() === '' || name === '' ? true : false}
                title='Easy'
                func={playing}
              />
              <ButtonCustom
                param={{diff:'medium', time: 120}}
                color={'cornflowerblue'}
                isDisabled={name.trim() === '' || name === '' ? true : false}
                title='Medium'
                func={playing}
              />
              <ButtonCustom
                param={{diff:'hard', time: 5}}
                color={'crimson'}
                isDisabled={name.trim() === '' || name === '' ? true : false}
                title='Hard'
                func={playing}
              />
            </View>
          </View>
        </View>
    </SafeAreaView>
  </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderBottomWidth: 1,
    textAlign: 'center',
    width: 150,
    height: 25
   },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
  bgwhite: {
    backgroundColor: "#FFFFFFa0"
  },
  textshadow:{
    color:'#000000',
    paddingLeft:30,
    paddingRight:30,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
  },
});
