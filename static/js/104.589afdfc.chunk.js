"use strict";(self.webpackChunkpet_support_front=self.webpackChunkpet_support_front||[]).push([[104],{5005:(e,t,n)=>{n.d(t,{x:()=>c});const i=n.p+"static/media/error.e14917749310fd6ba4bb.png";var r=n(5464);const a=r.default.div`
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
`,s=r.default.h1`
  @media screen and (min-width: 768px) {
    font-size: 64px;
}
`,d=r.default.p`
  font-weight: 600;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
    text-align: center;
  }

`,o=r.default.img`
  width: 60%;
  @media screen and (min-width: 768px) {
  width: 25%;
  }
`;var l=n(579);const c=()=>(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{src:i,alt:"sad Pepe"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(s,{children:"OOPS ERROR!"}),(0,l.jsx)(d,{children:" Content not found"})]})]})},7843:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var i=n(5043),r=n(6213);var a=n(5464);const s=a.default.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`,d=a.default.li`
  max-width: 280px;
  @media screen and (min-width: 768px) {
    max-width: 336px;
  }
`,o=a.default.div`
  height: 6px;
  border-radius: 40px;
  background: linear-gradient(
    to right,
    rgba(255, 99, 78, 1),
    rgba(255, 223, 72, 1)
  );
  margin-bottom: 14px;
`,l=a.default.img`
  border-radius: 20px;
  height: 252px;
  margin-bottom: 16px;
`,c=a.default.h2`
  display: block;
  max-height: 66px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`,x=a.default.p`
  display: block;
  height: 140px;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 20px;
`,p=a.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,h=a.default.span`
  font-weight: 400;
  font-size: 16px;
  color: rgba(17, 17, 17, 0.6);
`,f=a.default.a`
  font-size: 500;
  font-size: 16px;
  color: rgba(17, 17, 17, 0.6);
  &:hover {
    text-decoration: underline;
    color: rgba(245, 146, 86, 1);
  }
  &:focus {
    text-decoration: underline;
    color: rgba(245, 146, 86, 1);
  }
`;var u=n(579);const g=e=>{let{news:t}=e;return(0,u.jsx)(s,{children:t.map((e=>(0,u.jsxs)(d,{children:[(0,u.jsx)(o,{}),(0,u.jsx)(l,{src:e.avatar,alt:"newsPicture"}),(0,u.jsx)(c,{children:e.title}),(0,u.jsx)(x,{children:e.content}),(0,u.jsxs)(p,{children:[(0,u.jsx)(h,{children:e.date}),(0,u.jsx)(f,{href:"/",children:"read more"})]})]},e._id)))})},m=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`,w=a.default.h1`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;var b=n(2021),j=n(5394);const v=a.default.div`
  position: relative;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 608px;
    margin-bottom: 40px;
  }
`,y=a.default.input`
  font-size: 16px;
  font-weight: 500;
  width: calc(100% - 40px);

  border: none;
  border-radius: 20px;
  padding: 9px 12px;

  ::placeholder {
    color: rgba(83, 83, 83, 1);
    font-size: 16px;
    font-weight: 500;
  }

`,z=a.default.div`
  position: absolute;
  top: 8px;
  right: 25px;
`,k=a.default.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 8px;
  right: 25px;

  border-radius: 50%;
  border: none;
  background-color: transparent;
`,C=e=>{let{setSearchParams:t}=e;const[n,r]=(0,i.useState)("");return(0,u.jsxs)(v,{children:[(0,u.jsx)(y,{type:"text",value:n,onChange:e=>{r(e.target.value),t({title:e.target.value.toLowerCase()})},placeholder:"Search"}),""===n?(0,u.jsx)(z,{children:(0,u.jsx)(j.zfp,{style:{width:"20px",height:"20px"}})}):(0,u.jsx)(k,{type:"button",onClick:()=>{r(""),t("")},children:(0,u.jsx)(b.TCu,{style:{width:"20px",height:"20px"}})})]})};var S=n(5475),P=n(5005);const _=()=>{const[e,t]=(0,S.ok)(""),[n,a]=(0,i.useState)([]),[s,d]=(0,i.useState)(null),o=async()=>{try{const e=await(async()=>{try{return await r.A.get("/news")}catch(s){throw s}})(),t=e.data.news.sort(((e,t)=>t.date.localeCompare(e.date)));a(t)}catch(s){return r.A.isAxiosError(s)&&s.response&&d(s),null}};return(0,i.useEffect)((()=>{null!==e.get("title")&&""!==e.get("title")||o()}),[e]),(0,i.useEffect)((()=>{const t=e.get("title");if(n.length>0&&null!==t){const e=n.filter((e=>e.title.toLowerCase().includes(t)));a(e)}}),[e]),(0,u.jsxs)(m,{children:[(0,u.jsx)(w,{children:"News"}),(0,u.jsx)(C,{setSearchParams:t}),s?(0,u.jsx)(P.x,{}):(0,u.jsx)(g,{news:n})]})}}}]);
//# sourceMappingURL=104.589afdfc.chunk.js.map