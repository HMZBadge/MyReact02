/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text
} from 'react-native';


export default class LifeCycleComponent extends Component {

    constructor(props) {
        super(props)
    }

    //
    // componentWillMount() {
    //     console.log("啊啊--componentWillMount--啊啊")
    // }
    //
    // componentDidMount() {
    //     console.log("啊啊--componentDidMount--啊啊")
    // }
    //
    // componentWillUpdate(nextProps, nextState) {
    //     console.log("啊啊--componentWillUpdate--啊啊")
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("啊啊--componentDidUpdate--啊啊")
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("啊啊--shouldComponentUpdate--啊啊")
    // }
    //
    // componentWillUnmount() {
    //     console.log("啊啊--componentWillUnmount--啊啊")
    // }

    render() {
        return <Text style={{fontSize:20, backgroundColor:'red'}}
    
        >this my test niu bi haha  name=  {this.props.name} </Text>
    }
}
