import{j as e,a as c,r as d,U as l,V as o,D as h}from"./index-QBbkpb6B.js";import{C as t,A as r}from"./index-Bc2B9ZeM.js";import{F as x}from"./index-CXxOXJaB.js";import{S as p}from"./index-D6EiIevK.js";import{R as j}from"./SettingOutlined-28pCKcy1.js";const m=()=>e.jsxs(c,{direction:"vertical",size:16,children:[e.jsxs(t,{title:"Default size card",extra:e.jsx("a",{href:"#",children:"More"}),style:{width:300},children:[e.jsx("p",{children:"Card content"}),e.jsx("p",{children:"Card content"}),e.jsx("p",{children:"Card content"})]}),e.jsxs(t,{size:"small",title:"Small size card",extra:e.jsx("a",{href:"#",children:"More"}),style:{width:300},children:[e.jsx("p",{children:"Card content"}),e.jsx("p",{children:"Card content"}),e.jsx("p",{children:"Card content"})]})]}),C=()=>e.jsxs(t,{title:"Card title",children:[e.jsx(t,{type:"inner",title:"Inner Card title",extra:e.jsx("a",{href:"#",children:"More"}),children:"Inner Card content"}),e.jsx(t,{style:{marginTop:16},type:"inner",title:"Inner Card title",extra:e.jsx("a",{href:"#",children:"More"}),children:"Inner Card content"})]}),s=[e.jsx(l,{},"edit"),e.jsx(j,{},"setting"),e.jsx(o,{},"ellipsis")],f=()=>{const[i,n]=d.useState(!0);return e.jsxs(x,{gap:"middle",align:"start",vertical:!0,children:[e.jsx(p,{checked:!i,onChange:a=>n(!a)}),e.jsx(t,{loading:i,actions:s,style:{minWidth:300},children:e.jsx(t.Meta,{avatar:e.jsx(r,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}),title:"Card title",description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is the description"}),e.jsx("p",{children:"This is the description"})]})})}),e.jsx(t,{loading:i,actions:s,style:{minWidth:300},children:e.jsx(t.Meta,{avatar:e.jsx(r,{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"}),title:"Card title",description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This is the description"}),e.jsx("p",{children:"This is the description"})]})})})]})};function M(){return e.jsx(h,{title:"Card",items:{Basic:m,Inner:C,Loading:f}})}export{M as default};
