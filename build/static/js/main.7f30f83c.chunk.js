(this["webpackJsonpdiscord-fronend"]=this["webpackJsonpdiscord-fronend"]||[]).push([[0],{120:function(e,a,n){},121:function(e,a,n){},122:function(e,a,n){},128:function(e,a,n){},129:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),r=n(17),l=n.n(r),s=(n(84),n(85),n(19)),o=n.n(s),i=n(26),u=n(33),m=(n(87),n(36)),d=n.n(m),p=n(58),f=n.n(p),h=n(12),E=n(24),v=Object(E.b)({name:"app",initialState:{channelId:null,channelName:null},reducers:{setChannelInfo:function(e,a){e.channelId=a.payload.channelId,e.channelName=a.payload.channelName}}}),b=v.actions.setChannelInfo,g=function(e){return e.app.channelId},_=function(e){return e.app.channelName},N=v.reducer,w=(n(91),function(e){var a=e.id,n=e.channelName,t=Object(h.b)();return c.a.createElement("div",{className:"sidebarChannel",onClick:function(){return t(b({channelId:a,channelName:n}))}},c.a.createElement("h4",null,c.a.createElement("span",{className:"sidebarChannel__hash"},"#"),n))}),j=n(59),O=n.n(j),I=n(60),y=n.n(I),S=n(61),k=n.n(S),C=n(143),x=n(62),z=n.n(x),H=n(63),A=n.n(H),B=n(64),D=n.n(B),L=Object(E.b)({name:"user",initialState:{user:null},reducers:{login:function(e,a){e.user=a.payload},logout:function(e){e.user=null}}}),M=L.actions,U=M.login,W=M.logout,J=function(e){return e.user.user},R=L.reducer,V=n(29),F=n.n(V),G=(F.a.initializeApp({apiKey:"AIzaSyChHWrB9lcrSptycjXGYIA6Er6oVJ30hFE",authDomain:"discord-mern-clone-997bc.firebaseapp.com",projectId:"discord-mern-clone-997bc",storageBucket:"discord-mern-clone-997bc.appspot.com",messagingSenderId:"1011297271904",appId:"1:1011297271904:web:071d18086ecf134d074305"}).firestore(),F.a.auth()),P=new F.a.auth.GoogleAuthProvider,Y=n(54),K=n.n(Y).a.create({baseURL:"https://discord-app-mern.herokuapp.com"}),T=n(35),X=n.n(T),$=new X.a("90188229a21cc6e13176",{cluster:"ap2"}),q=function(){var e=Object(h.c)(J),a=Object(t.useState)([]),n=Object(u.a)(a,2),r=n[0],l=n[1];console.log(r);var s=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hiiiiii"),e.next=3,K.get("/get/channelList");case 3:a=e.sent,l(a.data),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(t.useEffect)((function(){s(),$.subscribe("channel").bind("newChannel",(function(e){s()}))}),[]);var m=function(){var e=Object(i.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!(n=prompt("Enter a new channel name"))){e.next=6;break}return e.next=5,K.post("/new/channel",{channelName:n});case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__top"},c.a.createElement("h3",null,"SUVA DULEY"),c.a.createElement(d.a,null)),c.a.createElement("div",{className:"sidebar__channels"},c.a.createElement("div",{className:"sidebar__channelsHeader"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(d.a,null),c.a.createElement("h4",null,"Text Channels")),c.a.createElement(f.a,{onClick:m,className:"sidebar__addChannel"})),c.a.createElement("div",{className:"sidebar__channelsList"},r.map((function(e){return c.a.createElement(w,{key:e.id,id:e.id,channelName:e.name})})))),c.a.createElement("div",{className:"sidebar__voice"},c.a.createElement(O.a,{className:"sidebar__voiceIcons",fontSize:"large"}),c.a.createElement("div",{className:"sidebar__voiceInfo"},c.a.createElement("h3",null,"Voice Connected"),c.a.createElement("p",null,"Stream")),c.a.createElement("div",{className:"sidebar__voiceIcons"},c.a.createElement(y.a,null),c.a.createElement(k.a,null))),c.a.createElement("div",{className:"sidebar__profile"},c.a.createElement(C.a,{src:e.photo,onClick:function(){return G.signOut()}}),c.a.createElement("div",{className:"sidebar__profileInfo"},c.a.createElement("h3",null,e.displayName),c.a.createElement("p",null,"#",e.uid.substring(0,5))),c.a.createElement("div",{className:"sidebar__profileIcons"},c.a.createElement(z.a,null),c.a.createElement(A.a,null),c.a.createElement(D.a,null))))},Q=(n(120),n(121),n(65)),Z=n.n(Q),ee=n(66),ae=n.n(ee),ne=n(67),te=n.n(ne),ce=n(68),re=n.n(ce),le=n(69),se=n.n(le),oe=n(70),ie=n.n(oe),ue=function(e){var a=e.channelName;return c.a.createElement("div",{className:"chatHeader"},c.a.createElement("div",{className:"chatHeader__left"},c.a.createElement("h3",null,c.a.createElement("span",{className:"chatHeader__hash"},"#"),a)),c.a.createElement("div",{className:"chatHeader__right"},c.a.createElement(Z.a,null),c.a.createElement(ae.a,null),c.a.createElement(te.a,null),c.a.createElement("div",{className:"chatHeader__search"},c.a.createElement("input",{type:"text",placeholder:"Search"}),c.a.createElement(re.a,null)),c.a.createElement(se.a,null),c.a.createElement(ie.a,null)))},me=n(72),de=n.n(me),pe=n(73),fe=n.n(pe),he=n(74),Ee=n.n(he),ve=n(75),be=n.n(ve),ge=(n(122),n(123),n(125),n(76)),_e=Object(t.forwardRef)((function(e,a){var n=e.timestamp,t=e.user,r=e.message;return c.a.createElement("div",{ref:a,className:"message"},c.a.createElement(C.a,{src:null===t||void 0===t?void 0:t.photo}),c.a.createElement("div",{className:"message__info"},c.a.createElement("h4",null,null===t||void 0===t?void 0:t.displayName,c.a.createElement("span",{className:"message__timestamp"},ge.a(n))),c.a.createElement("p",null,r)))})),Ne=n(71),we=new X.a("90188229a21cc6e13176",{cluster:"ap2"}),je=function(){var e=Object(h.c)(J),a=Object(h.c)(g),n=Object(h.c)(_),r=Object(t.useState)(""),l=Object(u.a)(r,2),s=l[0],m=l[1],d=Object(t.useState)([]),p=Object(u.a)(d,2),f=p[0],E=p[1];console.log("messa---\x3e",f);var v=function(){var e=Object(i.a)(o.a.mark((function e(a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("get/messages?id=".concat(a));case 2:n=e.sent,E(n.data[0].conversation);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(t.useEffect)((function(){if(a){v(a);var e=we.subscribe("message");return e.bind("newMessage",(function(e){v(a)})),function(){e.unbind_all(),e.unsubscribe()}}}),[a]);var b=function(){var n=Object(i.a)(o.a.mark((function n(t){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),console.log("sendmeasass"),n.next=4,K.post("/new/message?id=".concat(a),{message:s,timestamp:Date.now(),user:e});case 4:n.sent,m("");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return c.a.createElement("div",{className:"chat"},c.a.createElement(ue,{channelName:n}),c.a.createElement("div",{className:"chat__messages"},f.map((function(e){console.log(e)})),c.a.createElement(Ne.a,null,f.map((function(e){return c.a.createElement(_e,{message:e.message,timestamp:e.timestamp,user:e.user})})))),c.a.createElement("div",{className:"chat__input"},c.a.createElement(de.a,{fontSize:"large"}),c.a.createElement("form",null,c.a.createElement("input",{type:"text",disabled:!a,value:s,onChange:function(e){return m(e.target.value)},placeholder:"Message #".concat(n)}),c.a.createElement("button",{className:"chat__inputButton",onClick:b,disabled:!a,type:"submit"},"Send Message")),c.a.createElement("div",{className:"chat__inputIcon"},c.a.createElement(fe.a,{fontSize:"large"}),c.a.createElement(Ee.a,{fontSize:"large"}),c.a.createElement(be.a,{fontSize:"large"}))))},Oe=n(142),Ie=(n(128),function(){return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__logo"},c.a.createElement("img",{src:"https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png",alt:"discord logo"})),c.a.createElement(Oe.a,{onClick:function(){G.signInWithPopup(P).catch((function(e){return alert(e.message)}))}},"Sign In"))});var ye=function(){var e=Object(h.b)(),a=Object(h.c)(J);return Object(t.useEffect)((function(){G.onAuthStateChanged((function(a){console.log(a),e(a?U({uid:a.uid,photo:a.photoURL,email:a.email,displayName:a.displayName}):W())}))}),[e]),console.log(a),c.a.createElement("div",{className:"app"},a?c.a.createElement(c.a.Fragment,null,c.a.createElement(q,null),c.a.createElement(je,null)):c.a.createElement(Ie,null))},Se=Object(E.a)({reducer:{user:R,app:N}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h.a,{store:Se},c.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},79:function(e,a,n){e.exports=n(129)},84:function(e,a,n){},85:function(e,a,n){},87:function(e,a,n){},91:function(e,a,n){}},[[79,1,2]]]);
//# sourceMappingURL=main.7f30f83c.chunk.js.map