(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{142:function(e,a,t){e.exports=t(355)},147:function(e,a,t){},148:function(e,a,t){},355:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),l=t(135),c=t.n(l),r=(t(147),t(136)),i=t(137),o=t(54),m=t(140),d=t(141),h=(t(148),t(138));function v(){var e,a,t,n,s,l,c=Math.PI,r=Math.cos,i=Math.sin,o=Math.abs,m=Math.random,d=2*c,h=function(e){return e*m()},v=function(){var e;for(n=new Float32Array(1200),s=new window.SimplexNoise,l=220,e=0;e<1200;e+=8)u(e)},u=function(e){var a,c,o,m,v,u,E,p,g,w;a=h(t.a.width),c=h(t.a.height),o=s.noise3D(.0015*a,.0015*c,.0015*l),m=h(d),u=(v=.1+h(1))*r(m),E=v*i(m),p=150+h(200),g=100+h(200),w=l+60*o,n.set([a,c,u,E,0,p,g,w],e)},E=function(e){var a,t,s,l,c,r,i,o,m=1+e,d=2+e,h=3+e,v=4+e,E=5+e,w=6+e,N=7+e;a=n[e],t=n[m],s=n[d],l=n[h],c=n[v],r=n[E],i=n[w],o=n[N],p(a,t,c,r,i,o),c++,n[e]=a+s,n[m]=t+l,n[v]=c,(g(a,t,i)||c>r)&&u(e)},p=function(a,t,n,s,l,c){e.a.save(),e.a.fillStyle="hsla(".concat(c,",60%,30%,").concat(function(e,a){var t=.5*a;return o((e+t)%a-t)/t}(n,s),")"),e.a.beginPath(),e.a.arc(a,t,l,0,d),e.a.fill(),e.a.closePath(),e.a.restore()},g=function(e,a,n){return e<-n||e>t.a.width+n||a<-n||a>t.a.height+n},w=function(){a=document.querySelector(".wrapper-canvas"),(t={a:document.createElement("canvas"),b:document.createElement("canvas")}).b.style="\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            ",a.appendChild(t.b),e={a:t.a.getContext("2d"),b:t.b.getContext("2d")}},N=function(){var a=window,n=a.innerWidth,s=a.innerHeight;t.a.width=n,t.a.height=s,e.a.drawImage(t.b,0,0),t.b.width=n,t.b.height=s,e.b.drawImage(t.a,0,0)},f=function a(){e.a.clearRect(0,0,t.a.width,t.a.height),e.b.fillStyle="hsla(0,0%,5%,1)",e.b.fillRect(0,0,t.b.width,t.b.height),function(){var e;for(l++,e=0;e<1200;e+=8)E(e)}(),e.b.save(),e.b.filter="blur(50px)",e.b.drawImage(t.a,0,0),e.b.restore(),window.requestAnimationFrame(a)};window.addEventListener("load",(function(){w(),N(),v(),f()})),window.addEventListener("resize",N)}var u=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).drawBackground=v,n.handlePageChange=function(e){n.setState({currentPage:e})},n.state={currentPage:null,qrCodeShow:!1,isSafari:!1},n.handlePageChange=n.handlePageChange.bind(Object(o.a)(n)),n.showQrCOde=n.showQrCOde.bind(Object(o.a)(n)),n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad),this.setState({isSafari:navigator.userAgent.match(/(iPod|iPhone|iPad)/)&&navigator.userAgent.match(/AppleWebKit/)||void 0!==window.safari}),this.drawBackground()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.handleLoad)}},{key:"showQrCOde",value:function(){this.setState({qrCodeShow:!this.state.qrCodeShow})}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"wrapper-canvas"}),s.a.createElement("div",{className:this.state.isSafari?"safari-filter active":"safari-filter"}),s.a.createElement("div",{className:"wrapper-content"},s.a.createElement("div",{className:"border"},s.a.createElement("span",null)),s.a.createElement("div",{className:"content"},s.a.createElement(h.a,{containerHeight:"100%",containerWidth:"100%",pageOnChange:this.handlePageChange,customPageNumber:this.state.currentPage},s.a.createElement("div",{className:"item one"},s.a.createElement("div",{className:this.state.qrCodeShow?"block hidden":"block"},s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"top"},s.a.createElement("div",{className:"top-one"},s.a.createElement("span",{className:"el one"},"nikolai")),s.a.createElement("div",{className:"top-two"},s.a.createElement("span",{className:"el one"},"Koshkarov"))),s.a.createElement("div",{className:"bot"},s.a.createElement("div",{className:"bot-one"},s.a.createElement("span",{className:"el one visible"},"frontend"),s.a.createElement("span",{className:"el two"},"\u20a3\u2c64\xd8\u20a6\u20ae\u0246\u20a6\u0110"),s.a.createElement("span",{className:"el three"},"\u4e4d\u5c3a\u56de\u51e0\u535e\u30e8\u51e0\u53e5"),s.a.createElement("span",{className:"el four"},"F\u042f\u04e8\u041f\u01ac\u03a3\u041fD")),s.a.createElement("div",{className:"bot-two"},s.a.createElement("span",{className:"el one"},"engineer")))),s.a.createElement("div",{className:"links"},s.a.createElement("div",{className:"link"},s.a.createElement("a",{className:"telega",href:"https://t.me/koshkarovnik",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("span",{className:"full"},"Telegram"),s.a.createElement("span",{className:"short"},"Tg"))),s.a.createElement("div",{className:"link"},s.a.createElement("a",{className:"gmail",href:"mailto:koshkarovnik@gmail.com"},"Mail")),s.a.createElement("div",{className:"link"},s.a.createElement("a",{className:"github",href:"https://github.com/kolinscript",target:"_self",rel:"noopener noreferrer"},"Git"))),s.a.createElement("div",{className:"cta"},"scroll down")),s.a.createElement("div",{className:this.state.qrCodeShow?"qr-code show":"qr-code"},s.a.createElement("a",{className:"code",onClick:this.showQrCOde}))),s.a.createElement("div",{className:"item two"},s.a.createElement("div",{className:"block"},s.a.createElement("h1",null,"skills"),s.a.createElement("div",{className:"about"},s.a.createElement("div",{className:"text"},"More than a 4 years experience in web developing, participating and creating web applications, stores, sites and landing pages for big and small customers in several companies. Focused on ",s.a.createElement("span",{className:"angular"},"Angular")," (about 3+ years exp.) or ",s.a.createElement("span",{className:"react"},"React")," projects, i write clean, high-performance code.")),s.a.createElement("div",{className:"icon-dev"}),s.a.createElement("div",{className:"skills-block"},s.a.createElement("div",{className:"skill"},s.a.createElement("div",{className:"s-title"},"Java Script"),s.a.createElement("div",{className:"s-icon"})),s.a.createElement("div",{className:"skill"},s.a.createElement("div",{className:"s-title"},"HTML"),s.a.createElement("div",{className:"s-icon"})),s.a.createElement("div",{className:"skill"},s.a.createElement("div",{className:"s-title"},"CSS"),s.a.createElement("div",{className:"s-icon"}))))),s.a.createElement("div",{className:"item fish"},"\ud83d\udea7",s.a.createElement("span",{className:"title"},"CAUTION"),s.a.createElement("span",{className:"subtitle"},"the page is under construction")))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.c8c0cd83.chunk.js.map