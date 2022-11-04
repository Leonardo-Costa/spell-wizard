import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../misc/Colors';

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.dark_gray,
  },
});

function SmallTitle({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

export default { SmallTitle };
