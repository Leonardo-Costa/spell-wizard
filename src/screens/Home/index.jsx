import { StyleSheet, Text, View } from 'react-native'
import { SpellCard } from '../../molecules'
import React from 'react'

function Home() {

  return (
    <View style={styles.container}>
      <SpellCard title="Titulo" level="1" school="Evocation" desc="Descricao"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    flex: 1,
    justifyContent: 'center'
  }
})

export {Home}