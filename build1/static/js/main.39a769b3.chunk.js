(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),s=a.n(l),r=a(2),i=a(3),m=a(5),o=a(4),u=a(6),p=a(1);function d(){return c.a.createElement("div",{className:"header"},c.a.createElement("header",null,c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:""}),c.a.createElement("div",{style:{float:"right"}},c.a.createElement(p.b,{to:"/home"},"\u9996\u9875"),c.a.createElement(p.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),c.a.createElement(p.b,{to:"/api"},"API"),c.a.createElement(p.b,{to:"/about"},"\u5173\u4e8e"),c.a.createElement(p.b,null,"\u6ce8\u518c"),c.a.createElement(p.b,{to:"/login"},"\u767b\u5f55"))))}var h=a(11),E=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?page="+t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?page="+n).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data})}))}}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"bac"},c.a.createElement("ul",{className:"slider"},c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/all"},"\u5168\u90e8")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/jh"},"\u7cbe\u534e")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/share"},"\u5206\u4eab")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/ask"},"\u95ee\u7b54")),c.a.createElement("li",{className:"slider1"},"\u62db\u8058"),c.a.createElement("li",{className:"slider1"},"\u5ba2\u6237\u7aef\u6d4b\u8bd5")),this.state.data.map((function(e){return c.a.createElement("div",{className:"block",key:e.id},c.a.createElement("img",{className:"image",src:e.author.avatar_url}),c.a.createElement("span",{className:"spana"},e.reply_count,"/",e.visit_count),c.a.createElement("span",{className:"spanb"}," \u7f6e\u9876 "),c.a.createElement(p.b,{to:"/text/"+e.id},c.a.createElement("span",null,e.title)))})),c.a.createElement("ul",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return c.a.createElement("li",{className:"little",key:e.id},c.a.createElement(p.c,{to:"/home/"+e},e))})))))}}]),t}(n.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Api")}}]),t}(n.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"About")}}]),t}(n.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Start")}}]),t}(n.Component),j=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=good&page="+t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=good&page="+n).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data})}))}}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"bac"},c.a.createElement("ul",{className:"slider"},c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/all"},"\u5168\u90e8")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/jh"},"\u7cbe\u534e")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/share"},"\u5206\u4eab")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/ask"},"\u95ee\u7b54")),c.a.createElement("li",{className:"slider1"},"\u62db\u8058"),c.a.createElement("li",{className:"slider1"},"\u5ba2\u6237\u7aef\u6d4b\u8bd5")),this.state.data.map((function(e){return c.a.createElement("div",{className:"block",key:e.id},c.a.createElement("img",{className:"image",src:e.author.avatar_url}),c.a.createElement("span",{className:"spana"},e.reply_count,"/",e.visit_count),c.a.createElement("span",{className:"spanb"}," \u7f6e\u9876 "),c.a.createElement(p.b,{to:"/text/"+e.id},c.a.createElement("span",null,e.title)))})),c.a.createElement("ul",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return c.a.createElement("li",{className:"little",key:e.id},c.a.createElement(p.b,{to:"/jh/"+e},e))})))))}}]),t}(n.Component),N=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=all&page="+t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=all&page="+n).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data})}))}}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"bac"},c.a.createElement("ul",{className:"slider"},c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/all"},"\u5168\u90e8")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/jh"},"\u7cbe\u534e")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/share"},"\u5206\u4eab")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/ask"},"\u95ee\u7b54")),c.a.createElement("li",{className:"slider1"},"\u62db\u8058"),c.a.createElement("li",{className:"slider1"},"\u5ba2\u6237\u7aef\u6d4b\u8bd5")),this.state.data.map((function(e){return c.a.createElement("div",{className:"block",key:e.id},c.a.createElement("img",{className:"image",src:e.author.avatar_url}),c.a.createElement("span",{className:"spana"},e.reply_count,"/",e.visit_count),c.a.createElement("span",{className:"spanb"}," \u7f6e\u9876 "),c.a.createElement(p.b,{to:"/text/"+e.id},c.a.createElement("span",null,e.title)))})),c.a.createElement("ul",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return c.a.createElement("li",{className:"little",key:e.id},c.a.createElement(p.b,{to:"/all/"+e},e))})))))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=share&page="+t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=share&page="+n).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data})}))}}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"bac"},c.a.createElement("ul",{className:"slider"},c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/all"},"\u5168\u90e8")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/jh"},"\u7cbe\u534e")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/share"},"\u5206\u4eab")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/ask"},"\u95ee\u7b54")),c.a.createElement("li",{className:"slider1"},"\u62db\u8058"),c.a.createElement("li",{className:"slider1"},"\u5ba2\u6237\u7aef\u6d4b\u8bd5")),this.state.data.map((function(e){return c.a.createElement("div",{className:"block",key:e.id},c.a.createElement("img",{className:"image",src:e.author.avatar_url}),c.a.createElement("span",{className:"spana"},e.reply_count,"/",e.visit_count),c.a.createElement("span",{className:"spanb"}," \u7f6e\u9876 "),c.a.createElement(p.b,{to:"/text/"+e.id},c.a.createElement("span",null,e.title)))})),c.a.createElement("ul",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return c.a.createElement("li",{className:"little",key:e.id},c.a.createElement(p.b,{to:"/share/"+e},e))})))))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=ask&page="+t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?tab=ask&page="+n).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data})}))}}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"bac"},c.a.createElement("ul",{className:"slider"},c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/all"},"\u5168\u90e8")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/jh"},"\u7cbe\u534e")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/share"},"\u5206\u4eab")),c.a.createElement("li",{className:"slider1"},c.a.createElement(p.b,{to:"/ask"},"\u95ee\u7b54")),c.a.createElement("li",{className:"slider1"},"\u62db\u8058"),c.a.createElement("li",{className:"slider1"},"\u5ba2\u6237\u7aef\u6d4b\u8bd5")),this.state.data.map((function(e){return c.a.createElement("div",{className:"block",key:e.id},c.a.createElement("img",{className:"image",src:e.author.avatar_url}),c.a.createElement("span",{className:"spana"},e.reply_count,"/",e.visit_count),c.a.createElement("span",{className:"spanb"}," \u7f6e\u9876 "),c.a.createElement(p.b,{to:"/text/"+e.id},c.a.createElement("span",null,e.title)))})),c.a.createElement("ul",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return c.a.createElement("li",{className:"little",key:e.id},c.a.createElement(p.b,{to:"/ask/"+e},e))})))))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={data:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topics?&page="+t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"bac"},c.a.createElement("ul",{className:"slider"},c.a.createElement("li",{className:"slider1"},"\u4e3b\u9875"),c.a.createElement("li",{className:"slider1"},"\u767b\u5f55")),c.a.createElement("div",{className:"box"},c.a.createElement("p",null,"\u7528\u6237\u540d\uff1a",c.a.createElement("input",null)),c.a.createElement("p",null,"\u5bc6\u7801 \uff1a",c.a.createElement("input",null)),c.a.createElement("button",{className:"btn"},c.a.createElement(p.b,{to:"/home"},"\u767b\u5f55")))))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={data:{author:{}}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topic/"+t).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t.data})}))}},{key:"render",value:function(){return console.log(this.state.data),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",{className:"bab"},c.a.createElement("span",{className:"topic_full_title"},c.a.createElement("h1",null,c.a.createElement("span",{className:"put_top"},"\u7f6e\u9876"),this.state.data.title),c.a.createElement("span",null," \xb7 \u53d1\u5e03\u4e8e6\u4e2a\u6708\u524d "),c.a.createElement("span",null," \xb7 \u4f5c\u8005\uff1a",this.state.data.author.loginname," "),c.a.createElement("span",null," \xb7 ",this.state.data.visit_count,"\u6b21\u6d4f\u89c8 "),c.a.createElement("span",null," \xb7 \u6765\u81ea\u5206\u4eab")),c.a.createElement("div",{className:"bab",dangerouslySetInnerHTML:{__html:this.state.data.content}}))))}}]),t}(n.Component),_=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement(d,null)),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"left"},c.a.createElement(h.a,{exact:!0,path:"/home",component:E}),c.a.createElement(h.a,{path:"/start",component:f}),c.a.createElement(h.a,{path:"/api",component:b}),c.a.createElement(h.a,{path:"/about",component:v}),c.a.createElement(h.a,{path:"/login",component:k}),c.a.createElement(h.a,{exact:!0,path:"/jh",component:j}),c.a.createElement(h.a,{exact:!0,path:"/all",component:N}),c.a.createElement(h.a,{exact:!0,path:"/share",component:g}),c.a.createElement(h.a,{exact:!0,path:"/ask",component:O}),c.a.createElement(h.a,{exact:!0,path:"/home/:id",component:E}),c.a.createElement(h.a,{exact:!0,path:"/jh/:id",component:j}),c.a.createElement(h.a,{exact:!0,path:"/all/:id",component:N}),c.a.createElement(h.a,{exact:!0,path:"/share/:id",component:g}),c.a.createElement(h.a,{exact:!0,path:"/ask/:id",component:O}),c.a.createElement(h.a,{exact:!0,path:"/text/:id",component:y})),c.a.createElement("div",{className:"right"})))}}]),t}(n.Component);a(32);s.a.render(c.a.createElement(_,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.39a769b3.chunk.js.map