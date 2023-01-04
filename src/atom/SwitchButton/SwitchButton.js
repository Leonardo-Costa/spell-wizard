import { StyleSheet, Switch, View } from "react-native";
import React, { useState } from "react";
import colors from '../../misc/Colors';

function SwitchButton() {
  const [isEnable, setIsEnabled] = useState(false);
  const changeSwitch = () => {
    setIsEnabled(previousState => !previousState);
  }

  return (
    <View>
      <Switch trackColor={{
        false: colors.dark_gray,
        true: colors.light_gray
        }}
        thumbColor={
          !isEnable ? colors.light_gray : colors.dark_gray
        }
        onValueChange={changeSwitch}
        value={isEnable}
        style={styles.container}>
      </Switch>
  </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  }
});

export { SwitchButton }