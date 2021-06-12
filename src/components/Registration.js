import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Registration extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../assets/Splash.png')}
          />

          <StatusBar style="auto" />
          <View style={styles.name}>
            <TextInput
              style={styles.TextInput}
              textContentType="name"
              keyboardType="default"
              placeholder=" Họ và Tên"
            />
          </View>
          <View style={styles.EmailView}>
            <TextInput
              style={styles.TextInput}
              textContentType="emailAddress"
              keyboardType="number-pad"
              placeholder=" Số điện thoại"
            />
          </View>

          <View style={styles.EmailView}>
            <TextInput
              style={styles.TextInput}
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder=" Email"
            />
          </View>

          <View style={styles.PasswordView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              // onChangeText={(password) => setPassword(password)}
            />
          </View>

          <View style={styles.PasswordView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Nhập lại mật khẩu"
              secureTextEntry={true}
              //   onChangeText={(password) => setPassword(password)}
            />
          </View>

          <TouchableOpacity style={styles.RegiBtn}>
            <Text style={styles.ReText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB039',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 190,
    height: 180,
  },
  name: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 300,
    height: 54,
    marginTop: 2,
    alignItems: 'center',
    marginBottom: 15,
  },

  EmailView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 300,
    height: 54,
    marginTop: 2,
    alignItems: 'center',
    marginBottom: 15,
  },
  PasswordView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 300,
    height: 54,
    marginTop: 2,
    alignItems: 'center',
    marginBottom: 15,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },

  RegiBtn: {
    width: '70%',
    borderRadius: 25,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: '#5D657B',
    backgroundColor: '#5D657B',
    marginBottom: 25,
    borderWidth: 2,
    borderColor: '#000',
  },

  ReText: {
    color: '#FFFCFC',
  },

  Text: {
    color: '#000000',
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  facebookButton: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  facebooktext: {
    marginLeft: 0,
  },
});
