import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default function ButtonCustom({func, param, isDisabled, color, title}) {

  return (
    <TouchableHighlight
      underlayColor='fff'
      onPress={() => func(param)}
      disabled={isDisabled}
      style={[isDisabled ? {backgroundColor: `#f0f8ff`} : {backgroundColor: color}, styles.outer]}
    >
      <View style={styles.btn}>
        <Text style={styles.btn}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  outer: {width: 100, borderRadius: 10, borderColor: '#ccc', borderWidth: 1, marginHorizontal:5, justifyContent:'center', alignItems:'center'},
  btn: {textAlign: 'center', paddingHorizontal: 9, paddingVertical: 5}
});
