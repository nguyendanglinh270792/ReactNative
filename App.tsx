import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Login from './src/Login';
import Register from './src/Register';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: style.header,
            contentStyle: style.content,
          }}>
          <Stack.Screen
            name="Home"
            component={Login}
            // options={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            // options={{title: 'Welcome'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const style = StyleSheet.create({
  header: {
    backgroundColor: '#707070',
    borderBottomWidth: 0,
  },
  content: {
    backgroundColor: '#707070',
    marginTop: 0,
  },
});
