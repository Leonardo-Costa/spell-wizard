import { StyleSheet } from 'react-native';
import colors from '../../src/misc/Colors';

const css = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: 'center',
  },

  primarybg: {
    backgroundColor: colors.primary,
    flex: 1,
  },

  login_message: (text = 'none') => ({
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
    marginBottom: 15,
    marginTop: 10,
    display: text,
  }),

  login_form: {
    width: '80%',
    padding: 5,
    flex: 1,
    margin: 5,
  },

  login_input: {
    backgroundColor: colors.light_gray,
    fontSize: 12,
    padding: 7,
    marginBottom: 5,
  },

  login_button: {
    padding: 12,
    backgroundColor: colors.light_gray,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 5,
  },

  login_buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.dark_gray,
  },

  login_register: {
    padding: 12,
    backgroundColor: colors.dark_gray,
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 5,
  },

  login_registerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.light_gray,
  },

  logo_mark: {
    marginVertical: 80,
    alignSelf: 'center',
    flex: 1,
  },

  buttons_box: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

});

export default { css };
