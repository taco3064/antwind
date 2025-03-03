import{r as i,I as M,_ as P,h as _,m as L,i as A,l as U,c as V,a0 as B,cp as X,a8 as Y,j as l,bc as C,b4 as x,D as q}from"./index-B3Xbo6Ht.js";import{S as G}from"./Skeleton-3Fucr1yw.js";var J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}}]},name:"like",theme:"outlined"},K=function(n,a){return i.createElement(M,P({},n,{ref:a,icon:J}))},Q=i.forwardRef(K);const W=e=>{const{value:n,formatter:a,precision:t,decimalSeparator:o,groupSeparator:u="",prefixCls:f}=e;let s;if(typeof a=="function")s=a(n);else{const c=String(n),m=c.match(/^(-?)(\d*)(\.(\d+))?$/);if(!m||c==="-")s=c;else{const p=m[1];let d=m[2]||"0",r=m[4]||"";d=d.replace(/\B(?=(\d{3})+(?!\d))/g,u),typeof t=="number"&&(r=r.padEnd(t,"0").slice(0,t>0?t:0)),r&&(r=`${o}${r}`),s=[i.createElement("span",{key:"int",className:`${f}-content-value-int`},p,d),r&&i.createElement("span",{key:"decimal",className:`${f}-content-value-decimal`},r)]}}return i.createElement("span",{className:`${f}-content-value`},s)},Z=e=>{const{componentCls:n,marginXXS:a,padding:t,colorTextDescription:o,titleFontSize:u,colorTextHeading:f,contentFontSize:s,fontFamily:c}=e;return{[n]:Object.assign(Object.assign({},A(e)),{[`${n}-title`]:{marginBottom:a,color:o,fontSize:u},[`${n}-skeleton`]:{paddingTop:t},[`${n}-content`]:{color:f,fontSize:s,fontFamily:c,[`${n}-content-value`]:{display:"inline-block",direction:"ltr"},[`${n}-content-prefix, ${n}-content-suffix`]:{display:"inline-block"},[`${n}-content-prefix`]:{marginInlineEnd:a},[`${n}-content-suffix`]:{marginInlineStart:a}}})}},ee=e=>{const{fontSizeHeading3:n,fontSize:a}=e;return{titleFontSize:a,contentFontSize:n}},te=_("Statistic",e=>{const n=L(e,{});return[Z(n)]},ee);var ne=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const S=e=>{const{prefixCls:n,className:a,rootClassName:t,style:o,valueStyle:u,value:f=0,title:s,valueRender:c,prefix:m,suffix:p,loading:d=!1,formatter:r,precision:v,decimalSeparator:h=".",groupSeparator:O=",",onMouseEnter:w,onMouseLeave:E}=e,$=ne(e,["prefixCls","className","rootClassName","style","valueStyle","value","title","valueRender","prefix","suffix","loading","formatter","precision","decimalSeparator","groupSeparator","onMouseEnter","onMouseLeave"]),{getPrefixCls:N,direction:k,className:D,style:T}=U("statistic"),g=N("statistic",n),[R,H,z]=te(g),b=i.createElement(W,{decimalSeparator:h,groupSeparator:O,prefixCls:g,formatter:r,precision:v,value:f}),I=V(g,{[`${g}-rtl`]:k==="rtl"},D,a,t,H,z),F=B($,{aria:!0,data:!0});return R(i.createElement("div",Object.assign({},F,{className:I,style:Object.assign(Object.assign({},T),o),onMouseEnter:w,onMouseLeave:E}),s&&i.createElement("div",{className:`${g}-title`},s),i.createElement(G,{paragraph:!1,loading:d,className:`${g}-skeleton`},i.createElement("div",{style:u,className:`${g}-content`},m&&i.createElement("span",{className:`${g}-content-prefix`},m),c?c(b):b,p&&i.createElement("span",{className:`${g}-content-suffix`},p)))))},ae=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function oe(e,n){let a=e;const t=/\[[^\]]*]/g,o=(n.match(t)||[]).map(c=>c.slice(1,-1)),u=n.replace(t,"[]"),f=ae.reduce((c,m)=>{let[p,d]=m;if(c.includes(p)){const r=Math.floor(a/d);return a-=r*d,c.replace(new RegExp(`${p}+`,"g"),v=>{const h=v.length;return r.toString().padStart(h,"0")})}return c},u);let s=0;return f.replace(t,()=>{const c=o[s];return s+=1,c})}function se(e,n){const{format:a=""}=n,t=new Date(e).getTime(),o=Date.now(),u=Math.max(t-o,0);return oe(u,a)}var re=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]]);return a};const ce=1e3/30;function le(e){return new Date(e).getTime()}const ie=e=>{const{value:n,format:a="HH:mm:ss",onChange:t,onFinish:o}=e,u=re(e,["value","format","onChange","onFinish"]),f=X(),s=i.useRef(null),c=()=>{o==null||o(),s.current&&(clearInterval(s.current),s.current=null)},m=()=>{const r=le(n);r>=Date.now()&&(s.current=setInterval(()=>{f(),t==null||t(r-Date.now()),r<Date.now()&&c()},ce))};i.useEffect(()=>(m(),()=>{s.current&&(clearInterval(s.current),s.current=null)}),[n]);const p=(r,v)=>se(r,Object.assign(Object.assign({},v),{format:a})),d=r=>Y(r,{title:void 0});return i.createElement(S,Object.assign({},u,{value:n,valueRender:d,formatter:p}))},ue=i.memo(ie);S.Countdown=ue;const{Countdown:y}=S,j=Date.now()+1e3*60*60*24*2+1e3*30,fe=()=>{console.log("finished!")},me=e=>{typeof e=="number"&&4.95*1e3<e&&e<5*1e3&&console.log("changed!")},de=()=>l.jsxs(C,{gutter:16,children:[l.jsx(x,{span:12,children:l.jsx(y,{title:"Countdown",value:j,onFinish:fe})}),l.jsx(x,{span:12,children:l.jsx(y,{title:"Million Seconds",value:j,format:"HH:mm:ss:SSS"})}),l.jsx(x,{span:24,style:{marginTop:32},children:l.jsx(y,{title:"Day Level",value:j,format:"D 天 H 时 m 分 s 秒"})}),l.jsx(x,{span:12,children:l.jsx(y,{title:"Countdown",value:Date.now()+10*1e3,onChange:me})})]}),pe=()=>l.jsxs(C,{gutter:16,children:[l.jsx(x,{span:12,children:l.jsx(S,{title:"Feedback",value:1128,prefix:l.jsx(Q,{})})}),l.jsx(x,{span:12,children:l.jsx(S,{title:"Unmerged",value:93,suffix:"/ 100"})})]});function ve(){return l.jsx(q,{title:"Statistic",items:{Countdown:de,Unit:pe}})}export{ve as default};
