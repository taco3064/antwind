import{r as n,j as r,S as s}from"./index-DERcz0tS.js";import{S as t}from"./index-D5KSPvZl.js";import{F as d}from"./Table-B-Q1MeGN.js";import"./iconUtil-lbZ7WnGE.js";import"./index-BjnIb6lG.js";import"./index-Ddo7IXse.js";import"./useBubbleLock-DwIkwvTR.js";import"./index-B4kAKJQz.js";import"./Input-Cy4pw4s5.js";const k=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age",width:"12%"},{title:"Address",dataIndex:"address",width:"30%",key:"address"}],c=[{key:1,name:"John Brown sr.",age:60,address:"New York No. 1 Lake Park",children:[{key:11,name:"John Brown",age:42,address:"New York No. 2 Lake Park"},{key:12,name:"John Brown jr.",age:30,address:"New York No. 3 Lake Park",children:[{key:121,name:"Jimmy Brown",age:16,address:"New York No. 3 Lake Park"}]},{key:13,name:"Jim Green sr.",age:72,address:"London No. 1 Lake Park",children:[{key:131,name:"Jim Green",age:42,address:"London No. 2 Lake Park",children:[{key:1311,name:"Jim Green jr.",age:25,address:"London No. 3 Lake Park"},{key:1312,name:"Jimmy Green sr.",age:18,address:"London No. 4 Lake Park"}]}]}]},{key:2,name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park"}],m={onChange:(e,a)=>{console.log(`selectedRowKeys: ${e}`,"selectedRows: ",a)},onSelect:(e,a,o)=>{console.log(e,a,o)},onSelectAll:(e,a,o)=>{console.log(e,a,o)}},L=()=>{const[e,a]=n.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsxs(s,{align:"center",style:{marginBottom:16},children:["CheckStrictly: ",r.jsx(t,{checked:e,onChange:a})]}),r.jsx(d,{columns:k,rowSelection:{...m,checkStrictly:e},dataSource:c})]})};export{L as default};
