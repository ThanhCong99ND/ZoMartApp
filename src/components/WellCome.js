import React, {Component} from 'react';
import LoginForm from './LoginForm';
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
  Animated,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window');
export default class WellCome extends Component {

  state = {
    logoOpacity: new Animated.Value(0),
    titleMarginTop: new Animated.Value(height / 2),
  };
  async componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.titleMarginTop, {
        toValue: 10,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(() => {

        this.props.navigation.navigate('LoginForm')
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require('../assets/Splash.png')}
          style={{
            ...styles.logo,
            opacity: this.state.logoOpacity,
          }}></Animated.Image>
        <Animated.Text
          style={{...styles.title, marginTop: this.state.titleMarginTop}}>
          Chất lượng tạo niềm tin
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FF9900',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 180,
    height: 180,
  },
  title: {
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
    width: 400,
    fontSize: 21,
    fontStyle: 'italic',
  },
});
