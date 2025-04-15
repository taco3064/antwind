import{r as e,t as se,v as ne,x as ae,w as ie,ai as le,J as q,N as ce,u as de,av as ue,aw as J,A as B,ax as ge,X as me,a5 as pe}from"./index-DERcz0tS.js";import{P as ve}from"./index-Dbg6fDhd.js";const H=e.createContext({}),fe=t=>{const{antCls:s,componentCls:n,iconCls:o,avatarBg:a,avatarColor:d,containerSize:C,containerSizeLG:u,containerSizeSM:x,textFontSize:y,textFontSizeLG:v,textFontSizeSM:w,borderRadius:k,borderRadiusLG:f,borderRadiusSM:j,lineWidth:S,lineType:b}=t,z=(r,h,O)=>({width:r,height:r,borderRadius:"50%",[`&${n}-square`]:{borderRadius:O},[`&${n}-icon`]:{fontSize:h,[`> ${o}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},ae(t)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:d,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:a,border:`${ie(S)} ${b} transparent`,"&-image":{background:"transparent"},[`${s}-image-img`]:{display:"block"}}),z(C,y,k)),{"&-lg":Object.assign({},z(u,v,f)),"&-sm":Object.assign({},z(x,w,j)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},Se=t=>{const{componentCls:s,groupBorderColor:n,groupOverlapping:o,groupSpace:a}=t;return{[`${s}-group`]:{display:"inline-flex",[s]:{borderColor:n},"> *:not(:first-child)":{marginInlineStart:o}},[`${s}-group-popover`]:{[`${s} + ${s}`]:{marginInlineStart:a}}}},he=t=>{const{controlHeight:s,controlHeightLG:n,controlHeightSM:o,fontSize:a,fontSizeLG:d,fontSizeXL:C,fontSizeHeading3:u,marginXS:x,marginXXS:y,colorBorderBg:v}=t;return{containerSize:s,containerSizeLG:n,containerSizeSM:o,textFontSize:Math.round((d+C)/2),textFontSizeLG:u,textFontSizeSM:a,groupSpace:y,groupOverlapping:-x,groupBorderColor:v}},D=se("Avatar",t=>{const{colorTextLightSolid:s,colorTextPlaceholder:n}=t,o=ne(t,{avatarBg:n,avatarColor:s});return[fe(o),Se(o)]},he);var Ce=function(t,s){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&s.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)s.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n};const K=e.forwardRef((t,s)=>{const{prefixCls:n,shape:o,size:a,src:d,srcSet:C,icon:u,className:x,rootClassName:y,style:v,alt:w,draggable:k,children:f,crossOrigin:j,gap:S=4,onError:b}=t,z=Ce(t,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","style","alt","draggable","children","crossOrigin","gap","onError"]),[r,h]=e.useState(1),[O,T]=e.useState(!1),[A,G]=e.useState(!0),I=e.useRef(null),E=e.useRef(null),P=le(s,I),{getPrefixCls:$,avatar:m}=e.useContext(q),g=e.useContext(H),N=()=>{if(!E.current||!I.current)return;const l=E.current.offsetWidth,i=I.current.offsetWidth;l!==0&&i!==0&&S*2<i&&h(i-S*2<l?(i-S*2)/l:1)};e.useEffect(()=>{T(!0)},[]),e.useEffect(()=>{G(!0),h(1)},[d]),e.useEffect(N,[S]);const F=()=>{(b==null?void 0:b())!==!1&&G(!1)},c=ce(l=>{var i,M;return(M=(i=a??(g==null?void 0:g.size))!==null&&i!==void 0?i:l)!==null&&M!==void 0?M:"default"}),_=Object.keys(typeof c=="object"?c||{}:{}).some(l=>["xs","sm","md","lg","xl","xxl"].includes(l)),L=de(_),Q=e.useMemo(()=>{if(typeof c!="object")return{};const l=ue.find(M=>L[M]),i=c[l];return i?{width:i,height:i,fontSize:i&&(u||f)?i/2:18}:{}},[L,c]),p=$("avatar",n),V=J(p),[U,Y,Z]=D(p,V),ee=B({[`${p}-lg`]:c==="large",[`${p}-sm`]:c==="small"}),W=e.isValidElement(d),te=o||(g==null?void 0:g.shape)||"circle",oe=B(p,ee,m==null?void 0:m.className,`${p}-${te}`,{[`${p}-image`]:W||d&&A,[`${p}-icon`]:!!u},Z,V,x,y,Y),re=typeof c=="number"?{width:c,height:c,fontSize:u?c/2:18}:{};let R;if(typeof d=="string"&&A)R=e.createElement("img",{src:d,draggable:k,srcSet:C,onError:F,alt:w,crossOrigin:j});else if(W)R=d;else if(u)R=u;else if(O||r!==1){const l=`scale(${r})`,i={msTransform:l,WebkitTransform:l,transform:l};R=e.createElement(ge,{onResize:N},e.createElement("span",{className:`${p}-string`,ref:E,style:Object.assign({},i)},f))}else R=e.createElement("span",{className:`${p}-string`,style:{opacity:0},ref:E},f);return U(e.createElement("span",Object.assign({},z,{style:Object.assign(Object.assign(Object.assign(Object.assign({},re),Q),m==null?void 0:m.style),v),className:oe,ref:P}),R))}),X=t=>{const{size:s,shape:n}=e.useContext(H),o=e.useMemo(()=>({size:t.size||s,shape:t.shape||n}),[t.size,t.shape,s,n]);return e.createElement(H.Provider,{value:o},t.children)},xe=t=>{var s,n,o,a;const{getPrefixCls:d,direction:C}=e.useContext(q),{prefixCls:u,className:x,rootClassName:y,style:v,maxCount:w,maxStyle:k,size:f,shape:j,maxPopoverPlacement:S,maxPopoverTrigger:b,children:z,max:r}=t,h=d("avatar",u),O=`${h}-group`,T=J(h),[A,G,I]=D(h,T),E=B(O,{[`${O}-rtl`]:C==="rtl"},I,T,x,y,G),P=me(z).map((g,N)=>pe(g,{key:`avatar-key-${N}`})),$=(r==null?void 0:r.count)||w,m=P.length;if($&&$<m){const g=P.slice(0,$),N=P.slice($,m),F=(r==null?void 0:r.style)||k,c=((s=r==null?void 0:r.popover)===null||s===void 0?void 0:s.trigger)||b||"hover",_=((n=r==null?void 0:r.popover)===null||n===void 0?void 0:n.placement)||S||"top",L=Object.assign(Object.assign({content:N},r==null?void 0:r.popover),{classNames:{root:B(`${O}-popover`,(a=(o=r==null?void 0:r.popover)===null||o===void 0?void 0:o.classNames)===null||a===void 0?void 0:a.root)},placement:_,trigger:c});return g.push(e.createElement(ve,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},L),e.createElement(K,{style:F},`+${m-$}`))),A(e.createElement(X,{shape:j,size:f},e.createElement("div",{className:E,style:v},g)))}return A(e.createElement(X,{shape:j,size:f},e.createElement("div",{className:E,style:v},P)))},ye=K;ye.Group=xe;export{ye as A};
