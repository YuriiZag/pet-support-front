"use strict";(self.webpackChunkpet_support_front=self.webpackChunkpet_support_front||[]).push([[606],{663:(e,t,a)=>{a.d(t,{A0:()=>d,ZQ:()=>i,cP:()=>s,cU:()=>r,lR:()=>o,mZ:()=>l});var n=a(5464);const i=n.default.input`
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
`,r=n.default.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 280px;
  margin-bottom: 40px;
`,s=n.default.li`
  width: 100%;
  max-width: 280px;
  @media screen and (min-width: 768px) {
    max-width: 448px;
  }
`,o=n.default.label`
  width: 100%;
  max-width: 280px;
  position: relative;
`,d=n.default.div`
  position: relative;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    max-width: 448px;
  }
`,l=n.default.p`
  margin-top: 4px;
  margin-left: 32px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(60, 188, 129, 1);
`},2606:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var n=a(5043),i=a(899),r=a(5464);const s=r.default.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`,o=r.default.ul`
  width: 280px;
  margin-bottom: 28px;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`,d=r.default.div`
  width: 100%;
  max-width: 280px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;

`;var l=a(7745),c=a(663),p=a(4702),m=a(5086),x=a(3216),g=a(2781);let h=i.Ik({email:i.Yj().trim().email("enter valid email").required("email field is empty"),password:i.Yj().trim().min(6,"password is too short(min 6)").max(32,"password is too long(max 32)").required("password field is empty")}),u=i.Ik({phoneNumber:i.Yj().trim().required("phone number field is empty").max(20,"Phone number is too long"),city:i.Yj().trim().required("city field is empty").max(32,"Addres is too long(max 32)"),name:i.Yj().trim().required("name field is empty").max(32,"name is too long(max 32)").min(3,"name is too short(min 3)")});var f=a(9621),w=a(579);const b=()=>{const e=(0,f.j)(),t=(0,x.Zp)(),a=(0,f.G)(g.vG),r={email:"",password:"",passwordConfirmation:"",name:"",city:"",phoneNumber:""},b={message:"",status:null},[j,y]=(0,n.useState)(!1),[k,v]=(0,n.useState)(r),[C,F]=(0,n.useState)(b);(0,n.useEffect)((()=>{a&&F(a)}),[a]);const P=async e=>{const t=e.target.textContent;if("Next"===t)try{await(async()=>{if(k.password!==k.passwordConfirmation)throw new Error("password fields do not match");try{await h.validate(k,{abortEarly:!1})}catch(a){if(a instanceof i.yI)throw new Error(a.errors[0])}})(),y(!0)}catch(a){const t=a instanceof Error?a.message:"unknown error";return F({message:t,status:null})}"Back"===t&&y(!1)},M=e=>{switch(F(b),e.target.name){case"email":v({...k,email:e.target.value});break;case"password":v({...k,password:e.target.value});break;case"passwordConfirmation":v({...k,passwordConfirmation:e.target.value});break;case"name":v({...k,name:e.target.value});break;case"city":v({...k,city:e.target.value});break;case"phoneNumber":v({...k,phoneNumber:e.target.value})}};return(0,w.jsxs)(s,{onSubmit:async n=>{n.preventDefault();try{await u.validate(k)}catch(a){if(a instanceof i.yI)return F({message:a.message,status:null})}try{await e((0,m.yD)(k)).unwrap(),v(r),t("/login")}catch(s){const e=a instanceof Error?a.message:"unknown error";F({message:e,status:null})}y(!1)},children:[!1===j&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(c.cP,{children:(0,w.jsxs)(c.lR,{htmlFor:"email",children:[(0,w.jsx)(c.ZQ,{type:"text",name:"email",placeholder:"Email",onChange:M,value:k.email}),(C.message.length>=1&&C.message.includes("email")||409===C.status)&&(0,w.jsx)(p.M,{message:C.message})]})}),(0,w.jsx)(c.cP,{children:(0,w.jsxs)(c.lR,{htmlFor:"password",children:[(0,w.jsx)(c.ZQ,{type:"text",name:"password",placeholder:"Password",onChange:M,value:k.password}),C.message.length>=1&&C.message.includes("password")&&(0,w.jsx)(p.M,{message:C.message})]})}),(0,w.jsx)(c.cP,{children:(0,w.jsxs)(c.lR,{htmlFor:"passwordConfirmation",children:[(0,w.jsx)(c.ZQ,{type:"text",name:"passwordConfirmation",placeholder:"Confirm Password",onChange:M,value:k.passwordConfirmation}),"password fields do not match"===C.message&&(0,w.jsx)(p.M,{message:C.message})]})})]}),(0,w.jsx)(c.cU,{children:(0,w.jsx)(l.w_,{type:"button",onClick:P,children:"Next"})})]}),!0===j&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(o,{children:[(0,w.jsx)(c.cP,{children:(0,w.jsxs)(c.lR,{htmlFor:"name",children:[(0,w.jsx)(c.ZQ,{type:"text",name:"name",placeholder:"Name",onChange:M,value:k.name}),C.message.length>=1&&C.message.includes("name")&&(0,w.jsx)(p.M,{message:C.message})]})}),(0,w.jsx)(c.cP,{children:(0,w.jsxs)(c.lR,{htmlFor:"city",children:[(0,w.jsx)(c.ZQ,{type:"text",name:"city",placeholder:"City,region",onChange:M,value:k.city}),C.message.length>=1&&C.message.includes("city")&&(0,w.jsx)(p.M,{message:C.message})]})}),(0,w.jsx)(c.cP,{children:(0,w.jsxs)(c.lR,{htmlFor:"phoneNumber",children:[(0,w.jsx)(c.ZQ,{type:"text",name:"phoneNumber",placeholder:"Mobile phone",onChange:M,value:k.phoneNumber}),C.message.length>=1&&C.message.includes("phone number")&&(0,w.jsx)(p.M,{message:C.message})]})})]}),(0,w.jsxs)(d,{children:[(0,w.jsx)(l.w_,{type:"submit",children:"Register"}),(0,w.jsx)(l.bK,{type:"button",onClick:P,children:"Back"})]})]})]})};var j=a(5215),y=a(8547),k=a(6548);const v=r.default.div`
  display: flex;
  justify-content: center;

  padding: 0 20px;
  height: 91.3vh;
  
  background-image: url(${j});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 280px;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    background-image: url(${y});
    background-position-y: 400px;
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${k});
    background-position-y: 300px;
  }
`,C=r.default.h1`
  text-align: center;
  margin-top: 42px;
  margin-bottom: 40px;
  padding: 0;
  font-size: 24px;
  font-weight: 700;
`,F=r.default.div`
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
`;var P=a(3480);const M=()=>(0,w.jsx)(v,{children:(0,w.jsxs)(F,{children:[(0,w.jsx)(C,{children:"Registration"}),(0,w.jsx)(b,{}),(0,w.jsx)(P.X,{hintMessage:"Already have an account?",linkMessage:"Login",linkPath:"/login"})]})})},3480:(e,t,a)=>{a.d(t,{X:()=>o});var n=a(5464);const i=n.default.p`
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: rgba(17, 17, 17, 0.6);
`,r=n.default.a`
    color: rgba(0, 0, 238, 0.6);
    text-decoration: underline solid 1px;
`;var s=a(579);const o=e=>{let{hintMessage:t,linkMessage:a,linkPath:n}=e;return(0,s.jsxs)(i,{children:[t," ",(0,s.jsx)(r,{href:n,children:a})]})}},4702:(e,t,a)=>{a.d(t,{M:()=>d});var n=a(6833),i=a(5464);const r=i.default.div`
 position: absolute;
 color: red;
 right: 18px;
 bottom: 28px;
`,s=i.default.p`
 margin-top: 4px;
 margin-left: 32px;
 font-size: 14px;
 font-weight: 400;
 color: rgba(60, 188, 129, 1);
`;var o=a(579);const d=e=>{let{message:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:(0,o.jsx)(n.Ab,{style:{width:"20px",height:"20px"}})}),(0,o.jsx)(s,{children:t})]})}},5215:(e,t,a)=>{e.exports=a.p+"static/media/Vector.9c3836cbcf8fdeca0400.png"},6548:(e,t,a)=>{e.exports=a.p+"static/media/loginPcBackground.7d509293aac842b17e6b.png"},7745:(e,t,a)=>{a.d(t,{O6:()=>i,bK:()=>o,tA:()=>r,w_:()=>s});var n=a(5464);const i=n.default.button`
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
`,r=n.default.button`
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
`,s=n.default.button`
  border: 2px solid #F59256;
  background-color: #F59256;
  border-radius: 40px;
  
  padding: 9px;
  text-align: center;
  
  width: 100%;
  color: white;

  font-size: 20px;
  font-weight: 500;
`,o=n.default.button`
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
`},8547:(e,t,a)=>{e.exports=a.p+"static/media/loginTabletBackground.68f9763372c3eef3beea.png"}}]);
//# sourceMappingURL=606.9c24ef07.chunk.js.map