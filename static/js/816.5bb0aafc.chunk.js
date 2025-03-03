"use strict";(self.webpackChunkpet_support_front=self.webpackChunkpet_support_front||[]).push([[816],{5005:(e,i,n)=>{n.d(i,{x:()=>o});const t=n.p+"static/media/error.e14917749310fd6ba4bb.png";var d=n(5464);const s=d.default.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`,r=d.default.h1`
  @media screen and (min-width: 768px) {
    font-size: 64px;
}
`,a=d.default.p`
  font-weight: 600;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
    text-align: center;
  }

`,l=d.default.img`
  width: 60%;
  @media screen and (min-width: 768px) {
  width: 25%;
  }
`;var x=n(579);const o=()=>(0,x.jsxs)(s,{children:[(0,x.jsx)(l,{src:t,alt:"sad Pepe"}),(0,x.jsxs)("div",{children:[(0,x.jsx)(r,{children:"OOPS ERROR!"}),(0,x.jsx)(a,{children:" Content not found"})]})]})},9651:(e,i,n)=>{n.r(i),n.d(i,{default:()=>O});var t=n(5043),d=n(6213);var s=n(5464);const r=s.default.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`,a=s.default.li`
  width: 280px;
  padding: 12px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  @media screen and (min-width: 768px) {
    width: 334px;
    padding: 16px 35px;
  }
`,l=s.default.h2`
  margin-bottom: 12px;

  font-size: 12px;
  font-weight: 700;
  color: rgba(245, 146, 86, 1);
  text-align: center;

  text-decoration: underline 1px rgba(245, 146, 86, 1);
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,x=s.default.img`
  width: 100px;
  height: 80px;
`,o=s.default.div`
  display: flex;
  gap: 12px;
`,c=s.default.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,p=s.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,h=s.default.span`
  font-weight: 500;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,f=s.default.span`
  font-weight: 500;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,u=s.default.a`
  font-weight: 500;
  font-size: 12px;
  text-decoration: none;
  color: black;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,m=s.default.button`
  text-align: start;
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,g=s.default.div`
  position: absolute;
  top: 30px;

  display: flex;
  gap: 4px;

  padding: 12px;
  border: 1px solid rgba(245, 146, 86, 1);
  border-radius: 20px;

  background-color: white;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);

  z-index: 1000;
`,w=s.default.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,j=s.default.li`
  display: flex;
`,b=s.default.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
  width: 22px;
  margin-right: 10px;
`,y=s.default.span`
  font-size: 12px;
  font-weight: 500;
`;var v=n(579);const z=e=>{let{serviceList:i}=e;const[n,d]=(0,t.useState)(null),s=e=>{const i=(new Date).getDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return Object.entries(e).map(((e,t)=>n[i].toLocaleLowerCase().includes(e[0])?`${e}`:"24/7"))[0]},z=e=>{d((i=>i===e?null:e))};return(0,v.jsx)(r,{children:i.map((e=>(0,v.jsxs)(a,{children:[(0,v.jsx)(l,{children:e.serviceName}),(0,v.jsxs)(o,{children:[(0,v.jsx)(x,{src:e.logo,alt:"service logo"}),(0,v.jsxs)(c,{children:[(0,v.jsx)("li",{children:(0,v.jsxs)(p,{children:[(0,v.jsx)(h,{children:"Time:"}),(0,v.jsx)(m,{type:"button",onClick:()=>z(e._id),children:s(e.workingTime)}),n===e._id&&(0,v.jsx)(g,{onClick:()=>z(e._id),children:(0,v.jsx)(w,{children:Object.entries(e.workingTime).map((e=>{let[i,n]=e;return(0,v.jsxs)(j,{children:[(0,v.jsx)(b,{children:i}),(0,v.jsx)(y,{children:n})]},i)}))})})]})}),(0,v.jsx)("li",{children:(0,v.jsxs)(p,{children:[(0,v.jsx)(h,{children:"Address:"}),(0,v.jsx)(f,{children:e.address})]})}),(0,v.jsx)("li",{children:(0,v.jsxs)(p,{children:[(0,v.jsx)(h,{children:"Email:"}),(0,v.jsx)(u,{href:`mailto:${e.email}`,children:e.email})]})}),(0,v.jsx)("li",{children:(0,v.jsxs)(p,{children:[(0,v.jsx)(h,{children:"Phone:"}),(0,v.jsx)(u,{href:`tel:${e.phoneNumber}`,children:e.phoneNumber})]})})]})]})]},e._id)))})},k=s.default.div`
  padding: 20px;
`,_=s.default.h1`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;var C=n(5005);const O=()=>{const[e,i]=(0,t.useState)([]),[n,s]=(0,t.useState)(null),r=async()=>{try{const e=await(async()=>{try{return await d.A.get("/services")}catch(n){throw n}})();i(e.data.service)}catch(n){return d.A.isAxiosError(n)&&s(n),null}};return(0,t.useEffect)((()=>{r()}),[]),(0,v.jsxs)(k,{children:[(0,v.jsx)(_,{children:"Our Friends"}),n?(0,v.jsx)(C.x,{}):(0,v.jsx)(z,{serviceList:e})]})}}}]);
//# sourceMappingURL=816.5bb0aafc.chunk.js.map