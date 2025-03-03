"use strict";(self.webpackChunkpet_support_front=self.webpackChunkpet_support_front||[]).push([[627],{663:(e,t,i)=>{i.d(t,{A0:()=>s,ZQ:()=>n,cP:()=>d,cU:()=>r,lR:()=>o,mZ:()=>l});var a=i(5464);const n=a.default.input`
  box-sizing: border-box;
  width: 100%;
  max-width: 280px;
  padding: 12px 14px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  background-color: transparent;
  ::placeholder {
    color: rgba(17, 17, 17, 0.6);
    font-weight: 400px;
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    max-width: 448px;
  }
`,r=a.default.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 280px;
  margin-bottom: 40px;
`,d=a.default.li`
  width: 100%;
  max-width: 280px;
  @media screen and (min-width: 768px) {
    max-width: 448px;
  }
`,o=a.default.label`
  width: 100%;
  max-width: 280px;
  position: relative;
`,s=a.default.div`
  position: relative;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    max-width: 448px;
  }
`,l=a.default.p`
  margin-top: 4px;
  margin-left: 32px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(60, 188, 129, 1);
`},3480:(e,t,i)=>{i.d(t,{X:()=>o});var a=i(5464);const n=a.default.p`
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: rgba(17, 17, 17, 0.6);
`,r=a.default.a`
    color: rgba(0, 0, 238, 0.6);
    text-decoration: underline solid 1px;
`;var d=i(579);const o=e=>{let{hintMessage:t,linkMessage:i,linkPath:a}=e;return(0,d.jsxs)(n,{children:[t," ",(0,d.jsx)(r,{href:a,children:i})]})}},4702:(e,t,i)=>{i.d(t,{M:()=>s});var a=i(6833),n=i(5464);const r=n.default.div`
 position: absolute;
 color: red;
 right: 18px;
 bottom: 28px;
`,d=n.default.p`
 margin-top: 4px;
 margin-left: 32px;
 font-size: 14px;
 font-weight: 400;
 color: rgba(60, 188, 129, 1);
`;var o=i(579);const s=e=>{let{message:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:(0,o.jsx)(a.Ab,{style:{width:"20px",height:"20px"}})}),(0,o.jsx)(d,{children:t})]})}},5215:(e,t,i)=>{e.exports=i.p+"static/media/Vector.9c3836cbcf8fdeca0400.png"},6548:(e,t,i)=>{e.exports=i.p+"static/media/loginPcBackground.7d509293aac842b17e6b.png"},7627:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var a=i(5043),n=i(663),r=i(7745),d=i(5464);const o=d.default.form`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,s=d.default.ul`
  width: 280px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  margin-bottom: 40px;
`;var l=i(5086),p=i(2781),c=i(4702),x=i(9621),g=i(579);const u=()=>{const e={email:"",password:""},t={message:"",status:null},[i,d]=(0,a.useState)(e),[u,m]=(0,a.useState)(t),h=(0,x.j)(),f=(0,x.G)(p.vG);(0,a.useEffect)((()=>{m(f)}),[f]);const b=e=>{switch(m(t),e.target.name){case"email":d({...i,email:e.target.value});break;case"password":d({...i,password:e.target.value})}};return(0,g.jsxs)(o,{onSubmit:async t=>(t.preventDefault(),""===i.email?m({message:"Email field is empty",status:null}):""===i.password?m({message:"Password field is empty",status:null}):(h((0,l.Lx)({email:i.email,password:i.password})),void d(e))),children:[(0,g.jsxs)(s,{children:[(0,g.jsx)(n.cP,{children:(0,g.jsxs)(n.lR,{children:[(0,g.jsx)(n.ZQ,{type:"text",name:"email",placeholder:"Email",onChange:b,value:i.email}),("Email field is empty"===u.message||404===u.status)&&(0,g.jsx)(c.M,{message:u.message})]})}),(0,g.jsx)(n.cP,{children:(0,g.jsxs)(n.lR,{children:[(0,g.jsx)(n.ZQ,{type:"text",name:"password",placeholder:"Password",onChange:b,value:i.password}),("Password field is empty"===u.message||401===u.status)&&(0,g.jsx)(c.M,{message:u.message})]})})]}),(0,g.jsx)(n.cU,{children:(0,g.jsx)(r.w_,{type:"submit",children:"Login"})})]})};var m=i(3480),h=i(5215),f=i(8547),b=i(6548);const w=d.default.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  height: 91.3vh;
  background-image: url(${h});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 280px;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    background-image: url(${f});
    background-position-y: 400px;
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${b});
    background-position-y: 300px;
  }
`,j=d.default.h1`
  text-align: center;
  margin-top: 42px;
  margin-bottom: 40px;
  padding: 0;
  font-size: 24px;
  font-weight: 700;
`,k=d.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    background-color: white;
    border-radius: 40px;
    width: 608px;
    height: 500px;
    margin-top: 80px;
  }
  @media screen and (min-width: 1024px) {
    width: 618px;
  }
`,v=()=>(0,g.jsx)(w,{children:(0,g.jsxs)(k,{children:[(0,g.jsx)(j,{children:"Login"}),(0,g.jsx)(u,{}),(0,g.jsx)(m.X,{hintMessage:"Don`t have account?",linkMessage:"Register",linkPath:"/register"})]})})},7745:(e,t,i)=>{i.d(t,{O6:()=>n,bK:()=>o,tA:()=>r,w_:()=>d});var a=i(5464);const n=a.default.button`
  border: 2px solid #F59256;
  background-color: #F59256;
  border-radius: 40px;
  
  padding: 9px;
  text-align: center;
  
  width: 100%;
  color: white;

  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    width: 280px
  }
`,r=a.default.button`
  border: 2px solid #F59256;
  background-color: transparent;
  border-radius: 40px;
  
  padding: 9px;
  text-align: center;
  margin-bottom: 12px;
  
  width: 100%;
  color: black;
  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-bottom: 0;
  }
`,d=a.default.button`
  border: 2px solid #F59256;
  background-color: #F59256;
  border-radius: 40px;
  
  padding: 9px;
  text-align: center;
  
  width: 100%;
  color: white;

  font-size: 20px;
  font-weight: 500;
`,o=a.default.button`
  border: 2px solid #F59256;
  background-color: transparent;
  border-radius: 40px;
  
  padding: 9px;
  text-align: center;
  margin-bottom: 12px;
  
  width: 100%;
  color: black;
  font-size: 20px;
  font-weight: 500;
`},8547:(e,t,i)=>{e.exports=i.p+"static/media/loginTabletBackground.68f9763372c3eef3beea.png"}}]);
//# sourceMappingURL=627.88b420ad.chunk.js.map