(this.webpackJsonpmemegenerator=this.webpackJsonpmemegenerator||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(3),r=a.n(m);var o=function(){return l.a.createElement("header",null,l.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"Problem?"}),l.a.createElement("p",null,"Meet the meme generator!!!"))},c=a(4),s=a(5),h=a(6),i=a(1),u=a(8),p=a(7),d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={topText:"",bottomText:"",randomImage:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(i.a)(e)),e.handleMemGen=e.handleMemGen.bind(Object(i.a)(e)),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})}))}},{key:"handleMemGen",value:function(e){var t=this,a=this.state.allMemeImgs[Math.floor(Math.random()*t.state.allMemeImgs.length)].url;this.setState({randomImage:a}),e.preventDefault()}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"meme-form",onSubmit:this.handleMemGen},l.a.createElement("input",{type:"text",name:"topText",value:this.state.topText,onChange:this.handleChange,placeholder:"Top Text"}),l.a.createElement("input",{type:"text",name:"bottomText",value:this.state.bottomText,onChange:this.handleChange,placeholder:"Bottom Text"}),l.a.createElement("button",null,"Gen")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImage,alt:""}),l.a.createElement("h2",{className:"top"},this.state.topText),l.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),a}(n.Component);var g=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(d,null))};a(14);r.a.render(l.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.096824aa.chunk.js.map