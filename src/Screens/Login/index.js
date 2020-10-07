import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  PasswordTextBox,
  TouchableNativeFeedback,
} from 'react-native';

class Login extends React.Component {
  pencet = () => {
    alert('welcome to konoha village');
  };
  state = {
    visible: true,
    username: '',
    password: '',
    usernamedefault: 'a',
    passworddefault: 'a',
  };
  lihat = () => {
    this.setState({visible: !this.state.visible});
  };
  login = () => {
   
    // this.setState({username: this.state.usernamedefault})
    // this.setState({password: this.state.passworddefault})
    if (
      this.state.username == this.state.usernamedefault &&
      this.state.password == this.state.passworddefault
    ) { alert('welcome to konoha village');
      // this.props.navigation.navigate("Home")
      this.props.navigation.replace('Home');
    } else {
      alert('gomennasai');
    }
  };

  render() {
    return (
      <View style={stylers.container}>
        <View style={stylers.header}>
          <View alignItems="center">
            <Text style={stylers.title}>KONOHA</Text>
          </View>

          <View style={stylers.boxInput}>
            <TextInput
              placeholder="Username"
              style={stylers.input}
              value={this.state.username}
              onChangeText={teks => this.setState({username: teks})}
              // defaultValue={this.state.usernamedefault}
            />
            <TextInput
              secureTextEntry={this.state.visible}
              placeholder="Password"
              style={stylers.input}
              value={this.state.password}
              onChangeText={teks => this.setState({password: teks})}
              // defaultValue={this.state.passworddefault}
            />
          </View>
          <View alignItems="flex-end">
            <Text onPress={() => this.lihat()}>cek password</Text>
          </View>
          <View style={{borderRadius:15}}>
            <Button
              title="please click in here"
              onPress={() => this.login()}
              // style={stylers.bank}
            />
          </View>
        </View>
        <Button title="Attention if you join village you'll Happiness" />
        {/* <TouchableNativeFeedback>
          <View
            style={{
              height: 30,
              width: 130,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              elevation: 9,
              borderRadius: 21,
            }}>
            <Text onPress={() => this.lihat()}>cek password</Text>
          </View>
        </TouchableNativeFeedback> */}
      </View>
    );
  }
}

export default Login;

const stylers = StyleSheet.create({
  container: {
    backgroundColor: '#9ddcea',
    flex: 1,
    // alignItems:"flex-end",
    // justifyContent:"center"
  },
  header: {
    height: '60%',
    width: '80%',
    // backgroundColor: '#784387',
    justifyContent: 'flex-end',
    marginVertical:"20%",
    marginHorizontal:"10%"
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textDecorationLine: 'underline line-through',
    color: '#010e97',
  },
  boxInput: {
    width: '100%',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  input: {
    height: 50,
    width: '75%',
    justifyContent:"center",
    alignItems:"center",
  },
});
