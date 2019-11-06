import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            data: {
                author:{}
            }
        }
    }
    componentDidMount(){
        let page=this.props.match.params.id;

        fetch('https://cnodejs.org/api/v1/topic/'+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data
                });
            })
    }
    render(){
        console.log(this.state.data)
        return (
        
            <div>                    
                <div>                                                
                            <div className='bab'>
                                <span className='topic_full_title'>
                                  
                                    <h1><span className='put_top'>置顶</span>{this.state.data.title}</h1>
                                    <span> · 发布于6个月前 </span>
                                    <span> · 作者：{this.state.data.author.loginname} </span>
                                    <span> · {this.state.data.visit_count}次浏览 </span>
                                    <span> · 来自分享</span>


                                </span>
                                
                                <div className='bab' dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>

                            </div>   
                                                
                      
                </div>
                               
            </div>
        )
    }
}
      
