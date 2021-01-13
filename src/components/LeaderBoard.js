import React from 'react'
import { Text, View } from 'react-native'

export default function LeaderBoard ({width, diff, title, capitalizeFirstLetter}) {
  return (
    <View>
      <Text
        style={{fontSize:20, textAlign:'center', fontWeight:'bold', paddingTop: 20}}
      >
        {title}
      </Text>
      <View style={{flexDirection:'row', width: width - 20, alignItems: 'center', justifyContent: 'center', borderBottomWidth:2, paddingBottom:5, marginBottom:5}}>
        <Text style={{width: width / 4, textAlign: 'center', fontWeight:'bold'}}>Name</Text>
        <Text style={{width: width / 4, textAlign: 'center', fontWeight:'bold'}}>Difficulty</Text>
        <Text style={{width: width / 4, textAlign: 'center', fontWeight:'bold'}}>Time</Text>
      </View>
      {
        diff.map((e, idx) => (
          <View key={idx} style={{flexDirection:'row', width: width - 20, alignItems: 'center', justifyContent: 'center', paddingVertical: 5}}>
            <Text style={{width: width / 4, textAlign: 'center'}}>{e.name}</Text>
            <Text style={{width: width / 4, textAlign: 'center'}}>{capitalizeFirstLetter(e.diff)}</Text>
            <Text style={{width: width / 4, textAlign: 'center'}}>{e.second} sec</Text>
          </View>
        ))
      }
    </View>
  )
}