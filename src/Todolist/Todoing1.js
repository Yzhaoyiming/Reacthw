import React, { Component } from 'react'
import PropTypes from 'prop-types';
import $ from 'jquery'


export default class Todoing extends Component {
    

    render() {
        //解构赋值
        var{todo}=this.props;
        return (
            //从父组件往子组件传  
        <div>                                 
            <ul>
                <p>正在进行:{this.props.w1}</p>
               
                {
                    todo.map((item,idx)=>{
                        if(item.done==false){
                            return (
                                <li key={idx}>
                                    <input type="checkbox" onClick={()=>this.props.handleMove(idx)}></input>
                                    {item.title}---<button onClick={()=>this.props.del(idx)}>删除</button>
                                </li>
                            )
                        }

                    })
                    
                }
            </ul>
            <ul>
                <p>已经完成:{this.props.w2}</p>
               
                {
                    todo.map((item,idx)=>{
                        if(item.done==true){
                            return (
                                <li key={idx}>
                                    <input type="checkbox" onClick={()=>this.props.handleMove(idx)} checked={true}></input>
                                    {item.title}---<button onClick={()=>this.props.del(idx)}>删除</button>
                                </li>
                            )
                        }

                    })
                   
                }
            </ul>
            </div> 
            
                    
        )
    }
}
//这里需要引入protoType的包
Todoing.propTypes = {
    todo: PropTypes.array,
    del: PropTypes.func
}
//设置默认值
Todoing.defaultProps={
    todo:[1,2,3,4,4]
}