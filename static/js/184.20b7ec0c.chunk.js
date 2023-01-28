"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[184],{1184:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,o,i,a,s,x,p,l,c,d,h,m,u,f=t(5861),g=t(9439),b=t(7757),v=t.n(b),Z=t(3263),w=t(1087),j=t(7689),k=t(2791),P=t(168),y=t(6444),_=y.ZP.div(r||(r=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),U=y.ZP.div(o||(o=(0,P.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),C=y.ZP.button(i||(i=(0,P.Z)(["\n  align-items: center;\n  appearance: none;\n  margin-bottom: 10px;\n  background-image: radial-gradient(\n    100% 100% at 100% 0,\n    #c0d0d5 0,\n    #6b79e0 100%\n  );\n  border: 0;\n  border-radius: 6px;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: 'JetBrains Mono', monospace;\n  height: 30px;\n  justify-content: center;\n  line-height: 1;\n  list-style: none;\n  overflow: hidden;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: relative;\n  text-align: left;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 18px;\n  margin-top: 10px;\n\n  :focus {\n    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;\n  }\n\n  :hover {\n    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;\n    transform: translateY(-2px);\n  }\n\n  :active {\n    box-shadow: #3c4fe0 0 3px 7px inset;\n    transform: translateY(2px);\n  }\n"]))),O=y.ZP.div(a||(a=(0,P.Z)(["\n  margin-right: 10px;\n"]))),Y=y.ZP.img(s||(s=(0,P.Z)(["\n  padding: 5px;\n  border-radius: 4px;\n  box-shadow: rgb(106 74 74 / 16%) 0px 1px 4px;\n  width: 100%;\n  margin-right: 10px;\n"]))),z=y.ZP.div(x||(x=(0,P.Z)(["\n  width: 380px;\n  border: 1px solid black;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  background-color: #a2bbe8;\n"]))),B=y.ZP.h2(p||(p=(0,P.Z)(["\n  margin: 0 auto;\n  margin-top: 5px;\n  margin-bottom: 15px;\n"]))),G=y.ZP.h3(l||(l=(0,P.Z)(["\n  margin: 0 auto;\n  margin-bottom: 20px;\n"]))),I=y.ZP.p(c||(c=(0,P.Z)(["\n  margin-bottom: 20px;\n  margin: 0 auto;\n  padding: 5px;\n"]))),S=y.ZP.b(d||(d=(0,P.Z)(["\n  margin-bottom: 20px;\n"]))),A=y.ZP.ul(h||(h=(0,P.Z)([""]))),D=y.ZP.ul(m||(m=(0,P.Z)(["\n  margin-bottom: 10px;\n"]))),E=y.ZP.div(u||(u=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),F=t(184),H=function(){var n,e,t,r,o=(0,k.useState)([]),i=(0,g.Z)(o,2),a=i[0],s=i[1],x=(0,j.UO)().movieId,p=(0,j.TH)();console.log(p),(0,k.useEffect)((function(){var n=function(){var n=(0,f.Z)(v().mark((function n(){var e,t;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.Z.get("https://api.themoviedb.org/3/movie/".concat(x,"?api_key=7b0e471f76e5da9e6415f6c271770eca"));case 3:e=n.sent,t=e.data,s(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("Ohhhhhh noooo");case 11:return n.prev=11,n.finish(11);case 13:case"end":return n.stop()}}),n,null,[[0,8,11,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[x]);var l=a.title,c=a.release_date,d=a.genres,h=a.overview,m=a.poster_path,u=a.vote_average;return(0,F.jsxs)(_,{children:[(0,F.jsx)(w.rU,{to:null!==(n=null===(e=p.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:(0,F.jsx)(C,{type:"button",children:"Go Back"})}),(0,F.jsxs)(U,{children:[(0,F.jsx)(O,{children:(0,F.jsx)(Y,{src:m&&"https://image.tmdb.org/t/p/w300"+m,alt:l})}),(0,F.jsxs)(z,{children:[(0,F.jsxs)(B,{children:[l,"(",new Date(c).getFullYear(),")"]}),(0,F.jsxs)(I,{children:["User Score: ",u]}),(0,F.jsx)(G,{children:"Overview"}),(0,F.jsx)(I,{children:h}),(0,F.jsx)(G,{children:"Genres"}),(0,F.jsxs)(I,{children:[d&&d.map((function(n){return n.name})).join(", ")," "]})]})]}),(0,F.jsxs)(E,{children:[(0,F.jsx)(S,{children:"Additional Information"}),(0,F.jsxs)(A,{children:[(0,F.jsx)(D,{children:(0,F.jsx)(w.rU,{state:{from:null===(t=p.state)||void 0===t?void 0:t.from},to:"cast",children:"Cast"})}),(0,F.jsx)(D,{children:(0,F.jsx)(w.rU,{state:{from:null===(r=p.state)||void 0===r?void 0:r.from},to:"reviews",children:"Reviews"})})]}),(0,F.jsx)(j.j3,{})]})]})}}}]);
//# sourceMappingURL=184.20b7ec0c.chunk.js.map