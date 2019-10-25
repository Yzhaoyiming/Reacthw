import React from 'react';
import ReactDOM from 'react-dom';
import ShowTime from './Showtime';
import './index.css';
// import Todolist from './Todolist1/Todolist';
import Todolist from './Todolist/Todolist';

import Request from './Request';
import Parent from './Context/Parent';
import {con,con2} from './Context/Context'
import Hoc from './Hoc/Hoc'
import Portal from './Portal/Portal'
import ParentPortal from './Portal/ParentPortal';
import App from './App1';


//Context:
//1、生成Context,可写在一个js文件中，export导出
//2、在根组件import Provider,并配置上Provider，加上value属性
//3、在需要获取数据的组件，import Consumer去配置Consumer
//Consumer组件是个函数，函数的参数是传过来的value值


// 函数声明组件
// function ShowTime(props){
//     console.log(props);
//     return (<Fragment>
//                 <div>{props.name}{props.age}</div>
//                 <div>
//                     {new Date().toLocaleString()}
//                 </div>
//             </Fragment>
//         )
// }

// class ShowTime extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             time:new Date().toLocaleString(),
//             a:100,
//             b:200
//         }
//         setInterval(()=>{
//             this.setState({
//                 time:new Date().toLocaleString()
//             })
//         });
//     }
//     render(){
//         var {name,age}=this.props;
//         return(
//             <Fragment>
//                 {/**条件渲染 */}
//                 {name.length>5?<div>姓名：{name}</div>:''}
//                 <div>状态：{this.state.time}</div>
                
//                 {/**循环渲染 */}
//                 <div>
//                     {
//                         age.map((item,index)=>{
//                             if(index%2 === 0){
//                                 return <p key={index}>{item}</p>
//                             }
//                         })
//                     }

//                 </div>
//             </Fragment>
//         )
//     }
        
// }
//声明一个对象

let id=1234;
//组件交互
//父组件--》子组件，调用子组件时添加属性，子组件通过props拿到传递的值
//子组件--》父组件，
ReactDOM.render(
    <Todolist/>,//可以看见他的效果，被他引的js文件也可以看见-----此位置写根组件或者根路由
    // <Request/>,
    // <con.Provider value={id}>
    //     <Parent/>
    // </con.Provider>,
    // <Hoc/>,
    // <Portal/>,
    // <ParentPortal/>,
    // <App/>,

    document.getElementById("root")
)

// var num = [1,2,3,4,5];
// ReactDOM.render(
//     <ShowTime age={num} name="zhangsan"/>,
//     document.getElementById('root')
// )




// //显示当前系统的时间
// function showTime(){
//     var ele=<div>{new Date().toLocaleString()}</div>;
//     ReactDOM.render(
//         ele,
//         document.querySelector("#root")
//     );

// }
// showTime();
// setInterval(showTime,1000);





//react技术栈
//jsx的语法
var str='react';
var obj = {
    type: 'div',
    props: {
        id: 'box',
        class: 'box',
        children: [
            'hello',
            'react',
            {
                type: 'h1',
                props: {
                    id: 'tit',
                    class: 'tit',
                    children: [
                        'title',
                        'react'
                    ]
                }
            }
        ]
    }
}
function render(obj,container){
    var{type,props}=obj;
    //文档碎片:一个虚拟结点，所有操作处理结束后再统一进行添加
    var fragment=document.createDocumentFragment();
    var ele=document.createElement(type);
    for(var item in props){
        if(item==='class'){
            ele.className=props[item]
        }else if(item==='children'){//递归
            for(var i=0;i<props.children.length;i++){
                // ele.innerHTML+=props.children[i];
                if(typeof props.children[i]==='object'){
                    render(props.children[i],ele)
                }else{
                    var txt=document.createTextNode(props.children[i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item]=props[item];
        }
    }
    fragment.appendChild(ele);
    container.appendChild(fragment);
}
// render(obj,document.getElementById('root'));
// var ele=<h1 class="tit">hello{str}</h1>;//是一个对象........和下面这个是等价的

// var ele=React.createElement(
//     'h1',
//     {id:'tit',class:'title'},
//     'hello',
//     React.createElement(
//         'h6',
//         {id:'tit',class:'title'},
//         'react')
//     );
// ReactDOM.render(ele, document.getElementById('root'));

//页面渲染过程
//请求Html页面-》浏览器HTML解析器解析html文件-》生成DOM树
//link引入css文件，css解析器解析css，生成css对象模型（CSSOM）和DOM树结合生成一个render tree渲染树

//页面回流（重排reflow）：DOM结构发生变化，内容变化，大小位置变化，都会引起页面回流，代价大
//页面重绘（repaint）：颜色的变化（背景色、字体颜色、边框颜色），引起重绘，代价比较小
// 1、先用变量进行dom处理，最后一次渲染
//console.time('time');
var div=document.getElementById("root");
// var str=''
// for(var i=0;i<100;i++){
//     str+='<p>'+i+'</p>';
// }
// div.innerHTML=str;
// console.timeEnd('time');
//2、对于样式的处理,声明一个css类
// var div=document.getElementById('root');
//不建议如下处理
// div.style.width='100px';
// div.style.height='100px';
// div.style.background='red';
//建议这样处理：
// .active{
//     width:100px;
//     height:100px;
//     background:red;
// }
// div.className="active";

// 3、offsetLeft、offsetWidth等都会引起回流，要慎用
// console.log(div.offsetLeft);
// var wid = div.offsetWidth;
// setInterval(()=>{
//     wid += 1;
//     div.style.width = wid + 'px';
// },100)
// 4、文档碎片（内存中的一个变量）



