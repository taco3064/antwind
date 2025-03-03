import{r as o,F as G,S as J,h as Ce,m as $e,i as Se,k as h,l as be,n as V,c as z,p as ye,q as ve,s as Me,v as xe,w as je,x as we,y as Re,z as X,A as Te,E as Ee,G as U,H as Z,J as Oe,K as Be,L as q,M as He,N as Pe,j as M,D as Ye}from"./index-B3Xbo6Ht.js";import{i as Ae,g as Ie,a as Ne,R as ze,b as De}from"./index-ZjYeutYd.js";import{G as Xe,B as _}from"./index-mpI2NVEt.js";import"./useBubbleLock-3E8WoET7.js";const Fe=10,We=20;function Le(e){const{fullscreen:t,validRange:n,generateConfig:a,locale:r,prefixCls:s,value:c,onChange:p,divRef:u}=e,f=a.getYear(c||a.getNow());let g=f-Fe,C=g+We;n&&(g=a.getYear(n[0]),C=a.getYear(n[1])+1);const y=r&&r.year==="年"?"年":"",x=[];for(let i=g;i<C;i++)x.push({label:`${i}${y}`,value:i});return o.createElement(J,{size:t?void 0:"small",options:x,value:f,className:`${s}-year-select`,onChange:i=>{let $=a.setYear(c,i);if(n){const[b,E]=n,j=a.getYear($),R=a.getMonth($);j===a.getYear(E)&&R>a.getMonth(E)&&($=a.setMonth($,a.getMonth(E))),j===a.getYear(b)&&R<a.getMonth(b)&&($=a.setMonth($,a.getMonth(b)))}p($)},getPopupContainer:()=>u.current})}function Ge(e){const{prefixCls:t,fullscreen:n,validRange:a,value:r,generateConfig:s,locale:c,onChange:p,divRef:u}=e,f=s.getMonth(r||s.getNow());let g=0,C=11;if(a){const[i,$]=a,b=s.getYear(r);s.getYear($)===b&&(C=s.getMonth($)),s.getYear(i)===b&&(g=s.getMonth(i))}const y=c.shortMonths||s.locale.getShortMonths(c.locale),x=[];for(let i=g;i<=C;i+=1)x.push({label:y[i],value:i});return o.createElement(J,{size:n?void 0:"small",className:`${t}-month-select`,value:f,options:x,onChange:i=>{p(s.setMonth(r,i))},getPopupContainer:()=>u.current})}function Ve(e){const{prefixCls:t,locale:n,mode:a,fullscreen:r,onModeChange:s}=e;return o.createElement(Xe,{onChange:c=>{let{target:{value:p}}=c;s(p)},value:a,size:r?void 0:"small",className:`${t}-mode-switch`},o.createElement(_,{value:"month"},n.month),o.createElement(_,{value:"year"},n.year))}function qe(e){const{prefixCls:t,fullscreen:n,mode:a,onChange:r,onModeChange:s}=e,c=o.useRef(null),p=o.useContext(G),u=o.useMemo(()=>Object.assign(Object.assign({},p),{isFormItemInput:!1}),[p]),f=Object.assign(Object.assign({},e),{fullscreen:n,divRef:c});return o.createElement("div",{className:`${t}-header`,ref:c},o.createElement(G.Provider,{value:u},o.createElement(Le,Object.assign({},f,{onChange:g=>{r(g,"year")}})),a==="month"&&o.createElement(Ge,Object.assign({},f,{onChange:g=>{r(g,"month")}}))),o.createElement(Ve,Object.assign({},f,{onModeChange:s})))}const _e=e=>{const{calendarCls:t,componentCls:n,fullBg:a,fullPanelBg:r,itemActiveBg:s}=e;return{[t]:Object.assign(Object.assign(Object.assign({},Ie(e)),Se(e)),{background:a,"&-rtl":{direction:"rtl"},[`${t}-header`]:{display:"flex",justifyContent:"flex-end",padding:`${h(e.paddingSM)} 0`,[`${t}-year-select`]:{minWidth:e.yearControlWidth},[`${t}-month-select`]:{minWidth:e.monthControlWidth,marginInlineStart:e.marginXS},[`${t}-mode-switch`]:{marginInlineStart:e.marginXS}}}),[`${t} ${n}-panel`]:{background:r,border:0,borderTop:`${h(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,borderRadius:0,[`${n}-month-panel, ${n}-date-panel`]:{width:"auto"},[`${n}-body`]:{padding:`${h(e.paddingXS)} 0`},[`${n}-content`]:{width:"100%"}},[`${t}-mini`]:{borderRadius:e.borderRadiusLG,[`${t}-header`]:{paddingInlineEnd:e.paddingXS,paddingInlineStart:e.paddingXS},[`${n}-panel`]:{borderRadius:`0 0 ${h(e.borderRadiusLG)} ${h(e.borderRadiusLG)}`},[`${n}-content`]:{height:e.miniContentHeight,th:{height:"auto",padding:0,lineHeight:h(e.weekHeight)}},[`${n}-cell::before`]:{pointerEvents:"none"}},[`${t}${t}-full`]:{[`${n}-panel`]:{display:"block",width:"100%",textAlign:"end",background:a,border:0,[`${n}-body`]:{"th, td":{padding:0},th:{height:"auto",paddingInlineEnd:e.paddingSM,paddingBottom:e.paddingXXS,lineHeight:h(e.weekHeight)}}},[`${n}-cell-week ${n}-cell-inner`]:{display:"block",borderRadius:0,borderTop:`${h(e.lineWidthBold)} ${e.lineType} ${e.colorSplit}`,width:"100%",height:e.calc(e.dateValueHeight).add(e.dateContentHeight).add(e.calc(e.paddingXS).div(2)).add(e.lineWidthBold).equal()},[`${n}-cell`]:{"&::before":{display:"none"},"&:hover":{[`${t}-date`]:{background:e.controlItemBgHover}},[`${t}-date-today::before`]:{display:"none"},[`&-in-view${n}-cell-selected`]:{[`${t}-date, ${t}-date-today`]:{background:s}},"&-selected, &-selected:hover":{[`${t}-date, ${t}-date-today`]:{[`${t}-date-value`]:{color:e.colorPrimary}}}},[`${t}-date`]:{display:"block",width:"auto",height:"auto",margin:`0 ${h(e.calc(e.marginXS).div(2).equal())}`,padding:`${h(e.calc(e.paddingXS).div(2).equal())} ${h(e.paddingXS)} 0`,border:0,borderTop:`${h(e.lineWidthBold)} ${e.lineType} ${e.colorSplit}`,borderRadius:0,transition:`background ${e.motionDurationSlow}`,"&-value":{lineHeight:h(e.dateValueHeight),transition:`color ${e.motionDurationSlow}`},"&-content":{position:"static",width:"auto",height:e.dateContentHeight,overflowY:"auto",color:e.colorText,lineHeight:e.lineHeight,textAlign:"start"},"&-today":{borderColor:e.colorPrimary,[`${t}-date-value`]:{color:e.colorText}}}},[`@media only screen and (max-width: ${h(e.screenXS)}) `]:{[t]:{[`${t}-header`]:{display:"block",[`${t}-year-select`]:{width:"50%"},[`${t}-month-select`]:{width:`calc(50% - ${h(e.paddingXS)})`},[`${t}-mode-switch`]:{width:"100%",marginTop:e.marginXS,marginInlineStart:0,"> label":{width:"50%",textAlign:"center"}}}}}}},Qe=e=>Object.assign({fullBg:e.colorBgContainer,fullPanelBg:e.colorBgContainer,itemActiveBg:e.controlItemBgActive,yearControlWidth:80,monthControlWidth:70,miniContentHeight:256},Ne(e)),Je=Ce("Calendar",e=>{const t=`${e.componentCls}-calendar`,n=$e(e,Ae(e),{calendarCls:t,pickerCellInnerCls:`${e.componentCls}-cell-inner`,dateValueHeight:e.controlHeightSM,weekHeight:e.calc(e.controlHeightSM).mul(.75).equal(),dateContentHeight:e.calc(e.calc(e.fontHeightSM).add(e.marginXS)).mul(3).add(e.calc(e.lineWidth).mul(2)).equal()});return[_e(n)]},Qe),K=(e,t,n)=>{const{getYear:a}=n;return e&&t&&a(e)===a(t)},D=(e,t,n)=>{const{getMonth:a}=n;return K(e,t,n)&&a(e)===a(t)},Q=(e,t,n)=>{const{getDate:a}=n;return D(e,t,n)&&a(e)===a(t)},k=e=>n=>{const{prefixCls:a,className:r,rootClassName:s,style:c,dateFullCellRender:p,dateCellRender:u,monthFullCellRender:f,monthCellRender:g,cellRender:C,fullCellRender:y,headerRender:x,value:i,defaultValue:$,disabledDate:b,mode:E,validRange:j,fullscreen:R=!0,showWeek:ee,onChange:Y,onPanelChange:A,onSelect:I}=n,{getPrefixCls:te,direction:ne,className:ae,style:le}=be("calendar"),O=te("picker",a),m=`${O}-calendar`,[re,oe,se]=Je(O,m),F=e.getNow(),[w,ie]=V(()=>i||e.getNow(),{defaultValue:$,value:i}),[B,de]=V("month",{value:E}),H=o.useMemo(()=>B==="year"?"month":"date",[B]),ce=o.useCallback(l=>(j?e.isAfter(j[0],l)||e.isAfter(l,j[1]):!1)||!!(b!=null&&b(l)),[b,j]),W=(l,d)=>{A==null||A(l,d)},ue=l=>{ie(l),Q(l,w,e)||((H==="date"&&!D(l,w,e)||H==="month"&&!K(l,w,e))&&W(l,B),Y==null||Y(l))},L=l=>{de(l),W(w,l)},N=(l,d)=>{ue(l),I==null||I(l,{source:d})},ge=o.useCallback((l,d)=>y?y(l,d):p?p(l):o.createElement("div",{className:z(`${O}-cell-inner`,`${m}-date`,{[`${m}-date-today`]:Q(F,l,e)})},o.createElement("div",{className:`${m}-date-value`},String(e.getDate(l)).padStart(2,"0")),o.createElement("div",{className:`${m}-date-content`},C?C(l,d):u==null?void 0:u(l))),[p,u,C,y]),he=o.useCallback((l,d)=>{if(y)return y(l,d);if(f)return f(l);const fe=d.locale.shortMonths||e.locale.getShortMonths(d.locale.locale);return o.createElement("div",{className:z(`${O}-cell-inner`,`${m}-date`,{[`${m}-date-today`]:D(F,l,e)})},o.createElement("div",{className:`${m}-date-value`},fe[e.getMonth(l)]),o.createElement("div",{className:`${m}-date-content`},C?C(l,d):g==null?void 0:g(l)))},[f,g,C,y]),[me]=ye("Calendar",ve),v=Object.assign(Object.assign({},me),n.locale),pe=(l,d)=>{if(d.type==="date")return ge(l,d);if(d.type==="month")return he(l,Object.assign(Object.assign({},d),{locale:v==null?void 0:v.lang}))};return re(o.createElement("div",{className:z(m,{[`${m}-full`]:R,[`${m}-mini`]:!R,[`${m}-rtl`]:ne==="rtl"},ae,r,s,oe,se),style:Object.assign(Object.assign({},le),c)},x?x({value:w,type:B,onChange:l=>{N(l,"customize")},onTypeChange:L}):o.createElement(qe,{prefixCls:m,value:w,generateConfig:e,mode:B,fullscreen:R,locale:v==null?void 0:v.lang,validRange:j,onChange:N,onModeChange:L}),o.createElement(ze,{value:w,prefixCls:O,locale:v==null?void 0:v.lang,generateConfig:e,cellRender:pe,onSelect:l=>{N(l,H)},mode:H,picker:H,disabledDate:ce,hideHeader:!0,showWeek:ee})))},P=k(De);P.generateCalendar=k;const Ue=e=>{const t=e!=null&&e.algorithm?Me(e.algorithm):xe,n=Object.assign(Object.assign({},je),e==null?void 0:e.token);return we(n,{override:e==null?void 0:e.token},t,Re)};function Ze(e){const{sizeUnit:t,sizeStep:n}=e,a=n-2;return{sizeXXL:t*(a+10),sizeXL:t*(a+6),sizeLG:t*(a+2),sizeMD:t*(a+2),sizeMS:t*(a+1),size:t*a,sizeSM:t*a,sizeXS:t*(a-1),sizeXXS:t*(a-1)}}const Ke=(e,t)=>{const n=t??X(e),a=n.fontSizeSM,r=n.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),Ze(t??e)),Te(a)),{controlHeight:r}),Ee(Object.assign(Object.assign({},n),{controlHeight:r})))},S=(e,t)=>new U(e).setA(t).toRgbString(),T=(e,t)=>new U(e).lighten(t).toHexString(),ke=e=>{const t=Z(e,{theme:"dark"});return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[6],6:t[5],7:t[4],8:t[6],9:t[5],10:t[4]}},et=(e,t)=>{const n=e||"#000",a=t||"#fff";return{colorBgBase:n,colorTextBase:a,colorText:S(a,.85),colorTextSecondary:S(a,.65),colorTextTertiary:S(a,.45),colorTextQuaternary:S(a,.25),colorFill:S(a,.18),colorFillSecondary:S(a,.12),colorFillTertiary:S(a,.08),colorFillQuaternary:S(a,.04),colorBgSolid:S(a,.95),colorBgSolidHover:S(a,1),colorBgSolidActive:S(a,.9),colorBgElevated:T(n,12),colorBgContainer:T(n,8),colorBgLayout:T(n,0),colorBgSpotlight:T(n,26),colorBgBlur:S(a,.04),colorBorder:T(n,26),colorBorderSecondary:T(n,19)}},tt=(e,t)=>{const n=Object.keys(Oe).map(r=>{const s=Z(e[r],{theme:"dark"});return Array.from({length:10},()=>1).reduce((c,p,u)=>(c[`${r}-${u+1}`]=s[u],c[`${r}${u+1}`]=s[u],c),{})}).reduce((r,s)=>(r=Object.assign(Object.assign({},r),s),r),{}),a=t??X(e);return Object.assign(Object.assign(Object.assign({},a),n),Be(e,{generateColorPalettes:ke,generateNeutralColorPalettes:et}))};function nt(){const[e,t,n]=Pe();return{theme:e,token:t,hashId:n}}const at={defaultSeed:q.token,useToken:nt,defaultAlgorithm:X,darkAlgorithm:tt,compactAlgorithm:Ke,getDesignToken:Ue,defaultConfig:q,_internalContext:He},lt=()=>{const e=(t,n)=>{console.log(t.format("YYYY-MM-DD"),n)};return M.jsx(P,{onPanelChange:e})},rt=(e,t)=>{console.log(e.format("YYYY-MM-DD"),t)},ot=()=>{const{token:e}=at.useToken(),t={width:300,border:`1px solid ${e.colorBorderSecondary}`,borderRadius:e.borderRadiusLG};return M.jsx("div",{style:t,children:M.jsx(P,{fullscreen:!1,onPanelChange:rt})})},st=()=>M.jsxs(M.Fragment,{children:[M.jsx(P,{fullscreen:!0,showWeek:!0}),M.jsx("br",{}),M.jsx(P,{fullscreen:!1,showWeek:!0})]});function gt(){return M.jsx(Ye,{title:"Calendar",items:{Basic:lt,Card:ot,Week:st}})}export{gt as default};
