(this["webpackJsonpmagic-ball"]=this["webpackJsonpmagic-ball"]||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},23:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(12),c=n.n(s),i=(n(23),n(13)),o=n(14),l=n(16),u=n(15),m=n(2),h=n(17),f=n(24).create({baseURL:"https://magic-ball-8b0da.firebaseio.com/",timeout:2e3}),g=function(e){return new Promise((function(t,n){f.get("/answers/".concat(e,".json")).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))},d=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={message:'Ask me a "yes or no" question, to know the answer click me.',class:"",prevIndex:0},n.getAnswer=n.getAnswer.bind(Object(m.a)(n)),n.generateIndex=n.generateIndex.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"generateIndex",value:function(){for(var e=Math.floor(23*Math.random()+1);e===this.state.prevIndex;)e=Math.floor(11*Math.random()+1);return this.setState((function(){return{prevIndex:e}})),e}},{key:"getAnswer",value:function(){var e=this,t=this.generateIndex();g(t).then((function(t){setTimeout((function(){e.setState((function(){return{message:t,class:""}}))}),1e3)})).catch((function(t){console.log(t),e.setState((function(){return{message:"Seems like my DB is having an existential crisis after this question, try asking again in a few minutes.",class:""}}))})),this.setState((function(){return{message:"Thinking...",class:"shake"}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:this.state.class,onClick:function(){return e.getAnswer()},id:"externalBall"},r.a.createElement("div",{id:"internalBall"},r.a.createElement("p",{className:"answer"},this.state.message))))}}]),t}(r.a.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Magic Ball"),r.a.createElement("h2",null,"The one and only magic ball that gives you honest answers.")),r.a.createElement(d,null),r.a.createElement("footer",null,r.a.createElement("div",{className:"copyright"},r.a.createElement("p",null,"Created By Alessia Miccoli"),r.a.createElement("p",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://icons8.com/icons/set/fantasy"}," Fantasy icon")," icon by ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://icons8.com"},"Icons8")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b3c34f7c.chunk.js.map