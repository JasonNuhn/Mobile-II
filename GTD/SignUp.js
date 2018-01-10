import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  TouchableHighlight
} from 'react-native';
const bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB. 
    });
});



const axios = require('axios');

import styles from './Styles';

export default class SignUp extends React.Component {
    state = {
        usernames: [],
        email: '',
        password: '',
        error: ''
    };

componentDidMount() {
    console.log('is Mounted');
    const myUsers = AsyncStorage.getItem('usernames');
    myUsers
      .then(res => {
        if (res !== null) {
          this.setState(prevState => {
            let myUsers = JSON.parse(res);
            return {
              myUsers
            };
          });
        }
      })
      .catch(err => {
        console.log('On did Mount', err);
      });
  }

  componentWillUnmount() {
    console.log('is Un Mounted');
    const usernames = this.state.usernames.slice();
    AsyncStorage.setItem('usernames', JSON.stringify(usernames));
  }

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  addUsernames = () => {
    console.log('clicked');
    if (this.state.email === '' || this.state.password === '') {
      this.setState({ error: `Incomplete information` });
      setTimeout(() => {
        this.setState({ error: '' });
      }, 2000);
      return;
    }
    this.setState(prevState => {
      let { email, password, usernames } = prevState;
      return {
        usernames: usernames.concat({ key: usernames.length, email, password }),
        email: '',
        password: ''
      };
    });
  };

  hashedPassword = (req, res, next) => {
    const { password } = req.body;
    bcrypt
        .hash(password, 11)
        .then(pw => {
        req.password = pw;
        next();
        })
        .catch(err => {
        throw new Error(err);
        });
    };

  signUp= () => {
      axios.post('https://mobile-server-ii.herokuapp.com/users'), {
          email: this.state.email,
          hashedPassword: this.state.password
  }
}
  
  render() {
    // console.log(this.state);
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        </View>
        // <View style={styles.row}>
        //   <Form
        //     ref="form"
        //     type={Person}
        //     options={options}
        //   />
        // </View>  
        // <View style={styles.row}>
        //   <TouchableHighlight style={styles.button} onPress={this.email} underlayColor='#99d9f4'>
        //     <Text style={styles.buttonText}>Email</Text>
        //   </TouchableHighlight>
        //   <TouchableHighlight style={styles.button} onPress={this.password} underlayColor='#99d9f4'>
        //     <Text style={styles.buttonText}>Password</Text>
        //   </TouchableHighlight>
        //   {/* <TouchableHighlight style={styles.button} onPress={this._userLogout} underlayColor='#99d9f4'>
        //     <Text style={styles.buttonText}>Logout</Text>
        //   </TouchableHighlight> */}
        // </View>
        // <View style={styles.row}>    
        //   <TouchableHighlight onPress={this._getProtectedQuote} style={styles.button}>
        //     <Text style={styles.buttonText}>Get a Chuck Norris Quote!</Text>
        //   </TouchableHighlight>
        // </View>
    );
}
}
