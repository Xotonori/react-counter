(this.webpackJsonpexam1=this.webpackJsonpexam1||[]).push([[0],[,,,,,function(e,t,a){e.exports={ParamsCounter:"ParamsCounter_ParamsCounter__V31qo",wrapContainer:"ParamsCounter_wrapContainer__1xRhD"}},function(e,t,a){e.exports={Counter:"Counter_Counter__okz1c",screen:"Counter_screen__2_SPU",max:"Counter_max__2FNy9"}},function(e,t,a){e.exports={Params:"Params_Params__1lHau"}},function(e,t,a){e.exports={Button:"Button_Button__TGJCM",darkBlue:"Button_darkBlue__2D4PZ",darkRed:"Button_darkRed__whnXt"}},function(e,t,a){e.exports={wrapInputParam:"InputParam_wrapInputParam__1KG_C",error:"InputParam_error__1EbBo"}},,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),o=a.n(s);a(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(12),c=a(1),i=a(2),l=a(4),p=a(3),m=(a(19),a(5)),h=a.n(m),f=a(6),V=a.n(f),d=a(8),C=a.n(d),g=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.props.onChangeValue,className:"".concat(C.a.Button," ").concat(C.a[this.props.active]),style:{backgroundColor:this.props.backgroundColor},disabled:this.props.disabled},this.props.name)}}]),a}(r.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.setStartValue,t=this.props.setMaxValue,a=this.props.counter,n=this.props.wrongParams,s=this.props.isDifferentParams();return r.a.createElement("div",{className:"".concat(this.props.propsClassName," ").concat(V.a.Counter)},r.a.createElement("div",{className:"\n                    ".concat(V.a.screen,"\n                    ").concat(a>=t&&!s||n?V.a.max:""),style:{fontSize:s?"24px":""}},n?"incorrect value!":s?r.a.createElement("span",null,"enter values",r.a.createElement("br",null),"and press 'set'"):a),r.a.createElement("div",null,r.a.createElement(g,{disabled:a===t||s,onChangeValue:this.props.incCounter,name:"inc",backgroundColor:"#6fb3ff",active:"darkBlue"}),r.a.createElement(g,{disabled:a===e||s,onChangeValue:this.props.resetCounter,name:"reset",backgroundColor:"#ff5c48",active:"darkRed"})))}}]),a}(r.a.Component),b=a(7),P=a.n(b),_=a(9),w=a.n(_),x=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).changeInputValue=function(t){e.props.changeInputValue(+t.currentTarget.value,t.currentTarget.id)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:w.a.wrapInputParam},r.a.createElement("label",{htmlFor:this.props.id},this.props.labelValue),r.a.createElement("input",{type:"number",value:this.props.inputValue,id:this.props.id,onChange:this.changeInputValue,className:this.props.inputValue<0||this.props.wrongParams?w.a.error:""}))}}]),a}(r.a.Component),O=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.startValue,a=this.props.maxValue,n=this.props.wrongParams;return r.a.createElement("div",{className:"".concat(this.props.propsClassName," ").concat(P.a.Params)},r.a.createElement("div",{className:P.a.wrapInputParam},r.a.createElement(x,{id:"maxValue",labelValue:"max value:",inputValue:a,changeInputValue:this.props.changeInputValue,wrongParams:n}),r.a.createElement(x,{id:"startValue",labelValue:"start value:",inputValue:t,changeInputValue:this.props.changeInputValue,wrongParams:n})),r.a.createElement("div",{className:P.a.wrapButton},r.a.createElement(g,{name:"set",backgroundColor:"#6fb3ff",disabled:a<0||t<0||n,active:"darkBlue",onChangeValue:function(){return e.props.setValues(t,a)}})))}}]),a}(r.a.Component),E=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:h.a.ParamsCounter},r.a.createElement(O,{propsClassName:h.a.wrapContainer,startValue:this.props.state.startValue,maxValue:this.props.state.maxValue,wrongParams:this.props.state.wrongParams,changeInputValue:this.props.changeInputValue,setValues:this.props.setValues}),r.a.createElement(v,{propsClassName:h.a.wrapContainer,counter:this.props.state.counter,setStartValue:this.props.state.setStartValue,setMaxValue:this.props.state.setMaxValue,wrongParams:this.props.state.wrongParams,incCounter:this.props.incCounter,resetCounter:this.props.resetCounter,isDifferentParams:this.props.isDifferentParams}))}}]),a}(r.a.Component),j=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={counter:0,startValue:0,maxValue:0,setStartValue:0,setMaxValue:0,wrongParams:!1},e.saveState=function(){var t=JSON.stringify(e.state);localStorage.setItem("state",t)},e.restoreState=function(){var t=e.state,a=localStorage.getItem("state");a&&(t=JSON.parse(a),e.setState(t))},e.incCounter=function(){e.setState({counter:e.state.counter+1})},e.resetCounter=function(){e.setState({counter:e.state.setStartValue})},e.changeInputValue=function(t,a){e.setState(Object(u.a)({},a,t),(function(){e.isWrongParams(e.state.startValue,e.state.maxValue),e.saveState()}))},e.isWrongParams=function(t,a){+t>=+a||+t<0||+a<0?e.setState({wrongParams:!0}):e.setState({wrongParams:!1})},e.isDifferentParams=function(){return+e.state.startValue!==+e.state.setStartValue||+e.state.maxValue!==+e.state.setMaxValue},e.setValues=function(t,a){e.setState({counter:t,setStartValue:t,setMaxValue:a})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.restoreState()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{state:this.state,incCounter:this.incCounter,resetCounter:this.resetCounter,changeInputValue:this.changeInputValue,setValues:this.setValues,isDifferentParams:this.isDifferentParams}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.5c6d55bf.chunk.js.map