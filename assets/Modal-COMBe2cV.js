import{r as l,a3 as G,ab as we,bW as ln,V as h,ae as rn,c as N,e as T,a2 as me,a0 as Ee,_ as Z,W as de,$ as Pe,bX as sn,bY as ge,Z as Ce,ag as cn,bZ as dn,B as U,b_ as un,p as ue,b$ as je,aX as fn,c0 as Ne,h as mn,c1 as gn,k as O,i as Cn,a5 as bn,c2 as xn,m as yn,C as le,aJ as Te,u as hn,ah as pn,ai as vn,aj as ae,b1 as $n,P as Sn,f as Ie,b8 as On,b9 as wn,b7 as En,c3 as Pn,N as jn,c4 as Nn,c5 as Tn,c6 as In,b6 as Rn,c7 as Mn,j as w,a as Re,D as Bn}from"./index-B3Xbo6Ht.js";import{A as Me}from"./ActionButton-BuC_Cw2i.js";import{u as zn,p as be}from"./useClosable-CUjF2es6.js";import{S as Hn}from"./Skeleton-3Fucr1yw.js";import{u as Ln}from"./context-DOyX3gTX.js";import{R as Fn}from"./ExclamationCircleOutlined-DBgzSjbb.js";function An(){const[e,n]=l.useState([]),o=l.useCallback(t=>(n(a=>[].concat(G(a),[t])),()=>{n(a=>a.filter(i=>i!==t))}),[]);return[e,o]}const Dn=new we("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),Wn=new we("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),_n=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:o}=e,t=`${o}-fade`,a=n?"&":"";return[ln(t,Dn,Wn,e.motionDurationMid,n),{[`
        ${a}${t}-enter,
        ${a}${t}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${a}${t}-leave`]:{animationTimingFunction:"linear"}}]},te=h.createContext({}),{Provider:Be}=te,xe=()=>{const{autoFocusButton:e,cancelButtonProps:n,cancelTextLocale:o,isSilent:t,mergedOkCancel:a,rootPrefixCls:i,close:u,onCancel:c,onConfirm:s}=l.useContext(te);return a?h.createElement(Me,{isSilent:t,actionFn:c,close:function(){u==null||u.apply(void 0,arguments),s==null||s(!1)},autoFocus:e==="cancel",buttonProps:n,prefixCls:`${i}-btn`},o):null},ye=()=>{const{autoFocusButton:e,close:n,isSilent:o,okButtonProps:t,rootPrefixCls:a,okTextLocale:i,okType:u,onConfirm:c,onOk:s}=l.useContext(te);return h.createElement(Me,{isSilent:o,type:u||"primary",actionFn:s,close:function(){n==null||n.apply(void 0,arguments),c==null||c(!0)},autoFocus:e==="ok",buttonProps:t,prefixCls:`${a}-btn`},i)};var ze=l.createContext({});function he(e,n,o){var t=n;return!t&&o&&(t="".concat(e,"-").concat(o)),t}function pe(e,n){var o=e["page".concat(n?"Y":"X","Offset")],t="scroll".concat(n?"Top":"Left");if(typeof o!="number"){var a=e.document;o=a.documentElement[t],typeof o!="number"&&(o=a.body[t])}return o}function Vn(e){var n=e.getBoundingClientRect(),o={left:n.left,top:n.top},t=e.ownerDocument,a=t.defaultView||t.parentWindow;return o.left+=pe(a),o.top+=pe(a,!0),o}const Gn=l.memo(function(e){var n=e.children;return n},function(e,n){var o=n.shouldUpdate;return!o});var qn={width:0,height:0,overflow:"hidden",outline:"none"},Xn={outline:"none"},He=h.forwardRef(function(e,n){var o=e.prefixCls,t=e.className,a=e.style,i=e.title,u=e.ariaId,c=e.footer,s=e.closable,f=e.closeIcon,r=e.onClose,m=e.children,d=e.bodyStyle,C=e.bodyProps,p=e.modalRender,g=e.onMouseDown,b=e.onMouseUp,y=e.holderRef,x=e.visible,E=e.forceRender,$=e.width,P=e.height,v=e.classNames,S=e.styles,B=h.useContext(ze),R=B.panel,k=rn(y,R),A=l.useRef(),K=l.useRef();h.useImperativeHandle(n,function(){return{focus:function(){var z;(z=A.current)===null||z===void 0||z.focus({preventScroll:!0})},changeActive:function(z){var ne=document,_=ne.activeElement;z&&_===K.current?A.current.focus({preventScroll:!0}):!z&&_===A.current&&K.current.focus({preventScroll:!0})}}});var q={};$!==void 0&&(q.width=$),P!==void 0&&(q.height=P);var H=c?h.createElement("div",{className:N("".concat(o,"-footer"),v==null?void 0:v.footer),style:T({},S==null?void 0:S.footer)},c):null,L=i?h.createElement("div",{className:N("".concat(o,"-header"),v==null?void 0:v.header),style:T({},S==null?void 0:S.header)},h.createElement("div",{className:"".concat(o,"-title"),id:u},i)):null,D=l.useMemo(function(){return me(s)==="object"&&s!==null?s:s?{closeIcon:f??h.createElement("span",{className:"".concat(o,"-close-x")})}:{}},[s,f,o]),W=Ee(D,!0),X=me(s)==="object"&&s.disabled,ee=s?h.createElement("button",Z({type:"button",onClick:r,"aria-label":"Close"},W,{className:"".concat(o,"-close"),disabled:X}),D.closeIcon):null,Q=h.createElement("div",{className:N("".concat(o,"-content"),v==null?void 0:v.content),style:S==null?void 0:S.content},ee,L,h.createElement("div",Z({className:N("".concat(o,"-body"),v==null?void 0:v.body),style:T(T({},d),S==null?void 0:S.body)},C),m),H);return h.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":i?u:null,"aria-modal":"true",ref:k,style:T(T({},a),q),className:N(o,t),onMouseDown:g,onMouseUp:b},h.createElement("div",{ref:A,tabIndex:0,style:Xn},h.createElement(Gn,{shouldUpdate:x||E},p?p(Q):Q)),h.createElement("div",{tabIndex:0,ref:K,style:qn}))}),Le=l.forwardRef(function(e,n){var o=e.prefixCls,t=e.title,a=e.style,i=e.className,u=e.visible,c=e.forceRender,s=e.destroyOnClose,f=e.motionName,r=e.ariaId,m=e.onVisibleChanged,d=e.mousePosition,C=l.useRef(),p=l.useState(),g=de(p,2),b=g[0],y=g[1],x={};b&&(x.transformOrigin=b);function E(){var $=Vn(C.current);y(d&&(d.x||d.y)?"".concat(d.x-$.left,"px ").concat(d.y-$.top,"px"):"")}return l.createElement(Pe,{visible:u,onVisibleChanged:m,onAppearPrepare:E,onEnterPrepare:E,forceRender:c,motionName:f,removeOnLeave:s,ref:C},function($,P){var v=$.className,S=$.style;return l.createElement(He,Z({},e,{ref:n,title:t,ariaId:r,prefixCls:o,holderRef:P,style:T(T(T({},S),a),x),className:N(i,v)}))})});Le.displayName="Content";var Un=function(n){var o=n.prefixCls,t=n.style,a=n.visible,i=n.maskProps,u=n.motionName,c=n.className;return l.createElement(Pe,{key:"mask",visible:a,motionName:u,leavedClassName:"".concat(o,"-mask-hidden")},function(s,f){var r=s.className,m=s.style;return l.createElement("div",Z({ref:f,style:T(T({},m),t),className:N("".concat(o,"-mask"),r,c)},i))})},Zn=function(n){var o=n.prefixCls,t=o===void 0?"rc-dialog":o,a=n.zIndex,i=n.visible,u=i===void 0?!1:i,c=n.keyboard,s=c===void 0?!0:c,f=n.focusTriggerAfterClose,r=f===void 0?!0:f,m=n.wrapStyle,d=n.wrapClassName,C=n.wrapProps,p=n.onClose,g=n.afterOpenChange,b=n.afterClose,y=n.transitionName,x=n.animation,E=n.closable,$=E===void 0?!0:E,P=n.mask,v=P===void 0?!0:P,S=n.maskTransitionName,B=n.maskAnimation,R=n.maskClosable,k=R===void 0?!0:R,A=n.maskStyle,K=n.maskProps,q=n.rootClassName,H=n.classNames,L=n.styles,D=l.useRef(),W=l.useRef(),X=l.useRef(),ee=l.useState(u),Q=de(ee,2),Y=Q[0],z=Q[1],ne=sn();function _(){ge(W.current,document.activeElement)||(D.current=document.activeElement)}function re(){if(!ge(W.current,document.activeElement)){var j;(j=X.current)===null||j===void 0||j.focus()}}function F(j){if(j)re();else{if(z(!1),v&&D.current&&r){try{D.current.focus({preventScroll:!0})}catch{}D.current=null}Y&&(b==null||b())}g==null||g(j)}function M(j){p==null||p(j)}var V=l.useRef(!1),ie=l.useRef(),nn=function(){clearTimeout(ie.current),V.current=!0},tn=function(){ie.current=setTimeout(function(){V.current=!1})},fe=null;k&&(fe=function(se){V.current?V.current=!1:W.current===se.target&&M(se)});function on(j){if(s&&j.keyCode===Ce.ESC){j.stopPropagation(),M(j);return}u&&j.keyCode===Ce.TAB&&X.current.changeActive(!j.shiftKey)}l.useEffect(function(){u&&(z(!0),_())},[u]),l.useEffect(function(){return function(){clearTimeout(ie.current)}},[]);var an=T(T(T({zIndex:a},m),L==null?void 0:L.wrapper),{},{display:Y?null:"none"});return l.createElement("div",Z({className:N("".concat(t,"-root"),q)},Ee(n,{data:!0})),l.createElement(Un,{prefixCls:t,visible:v&&u,motionName:he(t,S,B),style:T(T({zIndex:a},A),L==null?void 0:L.mask),maskProps:K,className:H==null?void 0:H.mask}),l.createElement("div",Z({tabIndex:-1,onKeyDown:on,className:N("".concat(t,"-wrap"),d,H==null?void 0:H.wrapper),ref:W,onClick:fe,style:an},C),l.createElement(Le,Z({},n,{onMouseDown:nn,onMouseUp:tn,ref:X,closable:$,ariaId:ne,prefixCls:t,visible:u&&Y,onClose:M,onVisibleChanged:F,motionName:he(t,y,x)}))))},Fe=function(n){var o=n.visible,t=n.getContainer,a=n.forceRender,i=n.destroyOnClose,u=i===void 0?!1:i,c=n.afterClose,s=n.panelRef,f=l.useState(o),r=de(f,2),m=r[0],d=r[1],C=l.useMemo(function(){return{panel:s}},[s]);return l.useEffect(function(){o&&d(!0)},[o]),!a&&u&&!m?null:l.createElement(ze.Provider,{value:C},l.createElement(cn,{open:o||a||m,autoDestroy:!1,getContainer:t,autoLock:o||m},l.createElement(Zn,Z({},n,{destroyOnClose:u,afterClose:function(){c==null||c(),d(!1)}}))))};Fe.displayName="Dialog";const Kn=()=>dn()&&window.document.documentElement,ve=()=>{const{cancelButtonProps:e,cancelTextLocale:n,onCancel:o}=l.useContext(te);return h.createElement(U,Object.assign({onClick:o},e),n)},$e=()=>{const{confirmLoading:e,okButtonProps:n,okType:o,okTextLocale:t,onOk:a}=l.useContext(te);return h.createElement(U,Object.assign({},un(o),{loading:e,onClick:a},n),t)};function Ae(e,n){return h.createElement("span",{className:`${e}-close-x`},n||h.createElement(Ne,{className:`${e}-close-icon`}))}const De=e=>{const{okText:n,okType:o="primary",cancelText:t,confirmLoading:a,onOk:i,onCancel:u,okButtonProps:c,cancelButtonProps:s,footer:f}=e,[r]=ue("Modal",je()),m=n||(r==null?void 0:r.okText),d=t||(r==null?void 0:r.cancelText),C={confirmLoading:a,okButtonProps:c,cancelButtonProps:s,okTextLocale:m,cancelTextLocale:d,okType:o,onOk:i,onCancel:u},p=h.useMemo(()=>C,G(Object.values(C)));let g;return typeof f=="function"||typeof f>"u"?(g=h.createElement(h.Fragment,null,h.createElement(ve,null),h.createElement($e,null)),typeof f=="function"&&(g=f(g,{OkBtn:$e,CancelBtn:ve})),g=h.createElement(Be,{value:p},g)):g=f,h.createElement(fn,{disabled:!1},g)};function Se(e){return{position:e,inset:0}}const Qn=e=>{const{componentCls:n,antCls:o}=e;return[{[`${n}-root`]:{[`${n}${o}-zoom-enter, ${n}${o}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${n}${o}-zoom-leave ${n}-content`]:{pointerEvents:"none"},[`${n}-mask`]:Object.assign(Object.assign({},Se("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${n}-hidden`]:{display:"none"}}),[`${n}-wrap`]:Object.assign(Object.assign({},Se("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${n}-root`]:_n(e)}]},Yn=e=>{const{componentCls:n}=e;return[{[`${n}-root`]:{[`${n}-wrap-rtl`]:{direction:"rtl"},[`${n}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[n]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[n]:{maxWidth:"calc(100vw - 16px)",margin:`${O(e.marginXS)} auto`},[`${n}-centered`]:{[n]:{flex:1}}}}},{[n]:Object.assign(Object.assign({},Cn(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${O(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${n}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${n}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${n}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:O(e.modalCloseBtnSize),justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:disabled":{pointerEvents:"none"},"&:hover":{color:e.modalCloseIconHoverColor,backgroundColor:e.colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:e.colorBgTextActive}},bn(e)),[`${n}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${O(e.borderRadiusLG)} ${O(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${n}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding,[`${n}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",margin:`${O(e.margin)} auto`}},[`${n}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${n}-open`]:{overflow:"hidden"}})},{[`${n}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${n}-content,
          ${n}-body,
          ${n}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${n}-confirm-body`]:{marginBottom:"auto"}}}]},Jn=e=>{const{componentCls:n}=e;return{[`${n}-root`]:{[`${n}-wrap-rtl`]:{direction:"rtl",[`${n}-confirm-body`]:{direction:"rtl"}}}}},kn=e=>{const{componentCls:n}=e,o=xn(e);delete o.xs;const t=Object.keys(o).map(a=>({[`@media (min-width: ${O(o[a])})`]:{width:`var(--${n.replace(".","")}-${a}-width)`}}));return{[`${n}-root`]:{[n]:[{width:`var(--${n.replace(".","")}-xs-width)`}].concat(G(t))}}},We=e=>{const n=e.padding,o=e.fontSizeHeading5,t=e.lineHeightHeading5;return yn(e,{modalHeaderHeight:e.calc(e.calc(t).mul(o).equal()).add(e.calc(n).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalCloseIconColor:e.colorIcon,modalCloseIconHoverColor:e.colorIconHover,modalCloseBtnSize:e.controlHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},_e=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,contentPadding:e.wireframe?0:`${O(e.paddingMD)} ${O(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${O(e.padding)} ${O(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${O(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${O(e.paddingXS)} ${O(e.padding)}`:0,footerBorderTop:e.wireframe?`${O(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${O(e.borderRadiusLG)} ${O(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${O(e.padding*2)} ${O(e.padding*2)} ${O(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM}),Ve=mn("Modal",e=>{const n=We(e);return[Yn(n),Jn(n),Qn(n),gn(n,"zoom"),kn(n)]},_e,{unitless:{titleLineHeight:!0}});var et=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};let ce;const nt=e=>{ce={x:e.pageX,y:e.pageY},setTimeout(()=>{ce=null},100)};Kn()&&document.documentElement.addEventListener("click",nt,!0);const Ge=e=>{var n;const{getPopupContainer:o,getPrefixCls:t,direction:a,modal:i}=l.useContext(le),u=F=>{const{onCancel:M}=e;M==null||M(F)},c=F=>{const{onOk:M}=e;M==null||M(F)},{prefixCls:s,className:f,rootClassName:r,open:m,wrapClassName:d,centered:C,getContainer:p,focusTriggerAfterClose:g=!0,style:b,visible:y,width:x=520,footer:E,classNames:$,styles:P,children:v,loading:S}=e,B=et(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","focusTriggerAfterClose","style","visible","width","footer","classNames","styles","children","loading"]),R=t("modal",s),k=t(),A=Te(R),[K,q,H]=Ve(R,A),L=N(d,{[`${R}-centered`]:C??(i==null?void 0:i.centered),[`${R}-wrap-rtl`]:a==="rtl"}),D=E!==null&&!S?l.createElement(De,Object.assign({},e,{onOk:c,onCancel:u})):null,[W,X,ee]=zn(be(e),be(i),{closable:!0,closeIcon:l.createElement(Ne,{className:`${R}-close-icon`}),closeIconRender:F=>Ae(R,F)}),Q=Ln(`.${R}-content`),[Y,z]=hn("Modal",B.zIndex),[ne,_]=l.useMemo(()=>x&&typeof x=="object"?[void 0,x]:[x,void 0],[x]),re=l.useMemo(()=>{const F={};return _&&Object.keys(_).forEach(M=>{const V=_[M];V!==void 0&&(F[`--${R}-${M}-width`]=typeof V=="number"?`${V}px`:V)}),F},[_]);return K(l.createElement(pn,{form:!0,space:!0},l.createElement(vn.Provider,{value:z},l.createElement(Fe,Object.assign({width:ne},B,{zIndex:Y,getContainer:p===void 0?o:p,prefixCls:R,rootClassName:N(q,r,H,A),footer:D,visible:m??y,mousePosition:(n=B.mousePosition)!==null&&n!==void 0?n:ce,onClose:u,closable:W&&{disabled:ee,closeIcon:X},closeIcon:X,focusTriggerAfterClose:g,transitionName:ae(k,"zoom",e.transitionName),maskTransitionName:ae(k,"fade",e.maskTransitionName),className:N(q,f,i==null?void 0:i.className),style:Object.assign(Object.assign(Object.assign({},i==null?void 0:i.style),b),re),classNames:Object.assign(Object.assign(Object.assign({},i==null?void 0:i.classNames),$),{wrapper:N(L,$==null?void 0:$.wrapper)}),styles:Object.assign(Object.assign({},i==null?void 0:i.styles),P),panelRef:Q}),S?l.createElement(Hn,{active:!0,title:!1,paragraph:{rows:4},className:`${R}-body-skeleton`}):v))))},tt=e=>{const{componentCls:n,titleFontSize:o,titleLineHeight:t,modalConfirmIconSize:a,fontSize:i,lineHeight:u,modalTitleHeight:c,fontHeight:s,confirmBodyPadding:f}=e,r=`${n}-confirm`;return{[r]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${r}-body-wrapper`]:Object.assign({},Sn()),[`&${n} ${n}-body`]:{padding:f},[`${r}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:a,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(s).sub(a).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(c).sub(a).equal()).div(2).equal()}},[`${r}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS,maxWidth:`calc(100% - ${O(e.marginSM)})`},[`${e.iconCls} + ${r}-paragraph`]:{maxWidth:`calc(100% - ${O(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${r}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:o,lineHeight:t},[`${r}-content`]:{color:e.colorText,fontSize:i,lineHeight:u},[`${r}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${r}-error ${r}-body > ${e.iconCls}`]:{color:e.colorError},[`${r}-warning ${r}-body > ${e.iconCls},
        ${r}-confirm ${r}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${r}-info ${r}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${r}-success ${r}-body > ${e.iconCls}`]:{color:e.colorSuccess}}},ot=$n(["Modal","confirm"],e=>{const n=We(e);return[tt(n)]},_e,{order:-1e3});var at=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};function qe(e){const{prefixCls:n,icon:o,okText:t,cancelText:a,confirmPrefixCls:i,type:u,okCancel:c,footer:s,locale:f}=e,r=at(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let m=o;if(!o&&o!==null)switch(u){case"info":m=l.createElement(Pn,null);break;case"success":m=l.createElement(En,null);break;case"error":m=l.createElement(wn,null);break;default:m=l.createElement(On,null)}const d=c??u==="confirm",C=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[p]=ue("Modal"),g=f||p,b=t||(d?g==null?void 0:g.okText:g==null?void 0:g.justOkText),y=a||(g==null?void 0:g.cancelText),x=Object.assign({autoFocusButton:C,cancelTextLocale:y,okTextLocale:b,mergedOkCancel:d},r),E=l.useMemo(()=>x,G(Object.values(x))),$=l.createElement(l.Fragment,null,l.createElement(xe,null),l.createElement(ye,null)),P=e.title!==void 0&&e.title!==null,v=`${i}-body`;return l.createElement("div",{className:`${i}-body-wrapper`},l.createElement("div",{className:N(v,{[`${v}-has-title`]:P})},m,l.createElement("div",{className:`${i}-paragraph`},P&&l.createElement("span",{className:`${i}-title`},e.title),l.createElement("div",{className:`${i}-content`},e.content))),s===void 0||typeof s=="function"?l.createElement(Be,{value:E},l.createElement("div",{className:`${i}-btns`},typeof s=="function"?s($,{OkBtn:ye,CancelBtn:xe}):$)):s,l.createElement(ot,{prefixCls:n}))}const lt=e=>{const{close:n,zIndex:o,maskStyle:t,direction:a,prefixCls:i,wrapClassName:u,rootPrefixCls:c,bodyStyle:s,closable:f=!1,onConfirm:r,styles:m}=e,d=`${i}-confirm`,C=e.width||416,p=e.style||{},g=e.mask===void 0?!0:e.mask,b=e.maskClosable===void 0?!1:e.maskClosable,y=N(d,`${d}-${e.type}`,{[`${d}-rtl`]:a==="rtl"},e.className),[,x]=jn(),E=l.useMemo(()=>o!==void 0?o:x.zIndexPopupBase+Nn,[o,x]);return l.createElement(Ge,Object.assign({},e,{className:y,wrapClassName:N({[`${d}-centered`]:!!e.centered},u),onCancel:()=>{n==null||n({triggerCancel:!0}),r==null||r(!1)},title:"",footer:null,transitionName:ae(c||"","zoom",e.transitionName),maskTransitionName:ae(c||"","fade",e.maskTransitionName),mask:g,maskClosable:b,style:p,styles:Object.assign({body:s,mask:t},m),width:C,zIndex:E,closable:f}),l.createElement(qe,Object.assign({},e,{confirmPrefixCls:d})))},Xe=e=>{const{rootPrefixCls:n,iconPrefixCls:o,direction:t,theme:a}=e;return l.createElement(Ie,{prefixCls:n,iconPrefixCls:o,direction:t,theme:a},l.createElement(lt,Object.assign({},e)))},J=[];let Ue="";function Ze(){return Ue}const rt=e=>{var n,o;const{prefixCls:t,getContainer:a,direction:i}=e,u=je(),c=l.useContext(le),s=Ze()||c.getPrefixCls(),f=t||`${s}-modal`;let r=a;return r===!1&&(r=void 0),h.createElement(Xe,Object.assign({},e,{rootPrefixCls:s,prefixCls:f,iconPrefixCls:c.iconPrefixCls,theme:c.theme,direction:i??c.direction,locale:(o=(n=c.locale)===null||n===void 0?void 0:n.Modal)!==null&&o!==void 0?o:u,getContainer:r}))};function oe(e){const n=Tn(),o=document.createDocumentFragment();let t=Object.assign(Object.assign({},e),{close:s,open:!0}),a,i;function u(){for(var r,m=arguments.length,d=new Array(m),C=0;C<m;C++)d[C]=arguments[C];if(d.some(b=>b==null?void 0:b.triggerCancel)){var g;(r=e.onCancel)===null||r===void 0||(g=r).call.apply(g,[e,()=>{}].concat(G(d.slice(1))))}for(let b=0;b<J.length;b++)if(J[b]===s){J.splice(b,1);break}i()}function c(r){clearTimeout(a),a=setTimeout(()=>{const m=n.getPrefixCls(void 0,Ze()),d=n.getIconPrefixCls(),C=n.getTheme(),p=h.createElement(rt,Object.assign({},r));i=In()(h.createElement(Ie,{prefixCls:m,iconPrefixCls:d,theme:C},n.holderRender?n.holderRender(p):p),o)})}function s(){for(var r=arguments.length,m=new Array(r),d=0;d<r;d++)m[d]=arguments[d];t=Object.assign(Object.assign({},t),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),u.apply(this,m)}}),t.visible&&delete t.visible,c(t)}function f(r){typeof r=="function"?t=r(t):t=Object.assign(Object.assign({},t),r),c(t)}return c(t),J.push(s),{destroy:s,update:f}}function Ke(e){return Object.assign(Object.assign({},e),{type:"warning"})}function Qe(e){return Object.assign(Object.assign({},e),{type:"info"})}function Ye(e){return Object.assign(Object.assign({},e),{type:"success"})}function Je(e){return Object.assign(Object.assign({},e),{type:"error"})}function ke(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function it(e){let{rootPrefixCls:n}=e;Ue=n}var st=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};const ct=(e,n)=>{var o,{afterClose:t,config:a}=e,i=st(e,["afterClose","config"]);const[u,c]=l.useState(!0),[s,f]=l.useState(a),{direction:r,getPrefixCls:m}=l.useContext(le),d=m("modal"),C=m(),p=()=>{var x;t(),(x=s.afterClose)===null||x===void 0||x.call(s)},g=function(){var x;c(!1);for(var E=arguments.length,$=new Array(E),P=0;P<E;P++)$[P]=arguments[P];if($.some(B=>B==null?void 0:B.triggerCancel)){var S;(x=s.onCancel)===null||x===void 0||(S=x).call.apply(S,[s,()=>{}].concat(G($.slice(1))))}};l.useImperativeHandle(n,()=>({destroy:g,update:x=>{f(E=>Object.assign(Object.assign({},E),x))}}));const b=(o=s.okCancel)!==null&&o!==void 0?o:s.type==="confirm",[y]=ue("Modal",Rn.Modal);return l.createElement(Xe,Object.assign({prefixCls:d,rootPrefixCls:C},s,{close:g,open:u,afterClose:p,okText:s.okText||(b?y==null?void 0:y.okText:y==null?void 0:y.justOkText),direction:s.direction||r,cancelText:s.cancelText||(y==null?void 0:y.cancelText)},i))},dt=l.forwardRef(ct);let Oe=0;const ut=l.memo(l.forwardRef((e,n)=>{const[o,t]=An();return l.useImperativeHandle(n,()=>({patchElement:t}),[]),l.createElement(l.Fragment,null,o)}));function ft(){const e=l.useRef(null),[n,o]=l.useState([]);l.useEffect(()=>{n.length&&(G(n).forEach(u=>{u()}),o([]))},[n]);const t=l.useCallback(i=>function(c){var s;Oe+=1;const f=l.createRef();let r;const m=new Promise(b=>{r=b});let d=!1,C;const p=l.createElement(dt,{key:`modal-${Oe}`,config:i(c),ref:f,afterClose:()=>{C==null||C()},isSilent:()=>d,onConfirm:b=>{r(b)}});return C=(s=e.current)===null||s===void 0?void 0:s.patchElement(p),C&&J.push(C),{destroy:()=>{function b(){var y;(y=f.current)===null||y===void 0||y.destroy()}f.current?b():o(y=>[].concat(G(y),[b]))},update:b=>{function y(){var x;(x=f.current)===null||x===void 0||x.update(b)}f.current?y():o(x=>[].concat(G(x),[y]))},then:b=>(d=!0,m.then(b))}},[]);return[l.useMemo(()=>({info:t(Qe),success:t(Ye),error:t(Je),warning:t(Ke),confirm:t(ke)}),[]),l.createElement(ut,{key:"modal-holder",ref:e})]}var mt=function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};const gt=e=>{const{prefixCls:n,className:o,closeIcon:t,closable:a,type:i,title:u,children:c,footer:s}=e,f=mt(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:r}=l.useContext(le),m=r(),d=n||r("modal"),C=Te(m),[p,g,b]=Ve(d,C),y=`${d}-confirm`;let x={};return i?x={closable:a??!1,title:"",footer:"",children:l.createElement(qe,Object.assign({},e,{prefixCls:d,confirmPrefixCls:y,rootPrefixCls:m,content:c}))}:x={closable:a??!0,title:u,footer:s!==null&&l.createElement(De,Object.assign({},e)),children:c},p(l.createElement(He,Object.assign({prefixCls:d,className:N(g,`${d}-pure-panel`,i&&y,i&&`${y}-${i}`,o,b,C)},f,{closeIcon:Ae(d,t),closable:a},x)))},Ct=Mn(gt);function en(e){return oe(Ke(e))}const I=Ge;I.useModal=ft;I.info=function(n){return oe(Qe(n))};I.success=function(n){return oe(Ye(n))};I.error=function(n){return oe(Je(n))};I.warning=en;I.warn=en;I.confirm=function(n){return oe(ke(n))};I.destroyAll=function(){for(;J.length;){const n=J.pop();n&&n()}};I.config=it;I._InternalPanelDoNotUseOrYouWillBeFired=Ct;const bt=()=>{const[e,n]=l.useState(!1),o=()=>{n(!0)},t=()=>{n(!1)};return w.jsxs(w.Fragment,{children:[w.jsx(U,{type:"primary",onClick:o,children:"Modal"}),w.jsxs(I,{title:"Modal",open:e,onOk:t,onCancel:t,okText:"确认",cancelText:"取消",children:[w.jsx("p",{children:"Bla bla ..."}),w.jsx("p",{children:"Bla bla ..."}),w.jsx("p",{children:"Bla bla ..."})]})]})},xt=()=>{const[e,n]=I.useModal(),o=()=>{e.confirm({title:"Confirm",icon:w.jsx(Fn,{}),content:"Bla bla ...",okText:"确认",cancelText:"取消"})};return w.jsxs(w.Fragment,{children:[w.jsxs(Re,{children:[w.jsx(bt,{}),w.jsx(U,{onClick:o,children:"Confirm"})]}),n]})},yt=()=>{I.info({title:"This is a notification message",content:w.jsxs("div",{children:[w.jsx("p",{children:"some messages...some messages..."}),w.jsx("p",{children:"some messages...some messages..."})]}),onOk(){}})},ht=()=>{I.success({content:"some messages...some messages..."})},pt=()=>{I.error({title:"This is an error message",content:"some messages...some messages..."})},vt=()=>{I.warning({title:"This is a warning message",content:"some messages...some messages..."})},$t=()=>w.jsxs(Re,{wrap:!0,children:[w.jsx(U,{onClick:yt,children:"Info"}),w.jsx(U,{onClick:ht,children:"Success"}),w.jsx(U,{onClick:pt,children:"Error"}),w.jsx(U,{onClick:vt,children:"Warning"})]});function Nt(){return w.jsx(Bn,{title:"Modal",items:{Locale:xt,StaticInfo:$t}})}export{Nt as default};
