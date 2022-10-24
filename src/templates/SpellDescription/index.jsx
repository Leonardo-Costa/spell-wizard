import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function SpellDescription({spell}) {
  return (
    <View style={styles.container}>
      <Text>Descrição da magia: {spell.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export { SpellDescription }