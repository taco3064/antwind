import{r as s,bV as x,B as y,cn as E}from"./index-DERcz0tS.js";function a(r){return!!(r!=null&&r.then)}const P=r=>{const{type:d,children:v,prefixCls:p,buttonProps:m,close:u,autoFocus:g,emitEvent:b,isSilent:i,quitOnNullishReturnValue:h,actionFn:o}=r,n=s.useRef(!1),f=s.useRef(null),[C,c]=x(!1),l=function(){u==null||u.apply(void 0,arguments)};s.useEffect(()=>{let t=null;return g&&(t=setTimeout(()=>{var e;(e=f.current)===null||e===void 0||e.focus({preventScroll:!0})})),()=>{t&&clearTimeout(t)}},[]);const R=t=>{a(t)&&(c(!0),t.then(function(){c(!1,!0),l.apply(void 0,arguments),n.current=!1},e=>{if(c(!1,!0),n.current=!1,!(i!=null&&i()))return Promise.reject(e)}))},k=t=>{if(n.current)return;if(n.current=!0,!o){l();return}let e;if(b){if(e=o(t),h&&!a(e)){n.current=!1,l(t);return}}else if(o.length)e=o(u),n.current=!1;else if(e=o(),!a(e)){l();return}R(e)};return s.createElement(y,Object.assign({},E(d),{onClick:k,loading:C,prefixCls:p},m,{ref:f}),v)};export{P as A};
