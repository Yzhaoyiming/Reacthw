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
        fetch('https://cnodejs.org/api/v1/topics?tab=good&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page=this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?tab=good&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data: res.data
                    });
            })

        }
        
    }
    render(){
        return (
            <div>                    
                <div className='bac'>
                    <ul className='slider'>
                        <li className='slider1'><Link to='/all'>全部</Link></li>
                        <li className='slider1'><Link to='/jh'>精华</Link></li>
                        <li className='slider1'><Link to='/share'>分享</Link></li>
                        <li className='slider1'><Link to='/ask'>问答</Link></li>
                        <li className='slider1'>招聘</li>
                        <li className='slider1'>客户端测试</li>
                    </ul>
                    {
                        this.state.data.map((item)=>(
                            <div className='block' key={item.id}>
                                <img className='image' src={item.author.avatar_url} />
                                <span className='spana'>{item.reply_count}/{item.visit_count}</span>
                                <span className='spanb'> 置顶 </span>
                                <Link to={'/text/'+item.id}><span>{item.title}</span></Link>
                               
                            </div>                       
                        ))
                    }
                    <ul>
                    {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                        
                            <li className='little' key={item.id}>
                                <Link to={'/jh/'+item}>{item}</Link>
                            </li>
                                                
                    ))
                }
                </ul>
                </div>
                               
            </div>
        )
    }
}
      
