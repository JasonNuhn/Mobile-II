import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TodoList from './TodoList';
import SignUp from './SignUp';
import styles from './Styles';
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to your Todo List</Text>
        <Button
          title="Sign Up"
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
        />
        <Button
          title="Todo List"
          onPress={() => {
            this.props.navigation.navigate('TodoList');
          }}
        />
      </View>
    );
  }
}

const Routes = StackNavigator({
  Home: { screen: Home },
  TodoList: { screen: TodoList }
});

export default Routes;
