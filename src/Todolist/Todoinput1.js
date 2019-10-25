


//             </div>
// // 受控组件：
// // 1、给input标签添加value属性，赋值为state的值
// // 2、给input标签绑定onChange事件，
// // 在事件处理函数中setState
// // 3、一个事件处理函数控制多个表单元素时，
// // 给input标签加上name属性,事件处理函数中写：
// // setState({[e.target.name]:e.target.value})
//         )
//     }
// }



import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            inputValue:''
        } 
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){
            this.props.add(e.target.value);
            e.target.value="";
        }
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    componentDidMount(){
        console.log(this);
    }
    render() {
        return (
            <div>
                <label htmlFor="inp">ToDoList:</label>
                <input id="inp" onChange={this.handleChange} value={this.state.a} onKeyDown={this.handleInput} type="text"/> 
                              
            </div>
        )
    }
}

