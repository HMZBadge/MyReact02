/**
 * 学习属性
 *  默认属性        static defaultProps={
                    name:‘小红’
              }
 *  属性类型检查 :
 *  1.Proptypes用来类型检查

 2.isrequired指定所必需的属性
 *
 * 属性的 延展操作符 ...  var param = {name: "小红", age: 18, sex: "男"}
 *                param 中有多个属性, 可以通过 {...param}
 *
 * ES6语法解构赋值  var param = {name: "小红", age: 18, sex: "男"}
 *                var {name, sex} = param
 *                下面就可以用 name 和 sex 变量了
 * 小技巧二：解构赋值
 *   适用于只想传递部分属性情况
 *   好处：可以从一组属性中获取指定属性，省去了params.name等的写法
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View
} from 'react-native';


export default class PropsTest extends Component {
    static defaultProps = {
        name: '小名',
        age: 19,

    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.string.isRequired
    };

    render() {
    
        return (
            <View>
                
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>姓名: {this.props.name}</Text>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>年龄: {this.props.age}</Text>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>性别: {this.props.sex}</Text>  
            </View>
        )
    }
}