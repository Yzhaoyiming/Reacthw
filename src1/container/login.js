import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page=this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data
                });
            })
    }
    render(){
        return (
            <div>                    
                <div className='bac'>
                    <ul className='slider'>
                        <li className='slider1'>主页</li>
                        <li className='slider1'>登录</li>
                        
                    </ul>
                    <div className='box'>
                        <p>用户名：<input/></p>
                        <p>密码 ：<input/></p>
                        <button className='btn'><Link to='/home'>登录</Link></button>
                    </div>
                </div>
                               
            </div>
        )
    }
}
      
