import { StyleSheet, Text, View } from 'react-native'
import colors from '../../misc/Colors'
import React from 'react'

function BigTitle({text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 60,
        color: colors.dark_gray
    }
})

export { BigTitle }