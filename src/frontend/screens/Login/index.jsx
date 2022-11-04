import {
  View, Text, TouchableOpacity, KeyboardAvoidingView, Image, TextInput, Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { BigTitle, SmallTitle, IconButton } from '../../atom';
import { css } from '../../../../assets/css/Css';

const icons = {
  logoMark:
  require('../../../assets/img/logomark-wizzard-hat.png'),
};

function Login() {
  const [display, setDisplay] = useState('none');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[css.container, css.primarybg]}
    >
      <View style={css.logo_mark}>
        <Image source={icons.logoMark} />
      </View>
      <View style={css.container}>
        <BigTitle text="Spell Wizard" />
      </View>
      <View>
        <Text style={css.login_message(display)}>Invalid User or Password</Text>
      </View>
      <View style={css.login_form}>
        <TextInput
          placeholder="User:"
          style={css.login_input}
        />
        <TextInput
          placeholder="Password:"
          secureTextEntry
          style={css.login_input}
        />
        <View style={css.buttons_box}>
          <TouchableOpacity style={css.login_button}>
            <Text style={css.login_buttonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.login_register}>
            <Text style={css.login_registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export { Login };
