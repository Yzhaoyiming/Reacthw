import Todoinput1 from './Todoinput1'
import Todoing1 from './Todoing1'
import './todo1.css';
import React, { Component } from 'react'

export default class Todolist extends Component {
    constructor(){
        super();
        //把数据声明在状态里
        this.state={
            // todo:[1,2,3,4],
            todo:JSON.parse(localStorage.getItem('aa'))||[]
            // a:100,
            // b:200
        }
    }
    additem=(data)=>{
        // this.state.todo.push(data);
        // console.log(this.state.todo);
        var obj={
            title:data,
            done:false
        };
        this.setState({
            todo:[...this.state.todo,obj]

        },()=>{
            
            localStorage.setItem('aa',JSON.stringify(this.state.todo))
        })
    }
    delItem=(idx)=>{
        //1、state状态不能直接改变或者处理，通过setState改变
        let todo=[...this.state.todo];
        todo.splice(idx,1);
        //2、setState是异步执行
        this.setState((state,props)=>{
            console.log(state.todo);
            return {
                todo: todo
            }
        },()=>{           
            localStorage.setItem('aa',JSON.stringify(this.state.todo))
        })
    }
    handleMove = (idx)=>{
        let todo=[...this.state.todo];
        todo[idx].done=!todo[idx].done;
        this.setState({
            todo:todo
        })
        
    }
    
    //通过setState去改变状态中的值
    render() {
        var w1=0;
        var w2=0;
        for(var i=0;i<this.state.todo.length;i++){
            if(this.state.todo[i].done==false){
                w1++;

            }else{
                w2++;
            }
        }

        return (
            <div>
                <Todoinput1 add={this.additem} />
                <Todoing1 todo={this.state.todo} del={this.delItem} handleMove={this.handleMove} w1={w1} w2={w2}/>
            </div>
        )
    }
}
