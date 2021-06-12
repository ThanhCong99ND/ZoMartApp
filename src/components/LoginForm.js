import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Registration from './Registration';
import WellCometoLogin from './WellCometoLogin';
export default class LoginForm extends Component {
  render() {
    const Header = props => {
      return <View {...props}>null;</View>;
    };
    // const Divider = (props) => {
    //   return <View{...props}>
    //     <View style={styles.line}></View>
    //     <Text style={styles.textOR}>OR</Text>
    //     <View style={styles.line}></View>
    //   </View>
    // }
    const Footder = props => {
      return (
        <View {...props}>
          <Text>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Registration')}>
            <Text style={styles.register_button}>Đăng ký </Text>
          </TouchableOpacity>
          <Text>tại đây!</Text>
        </View>
      );
    };
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../assets/Splash.png')}
          />

          <StatusBar style="auto" />
          <View style={styles.EmailView}>
            <TextInput
              style={styles.TextInput}
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder=" SĐT/Email"
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

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Đăng nhập</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgot_button}>Quên mật khẩu?</Text>
          </TouchableOpacity>

          {/* <Divider style={styles.divider}></Divider> */}
          <FontAwesome.Button
            style={styles.facebookButton}
            name="facebook"
            onPress={this.LoginFacebook}
            backgroundColor="#3B5998">
            <Text style={styles.facebooktext}>Đăng nhập bằng Facebook</Text>
          </FontAwesome.Button>
          <Footder style={styles.footer}></Footder>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9900',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 190,
    height: 180,
  },

  EmailView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginTop: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  PasswordView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginTop: -10,
    alignItems: 'center',
    marginBottom: 30,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },

  forgot_button: {
    height: 30,
    textDecorationLine: 'underline',
    marginBottom: 20,
  },

  loginBtn: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  facebookButton: {
    width: '70%',
    borderRadius: 25,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  facebooktext: {
    borderRadius: 25,
    justifyContent: 'center',
  },
  register_button: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  // line:{
  //   height:1,
  //   flex:2,
  //   backgroundColor: '#000',

  // },
  // textOR:{
  //   flex:1,
  //   textAlign:'center',
  // },
  footer: {
    flexDirection: 'row',
    height: 30,
    width: '60%',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 100,
  },
});
