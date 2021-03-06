/*
* Picker属性方法(这边只介绍平台通用属性以及只适合Android平台上面的属性方法)
 View相关属性样式全部继承(例如:宽和高,背景颜色,边距等相关属性样式)
 onValueChange  function方法,当选择器item被选择的时候进行调用。该方法被调用的时候回传入一下两个参数
 itemValue:该属性值为被选中的item的属性值

 itemPosition:该选择器被选中的item的索引position

 selectedValue: any任何参数值，选择器选中的item所对应的值，该可以是一个字符串或者一个数字
 style pickerStyleType 该传入style样式，设置picker的样式风格
 enabled bool 如果该值为false，picker就无法被点击选中。例如:用户无法进行做出选择
 mode enum ('dialog','dropdown')  选择器模式。在Android平台上面，设置mode可以控制用户点击picker弹出的样式风格
 'dialog': 该值为默认值，进行弹出一个模态dialog(弹出框)

 'dropdown':以picker视图为基础，在该视图下面弹出下拉框

 prompt string  设置picker的提示语(标题),在Android平台上面，模式设置成'dialog',显示弹出框的标题

 */
'use strict'
import React,{
  AppRegistery,
  Component,
  StyleSheet,
  Text,
  View,
  Picker
} from 'reac-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    }
});

var PickerDemo = React.createClass({
    getInitialState(){
        return {
            language:''
        }
    },
    render(){
        return (
            <View style={styles.container}>
              <Text>Picker Demo</Text>
              <Picker
                  style={{width:20}}
                  selectedValue={this.state.language}
                  onValueChange={(value)=>this.setState({language:value})}
              >
                  <Picker.item label="java" value="java" />
                  <Picker.item label="javascript" value="javascript" />
              </Picker>
            </View>
        );
    }
});

AppRegistery.registerComponent('PickerDemo',()=>PickerDemo);


