/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import LifeCycleComponemt from './src/LifeCycleComponent';
import EIComponent, {name, age, sum} from './src/EIComponent';
import PropsTest from './src/PropsTest';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state=({
      remove:false,
      result:'',
    })
  }

  render() {
    var view = this.state.remove ? null : <LifeCycleComponemt/>
    var textStr = this.state.remove ? "让他复活" : "干掉他"; 

    var param = {name:'小绿', age:29, sex: '女'};
    return (
      
      <View style={styles.container}>

        <Text style={styles.instructions}  onPress={()=>{
            this.setState({
              remove: !this.state.remove
            })
        }

        } >你来点我啊 {textStr}</Text>
        {view}
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={styles.welcome}>名字: {name}</Text>
        <Text style={styles.welcome}>年龄: {age}</Text>
        <Text style={styles.welcome} onPress={()=>{
            var res = sum(4,5);
            this.setState({  
                result: res,
            })
        }} >a+b= {this.state.result}</Text>

        <PropsTest {...param} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
