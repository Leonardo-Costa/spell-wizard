import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../misc/Colors';

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontWeight: 'bold',
    fontSize: 60,
    color: colors.dark_gray,
  },
});

function BigTitle({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

export default { BigTitle };
