import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, ImageBackground, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import LeaderBoard from '../components/LeaderBoard'

export default function Finish ({ route }) {
  const { name, diff, second } = route.params
  const { easy, medium, hard } = useSelector(state => state.leaderBoard)
  const { width, height } = Dimensions.get('window')

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../../assets/sudowallpaper.jpg')}>
      <ScrollView>
        <SafeAreaView style={{flex:1}}>
          <View style={[styles.container, styles.bgwhite, {width: width, minHeight: height / 8}]}>
            <Text
            style={{fontSize:20, textAlign:'center', padding: 10}}
            >
              Congratulation {name}, you're success clearing {capitalizeFirstLetter(diff)} difficulty in {second} second.
            </Text>
          </View>
          <View style={[styles.container, styles.bgwhite, {width: width, minHeight: height / 8, marginTop: 20, paddingVertical: 20}]}>
            <Text
              style={{fontSize:30, textAlign:'center', fontWeight:'bold'}}
            >
              Leader Board
            </Text>
            <LeaderBoard width={width} diff={easy} title='EASY' capitalizeFirstLetter={capitalizeFirstLetter}/>
            <LeaderBoard width={width} diff={medium} title='MEDIUM' capitalizeFirstLetter={capitalizeFirstLetter}/>
            <LeaderBoard width={width} diff={hard} title='HARD' capitalizeFirstLetter={capitalizeFirstLetter}/>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgwhite: {
    backgroundColor: "#FFFFFFa0",
  },
})