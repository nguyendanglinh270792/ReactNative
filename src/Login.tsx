import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={{textAlignVertical: 'center'}}>Login</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {},
});
