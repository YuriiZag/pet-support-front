"use strict";(self.webpackChunkpet_support_front=self.webpackChunkpet_support_front||[]).push([[103],{156:(e,t,i)=>{i.d(t,{A:()=>n});const n=e=>{if(e){const t=e.split("-");return t[2]+"."+t[1]+"."+t[0]}return"birthday error"}},663:(e,t,i)=>{i.d(t,{A0:()=>d,ZQ:()=>a,cP:()=>o,cU:()=>r,lR:()=>s,mZ:()=>l});var n=i(5464);const a=n.default.input`
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
`,o=n.default.li`
  width: 100%;
  max-width: 280px;
  @media screen and (min-width: 768px) {
    max-width: 448px;
  }
`,s=n.default.label`
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
`},4019:(e,t,i)=>{i.d(t,{aF:()=>r,s_:()=>o,zs:()=>a});var n=i(5464);const a=n.default.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
  padding: 20px;
  overflow: auto;
  pointer-events: auto;
`,r=n.default.div`
  position: relative;
  overflow: auto;
  pointer-events: auto;
  border-radius: 20px;
  width: auto;

  background-color: white;
  z-index: 1201;

  @media screen and (width < 768px) {
    width: 280px;
  }
`,o=n.default.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  border-radius: 50%;
  background-color: #fdf7f2;

  width: 34px;
  height: 34px;
`},4702:(e,t,i)=>{i.d(t,{M:()=>d});var n=i(6833),a=i(5464);const r=a.default.div`
 position: absolute;
 color: red;
 right: 18px;
 bottom: 28px;
`,o=a.default.p`
 margin-top: 4px;
 margin-left: 32px;
 font-size: 14px;
 font-weight: 400;
 color: rgba(60, 188, 129, 1);
`;var s=i(579);const d=e=>{let{message:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{children:(0,s.jsx)(n.Ab,{style:{width:"20px",height:"20px"}})}),(0,s.jsx)(o,{children:t})]})}},5005:(e,t,i)=>{i.d(t,{x:()=>c});const n=i.p+"static/media/error.e14917749310fd6ba4bb.png";var a=i(5464);const r=a.default.div`
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
`,o=a.default.h1`
  @media screen and (min-width: 768px) {
    font-size: 64px;
}
`,s=a.default.p`
  font-weight: 600;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
    text-align: center;
  }

`,d=a.default.img`
  width: 60%;
  @media screen and (min-width: 768px) {
  width: 25%;
  }
`;var l=i(579);const c=()=>(0,l.jsxs)(r,{children:[(0,l.jsx)(d,{src:n,alt:"sad Pepe"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(o,{children:"OOPS ERROR!"}),(0,l.jsx)(s,{children:" Content not found"})]})]})},5720:(e,t,i)=>{i.d(t,{w:()=>x});var n=i(5043),a=i(8789),r=i(5464);const o=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 8px;

  background-color: rgba(253, 247, 242, 1);
  width: 208px;
  height: 208px;
  border-radius: 20px;
`,s=r.default.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;var d=i(1462),l=i(5905),c=i(579);const x=e=>{let{avatarInputHandler:t}=e;const i=["image/png","image/webp","image/jpeg","image/jpg","image/svg"],[r,x]=(0,n.useState)(null),p=(0,n.useCallback)((e=>{i.includes(e[0].type)?(0,l.A)(e[0]).then((i=>{const n=`data:${e[0].type};base64,${i}`;x(n),t(n)})).catch((e=>{console.error("Error converting file:",e)})):window.alert("file format should be png, webp, jpg, jpeg, svg")}),[t]),{getRootProps:h,getInputProps:u}=(0,a.VB)({onDrop:p});return(0,c.jsxs)(o,{...h(),children:[(0,c.jsx)("input",{...u()}),null===r?(0,c.jsx)(d.fAo,{style:{color:"rgba(17, 17, 17, 0.6)",width:"48px",height:"48px"}}):(0,c.jsx)(s,{src:r,alt:"petImg"})]})}},5905:(e,t,i)=>{i.d(t,{A:()=>n});const n=function(e){return new Promise(((t,i)=>{const n=new FileReader;n.onload=()=>{const e=n.result;e?t(e.split(",")[1]):i(new Error("Failed to read file"))},n.onerror=e=>i(e),n.readAsDataURL(e)}))}},6916:(e,t,i)=>{i.d(t,{Q:()=>s});var n=i(5043),a=i(7950),r=i(4019),o=i(579);const s=e=>{let{children:t,toggleModal:i,modalOpenState:s}=e;(0,n.useEffect)((()=>{const e=e=>{"Escape"===e.code&&i()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)})),(0,n.useEffect)((()=>(s&&(document.body.style.overflow="hidden",document.body.style.pointerEvents="none",document.body.style.overflow="",document.body.style.pointerEvents=""),()=>{document.body.style.overflow="",document.body.style.pointerEvents=""})),[s]);const d=e=>{const t=e.target;t&&1===t.children.length&&i()},l=document.getElementById("modal-root");return l&&l?(0,a.createPortal)((0,o.jsx)(r.zs,{onClick:d,children:(0,o.jsx)(r.aF,{onClick:e=>e.stopPropagation(),children:t})}),l):null}},7626:(e,t,i)=>{i.r(t),i.d(t,{default:()=>He});var n=i(5043),a=i(5464),r=i(7745);const o=a.default.ul`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  margin-top: 28px;
  padding: 0 20px;
`,s=(0,a.default)(r.O6)`
  width: 100%;
  padding: 9px 28px;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768) {
    width: 100%;
  }
`,d=(0,a.default)(r.tA)`
  width: 100%;
  padding: 9px 28px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0;
  @media screen and (min-width: 768) {
    width: 100%;
  }
`;var l=i(6213);const c=async e=>{try{return await l.A.get(`/notices/category/${e}`)}catch(t){throw t}};var x=i(3216),p=i(3003),h=i(2781),u=i(579);const g=e=>{let{dataHandler:t}=e;const[i,a]=(0,n.useState)("sell"),r=(0,x.Zp)(),g=(0,p.d4)(h.eP),m=e=>{switch(e.target.textContent){case"sell":default:a("sell"),r("/notices/sell",{replace:!0});break;case"lost/found":a("lost found"),r("/notices/lost-found",{replace:!0});break;case"in good hands":a("in good hands"),r("/notices/in-good-hands",{replace:!0});break;case"favorite ads":a("favorite ads"),r("/notices/favourite-ads",{replace:!0});break;case"my ads":a("my ads"),r("/notices/my-ads",{replace:!0})}};async function f(){let e=null;try{["sell","lost found","in good hands"].includes(i)?e=await c(i):"my ads"===i?e=await(async()=>{try{return await l.A.get("/notices/own")}catch(e){throw e}})():"favorite ads"===i&&(e=await(async()=>{try{return await l.A.get("/notices/favourites")}catch(e){throw e}})())}catch(n){return l.A.isAxiosError(n)&&(e=n),null}t(e)}return(0,n.useEffect)((()=>{f(),r(`/notices/${i}`,{replace:!0})}),[i]),(0,u.jsxs)(o,{children:[(0,u.jsx)("li",{children:"sell"===i?(0,u.jsx)(s,{type:"button",children:"sell"}):(0,u.jsx)(d,{type:"button",onClick:m,children:"sell"})}),(0,u.jsx)("li",{children:"lost found"===i?(0,u.jsx)(s,{type:"button",children:"lost/found"}):(0,u.jsx)(d,{type:"button",onClick:m,children:"lost/found"})}),(0,u.jsx)("li",{children:"in good hands"===i?(0,u.jsx)(s,{type:"button",children:"in good hands"}):(0,u.jsx)(d,{type:"button",onClick:m,children:"in good hands"})}),g&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("li",{children:"favorite ads"===i?(0,u.jsx)(s,{type:"button",children:"favorite ads"}):(0,u.jsx)(d,{type:"button",onClick:m,children:"favorite ads"})}),(0,u.jsx)("li",{children:"my ads"===i?(0,u.jsx)(s,{type:"button",children:"my ads"}):(0,u.jsx)(d,{type:"button",onClick:m,children:"my ads"})})]})]})};var m=i(5394),f=i(2021);const w=a.default.label`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    @media screen and (min-width: 768px) {
    width: 608px;
  }
  @media screen and (min-width: 1024px) {

  }
`,j=a.default.input`
    width: 100%;

    border: none;
    border-radius: 20px;
    background-color: white;
    padding: 12px 9px;
    ::placeholder{
        font-weight: 500;
        font-size: 16px;
        color: #535353;
}
`,b=a.default.div`
    position: absolute;
    right: 8px;
    top: 12px;
    color:  #535353;
`,y=a.default.button`
    position: absolute;
    right: 8px;
    top: 12px;
    color:  #535353;
    border: none;
    background-color: transparent;
`;var v=i(5475),k=i(3536);const A=e=>{let{dataHandler:t}=e;const[i,a]=(0,n.useState)(""),[r,o]=(0,v.ok)(),s=(0,x.zy)(),d=(0,n.useCallback)((0,k.throttle)((async e=>{o({title:e});const i=await(async e=>{try{return await l.A.get(`notices/title/${e}`)}catch(t){throw t}})(e);t(i)}),1e3),[]);(0,n.useEffect)((()=>{o("")}),[]),(0,n.useEffect)((()=>{if(null!==r.get("title")&&""===r.get("title")){(async()=>{const e=await c("sell");Array.isArray(e)&&t(e)})(s.pathname.split("/")[2])}}),[r]);return(0,u.jsxs)(w,{htmlFor:"findPet",children:[(0,u.jsx)(j,{name:"findPet",type:"text",placeholder:"Search",value:i,onChange:e=>{a(e.target.value),d(e.target.value)}}),""===i?(0,u.jsx)(b,{children:(0,u.jsx)(m.zfp,{style:{width:"20px",height:"20px"}})}):(0,u.jsx)(y,{type:"button",onClick:()=>{a(""),o({title:""})},children:(0,u.jsx)(f.TCu,{style:{width:"20px",height:"20px"}})})]})},z=a.default.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  height: 100vh;
`,C=a.default.h1`
  font-size: 24px;
  font-weight: 700;
  margin-top: 42px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 40px;
  }
`,F=a.default.div`
  position: relative;
  width: 100%;
`,N=a.default.button`
  position: fixed;
  top: 450px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;

  width: 80px;
  height: 80px;

  background-color: rgba(245, 146, 86, 1);
  border: none;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row-reverse;

    position: absolute;
    right: 30px;
    top: 5px;

    color: #000;
    background-color: transparent;
    box-shadow: none;
    width: 130px;
  }
`,D=a.default.span`
  font-weight: 500;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 500;
  }
`,E=a.default.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 44px;
    height: 44px;
    color: white;

    background-color: rgba(245, 146, 86, 1);
    border: none;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 50%;
  }
`;var S=i(7962);const _=a.default.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 30px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
      flex-wrap: wrap;
      flex-direction: row;
  }
`,P=a.default.li`
  height: 606px;
  width: 286px;
  background-color: white;
  border-radius: 0 0 20px 20px;
  box-shadow: rgba(49, 21, 4, 0.07);

`,I=a.default.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding: 0 20px;

  margin-top: 20px;
`,L=a.default.li`
  width: 100%;
`,M=a.default.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 8px 0;
  width: 100%;
  background-color: transparent;

  color: #f59256;
  font-size: 16px;
  font-weight: 500;
`;var $=i(6916);const Z=a.default.div.withConfig({shouldForwardProp:e=>"singleNotice"!==e})`
  display: flex;
  flex-direction: column;
  padding: ${e=>e.singleNotice?"60px 20px 40px 20px":"0"};

  @media screen and (min-width: 768px) {
    width: ${e=>e.singleNotice?"704px":"280px"};
    padding: ${e=>e.singleNotice?"32px 20px":"0"};
  }
`,Y=a.default.div.withConfig({shouldForwardProp:e=>"singleNotice"!==e})`
  @media screen and (min-width: 768px) {
    display: ${e=>e.singleNotice?"flex":"block"};
  }
`,H=a.default.button`
  position: absolute;
  top: 12px;
  right: 12px;
  color: rgba(245, 146, 86, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: none;

  background-color: rgba(255, 255, 255, 0.6);

  width: 44px;
  height: 44px;
`,O=a.default.p`
  position: absolute;
  top: 20px;

  width: 140px;

  border-radius: 0 20px 20px 0;

  color: rgba(17, 17, 17, 1);
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 20px;
`,R=a.default.h2`
  font-size: 28px;
  font-weight: 700;
  text-align: center;

  margin-top: 20px;
  padding: 0 20px;

  color: rgba(17, 17, 17, 1);
`,T=a.default.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 20px;
  padding: 0 20px;
`,q=a.default.span`
  display: flex;
  font-size: 16px;
  font-weight: 500;
`,B=a.default.span`
  display: block;
  width: 90px;
  font-size: 16px;
  font-weight: 600;
`,Q=a.default.div`
  position: relative;
`,G=a.default.img`
  max-width: 240px;
  height: 240px;
  border-radius: 0 0 20px 20px;
  @media screen and (min-width: 768px) {
    max-width: 288px;
    height: 328px;
  }
`,K=a.default.ul`
  margin-top: 40px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 332px;
    align-self: flex-end;
  }
`,U=a.default.p`
  margin-top: 28px;
  padding: 0 20px;
`,V=a.default.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,J=a.default.a`
  box-sizing: border-box;
  border: 2px solid #f59256;
  background-color: #f59256;
  border-radius: 40px;

  padding: 9px;
  text-align: center;

  width: 240px;
  color: white;

  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    max-width: 160px;
  }
`,W=(0,a.default)(r.tA)`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  max-width: 240px;
  @media screen and (min-width: 768px) {
    max-width: 160px;
  }
`;const X=function(e){if(e){const t=e.split("."),i=Number(t[0])+30.437*(Number(t[1])-1)+365.25*(Number(t[2])-1),n=new Date,a=(Number(n.getDay())+30.437*(Number(n.getMonth())-1)+365.25*(Number(n.getFullYear())-1)-i)/365;return Math.floor(a)}};var ee=i(5005);const te=e=>{let{notice:t,singleNotice:i,updateFavouriteStatus:n,isLoggedIn:a,favouriteList:r,error:o}=e;const s=(0,x.Zp)(),d=e=>{if(!a)return s("/login");r.includes(e)&&n({id:e,favouriteStatus:!1,singleNotice:i}),r.includes(e)||n({id:e,favouriteStatus:!0,singleNotice:i})};return t?(0,u.jsxs)(Z,{singleNotice:i,children:[(0,u.jsxs)(Y,{singleNotice:i,children:[(0,u.jsxs)(Q,{children:[(0,u.jsx)(G,{src:t.avatar,alt:"petAvatar"}),(0,u.jsx)(O,{children:t.category}),!i&&(0,u.jsx)(H,{onClick:e=>d(t._id),children:r.includes(t._id)?(0,u.jsx)(m.v7F,{style:{width:"22px",height:"24px",color:"red"}}):(0,u.jsx)(m.phF,{style:{width:"22px",height:"24px"}})})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(R,{children:t.title}),(0,u.jsxs)(T,{children:[i&&(0,u.jsx)("li",{children:(0,u.jsxs)(q,{children:[(0,u.jsx)(B,{children:"Name:"}),(0,u.jsx)("span",{children:t.name})]})}),i&&(0,u.jsx)("li",{children:(0,u.jsxs)(q,{children:[(0,u.jsx)(B,{children:"Birthday:"}),(0,u.jsx)("span",{children:t.birthDate})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(q,{children:[(0,u.jsx)(B,{children:"Breed:"}),(0,u.jsx)("span",{children:t.breed})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(q,{children:[(0,u.jsx)(B,{children:"Place:"}),(0,u.jsx)("span",{children:t.location})]})}),i&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("li",{children:(0,u.jsxs)(q,{children:[(0,u.jsx)(B,{children:"Sex:"}),(0,u.jsx)("span",{children:t.sex})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(q,{children:[(0,u.jsx)(B,{children:"Email:"}),(0,u.jsx)("span",{children:t.email})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(q,{children:[(0,u.jsx)(B,{children:"Phone:"}),(0,u.jsx)("span",{children:t.phoneNumber})]})})]}),!i&&(0,u.jsx)("li",{children:(0,u.jsxs)(q,{children:[(0,u.jsx)(B,{children:"Age:"}),(0,u.jsx)("span",{children:X(t.birthDate)})]})}),null!==t.price&&(0,u.jsx)("li",{children:(0,u.jsxs)(q,{children:[(0,u.jsx)(B,{children:"Price:"}),(0,u.jsx)("span",{children:t.price})]})})]})]})]}),i&&(0,u.jsx)(q,{children:(0,u.jsxs)(U,{children:["Comments: ",t.comments]})}),i&&(0,u.jsxs)(K,{children:[(0,u.jsx)(V,{children:(0,u.jsx)(J,{href:`tel:${t.phoneNumber}`,children:"Contact"})}),(0,u.jsx)(V,{children:(0,u.jsxs)(W,{onClick:e=>d(t._id),children:[Array.isArray(r)&&r.includes(t._id)?"Remove from":"Add to",(0,u.jsx)(m.v7F,{style:{width:"22px",height:"24px",color:"red"}})]})})]})]}):(0,u.jsx)(ee.x,{})};var ie=i(5086),ne=i(4019),ae=i(9621),re=i(5308);const oe=e=>{let{noticesList:t,user:i,handleDelete:a}=e;const[r,o]=(0,n.useState)(!1),[s,d]=(0,n.useState)("sell"),[c,p]=(0,n.useState)([]),[g,m]=(0,n.useState)([]),[w,j]=(0,n.useState)(null),[b,y]=(0,n.useState)(null),{category:v}=(0,x.g)(),k=(0,ae.G)(h.eP),A=(0,x.Zp)(),z=(0,ae.j)();(0,n.useEffect)((()=>{k&&z((0,ie.Ny)())}),[z,k]),(0,n.useEffect)((()=>{t&&m(t),null!==i&&p(i.favouriteNoticeId)}),[t,i]);const C=()=>{o(!r)},F=async e=>{v&&d(v),A(`/notices/${e}`,{replace:!0});const t=await(async e=>{try{return await l.A.get(`/notices/id/${e}`)}catch(b){throw b}})(e);await(e=>{null===e||l.A.isAxiosError(e)||j(e.data.notices)})(t),await o(!0)},N=async e=>{try{const t=await(async e=>{try{return await l.A.patch("/notices/favourites",e)}catch(b){throw b}})(e);if(("favorite ads"===v||e.singleNotice)&&!1===(null===e||void 0===e?void 0:e.favouriteStatus)){const t=g.filter((t=>t._id!==e.id));m(t)}p(t.data.favouriteList)}catch(b){var t;if(l.A.isAxiosError(b))y(b),(0,re.u)(null===(t=b.response)||void 0===t?void 0:t.data.message);return null}},D=async e=>{try{await(async e=>{try{return await l.A.delete(`notices/own/${e}`)}catch(b){throw b}})(e),a(e),(0,re.K)("notice succsefuly deleted")}catch(b){var t;if(l.A.isAxiosError(b))(0,re.u)(null===(t=b.response)||void 0===t?void 0:t.data.message);return null}};return(0,n.useEffect)((()=>{!1===r&&A(`/notices/${s}`,{replace:!0})}),[r]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(_,{children:g&&g.map((e=>(0,u.jsxs)(P,{children:[(0,u.jsx)(te,{error:b,notice:e,singleNotice:!1,updateFavouriteStatus:N,isLoggedIn:k,favouriteList:c}),(0,u.jsxs)(I,{children:[(0,u.jsx)(L,{children:(0,u.jsx)(M,{type:"button",onClick:()=>F(e._id),children:"Learn more"})}),(0,u.jsx)(L,{children:void 0!==i&&null!==i&&Array.isArray(i.ownNoticeId)&&i.ownNoticeId.includes(e._id)&&(0,u.jsxs)(M,{type:"button",onClick:()=>D(e._id),children:["Delete\xa0\xa0",(0,u.jsx)(S.BUH,{style:{width:"20px",height:"20px"}})]})})]})]},e._id)))}),r&&(0,u.jsxs)($.Q,{toggleModal:C,children:[(0,u.jsx)(ne.s_,{type:"button",onClick:C,children:(0,u.jsx)(f.j55,{style:{width:"15px",height:"15px"}})}),(0,u.jsx)(te,{error:b,notice:void 0===w?null:w,singleNotice:!0,updateFavouriteStatus:N,isLoggedIn:k,favouriteList:c})]})]})};var se=i(5200);const de=a.default.fieldset`
  display: flex;
  flex-wrap: wrap;
  border: none;
  gap: 8px;
  padding: 0;
`,le=a.default.label`
  border: 2px solid #f59256;
  background-color: #f59256;
  border-radius: 40px;

  padding: 8px 28px;
  text-align: center;

  color: white;

  font-size: 20px;
  font-weight: 500;
`,ce=a.default.label`
  border: 2px solid #f59256;
  background-color: transparent;
  border-radius: 40px;

  padding: 8px 28px;
  text-align: center;
  
  color: black;
  font-size: 20px;
  font-weight: 500;
`,xe=a.default.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`,pe=e=>{let{formData:t,setFormData:i}=e;return(0,u.jsxs)(de,{children:["sell"===t.category?(0,u.jsxs)(le,{htmlFor:"sell",children:["sell",(0,u.jsx)(xe,{type:"radio",id:"sell",value:"sell",onChange:e=>i({...t,category:e.target.value})})]}):(0,u.jsxs)(ce,{htmlFor:"sell",children:["sell",(0,u.jsx)(xe,{type:"radio",id:"sell",value:"sell",onChange:e=>i({...t,category:e.target.value})})]}),"lost/found"===t.category?(0,u.jsxs)(le,{htmlFor:"lost/found",children:["lost/found",(0,u.jsx)(xe,{type:"radio",id:"lost/found",value:"lost/found",onChange:e=>i({...t,category:e.target.value})})]}):(0,u.jsxs)(ce,{htmlFor:"lost/found",children:["lost/found",(0,u.jsx)(xe,{type:"radio",id:"lost/found",value:"lost/found",onChange:e=>i({...t,category:e.target.value})})]}),"in good hands"===t.category?(0,u.jsxs)(le,{htmlFor:"in good hands",children:["in good hands",(0,u.jsx)(xe,{type:"radio",id:"in good hands",value:"in good hands",onChange:e=>i({...t,category:e.target.value})})]}):(0,u.jsxs)(ce,{htmlFor:"in good hands",children:["in good hnads",(0,u.jsx)(xe,{type:"radio",id:"in good hands",value:"in good hands",onChange:e=>i({...t,category:e.target.value})})]})]})};var he=i(899),ue=i(663);const ge=a.default.div`
  @media screen and (min-width: 768px) {
    width: 608px;
  }
`,me=a.default.form`
  padding: 0  20px 20px 20px;
  @media screen and (min-width: 768px) {
    padding: 0 80px 20px 80px;
  }
`,fe=a.default.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    font-weight: 600;
  }
`,we=a.default.p`
  padding: 20px 0px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding-bottom: 28px 0px;
  }
`,je=a.default.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`,be=a.default.label`
  font-weight: 500;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,ye=a.default.div`
  display: flex;
  flex-direction: column;
`,ve=(0,a.default)(ue.ZQ)`
  margin-top: 8px;
  background-color: rgba(253, 247, 242, 1);
  border: 1px solid rgba(245, 146, 86, 0.5);
  @media screen and (min-width: 768px) {
    margin-top: 12px;
    max-width: 448px;
  }
`,ke=a.default.textarea`
  box-sizing: border-box;
  width: 100%;
  max-width: 280px;
  min-height: 40px;

  margin-top: 8px;
  padding: 12px 14px;

  border-radius: 40px;
  resize: none;

  background-color: rgba(253, 247, 242, 1);
  border: 1px solid rgba(245, 146, 86, 0.5);

  overflow: hidden;
  @media screen and (min-width: 768px) {
    margin-top: 12px;
    max-width: 448px;
    min-height: 113px;
    border-radius: 20px;
  }
`,Ae=a.default.button`
  border: 2px solid #f59256;
  background-color: #f59256;
  border-radius: 40px;
  width: 280px;

  padding: 8px 28px;
  text-align: center;

  color: white;

  font-size: 20px;
  font-weight: 500;
`,ze=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;var Ce=i(5720),Fe=i(423);const Ne=a.default.fieldset`
  margin-top: 16px;
  border: none;
  display: flex;
  flex-direction: row;
  gap: 40px;
`,De=a.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`,Ee=a.default.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Se=a.default.span`
  font-size: 18px;
  font-size: 500;
  color: #000;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`,_e=a.default.span`
  font-size: 18px;
  font-size: 500;
  color: rgba(245, 146, 86, 1);
  @media screen and (min-width: 768px) {
    font-size: 20px;
  };
`,Pe=a.default.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`,Ie=e=>{let{formData:t,setFormData:i}=e;return(0,u.jsxs)(Ne,{children:[(0,u.jsxs)(Ee,{htmlFor:"male",children:[(0,u.jsx)(De,{children:(0,u.jsx)(Fe.fZ7,{style:{color:"rgba(35, 194, 239, 1)",width:"100%",height:"100%"}})}),(0,u.jsx)(Pe,{name:"sex",id:"male",type:"radio",value:"male",onChange:e=>i({...t,sex:e.target.value})}),"male"===t.sex?(0,u.jsx)(_e,{children:"Male"}):(0,u.jsx)(Se,{children:"Male"})]}),(0,u.jsxs)(Ee,{htmlFor:"female",children:[(0,u.jsx)(De,{children:(0,u.jsx)(Fe.QH_,{style:{color:"rgba(255, 135, 135, 1)",width:"100%",height:"100%"}})}),(0,u.jsx)(Pe,{id:"female",name:"sex",type:"radio",value:"female",onChange:e=>i({...t,sex:e.target.value})}),"female"===t.sex?(0,u.jsx)(_e,{children:"Female"}):(0,u.jsx)(Se,{children:"Female"})]})]})};var Le=i(4702),Me=i(156);let $e=he.Ik({breed:he.Yj().trim().required("breed field is empty").max(28,"breed is too long(max 28)").min(3,"breed is too short(min 3)"),birthDate:he.Yj().required("set pet`s birth date"),name:he.Yj().trim().required("name field is empty").max(28,"name is too long(max 28)").min(3,"name is too short(min 3)"),title:he.Yj().trim().required("title field is empty").max(28,"title is too long(max 28)").min(3,"title is too short(min 3)")}),Ze=he.Ik({comments:he.Yj().trim().max(64,"coments is too long(max 64)"),avatar:he.Yj().required("set pet`s avatar"),price:he.Yj().trim().max(10,"price is too long"),location:he.Yj().trim().required("location field is empty").max(28,"location is too long(max 28)").min(3,"location is too short(min 3)"),sex:he.Yj().required("set pet`s sex")});const Ye=e=>{let{user:t,toggleModal:i,handleNotice:a}=e;if(null===t)throw new Error("unauthorised");const o={category:"sell",title:"",name:"",birthDate:"",breed:"",sex:"",location:"",comments:"",price:"",avatar:"",owner:t._id,email:t.email,phoneNumber:t.phoneNumber},[s,d]=(0,n.useState)(!0),[c,x]=(0,n.useState)(o),[p,h]=(0,n.useState)({message:"",status:null});return(0,u.jsxs)(ge,{children:[(0,u.jsx)(fe,{children:"Add pet"}),(0,u.jsx)(me,{onSubmit:async e=>{e.preventDefault();try{await Ze.validate(c)}catch(p){if(p instanceof he.yI)return h({message:p.message,status:null})}const t=(0,Me.A)(c.birthDate);try{const e=await(async e=>{try{return await l.A.post("notices/",e)}catch(p){throw p}})({...c,birthDate:t});a(e.data.newNotice),(0,re.K)("notice created")}catch(p){var n;if(l.A.isAxiosError(p))h(p),(0,re.u)(null===(n=p.response)||void 0===n?void 0:n.data.message);return null}d(!0),x(o),i()},children:s?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(we,{children:"Don't wait any longer, give your furry friend the care and love they deserve by adding them to our family today!"}),(0,u.jsxs)(je,{children:[(0,u.jsx)("li",{children:(0,u.jsx)(pe,{formData:c,setFormData:x})}),(0,u.jsx)("li",{children:(0,u.jsxs)(ue.A0,{children:[(0,u.jsx)(be,{htmlFor:"title",children:"Tittle of ad:"}),(0,u.jsx)(ve,{type:"text",name:"title",value:c.title,onChange:e=>{x({...c,title:e.target.value})},placeholder:"Type title of ad"}),p.message.length>=1&&p.message.includes("title")&&(0,u.jsx)(Le.M,{message:p.message})]})}),(0,u.jsx)("li",{children:(0,u.jsxs)(ue.A0,{children:[(0,u.jsx)(be,{htmlFor:"name",children:"Name pet:"}),(0,u.jsx)(ve,{type:"text",name:"name",value:c.name,onChange:e=>{x({...c,name:e.target.value})},placeholder:"Type pet`s name "}),p.message.length>=1&&p.message.includes("name")&&(0,u.jsx)(Le.M,{message:p.message})]})}),(0,u.jsxs)("li",{children:[(0,u.jsxs)(ue.A0,{children:[(0,u.jsx)(be,{htmlFor:"birthDate",children:"Date of birth:"}),(0,u.jsx)(ve,{type:"date",name:"birthDate",min:"1950-01-01",value:c.birthDate,onChange:e=>{x({...c,birthDate:e.target.value})}})]}),"set pet`s birth date"===p.message&&(0,u.jsx)(ue.mZ,{children:"birthday field is empty"})]}),(0,u.jsx)("li",{children:(0,u.jsxs)(ue.A0,{children:[(0,u.jsx)(be,{htmlFor:"breed",children:"Breed"}),(0,u.jsx)(ve,{type:"text",name:"breed",value:c.breed,onChange:e=>{x({...c,breed:e.target.value})},placeholder:"Type pet`s breed"}),p.message.length>=1&&p.message.includes("breed")&&(0,u.jsx)(Le.M,{message:p.message})]})})]}),(0,u.jsxs)(ze,{children:[(0,u.jsx)(Ae,{type:"button",onClick:async()=>{try{await $e.validate(c)}catch(p){if(p instanceof he.yI)return h({message:p.message,status:null})}d(!1)},children:"Next"}),(0,u.jsx)(r.tA,{type:"button",onClick:()=>i(),children:"Cancel"})]})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(je,{children:[(0,u.jsxs)("li",{children:[(0,u.jsx)(be,{children:" Choose pet sex:"}),(0,u.jsx)(Ie,{formData:c,setFormData:x}),"set pet`s sex"===p.message&&(0,u.jsx)(ue.mZ,{children:p.message})]}),(0,u.jsx)("li",{children:(0,u.jsxs)(ue.A0,{children:[(0,u.jsx)(be,{htmlFor:"location",children:"Location:"}),(0,u.jsx)(ve,{type:"text",name:"location",value:c.location,onChange:e=>{x({...c,location:e.target.value})},placeholder:"Type location of pet"}),p.message.length>=1&&p.message.includes("location")&&(0,u.jsx)(Le.M,{message:p.message})]})}),(0,u.jsx)("li",{children:"sell"===c.category&&(0,u.jsxs)(ye,{children:[(0,u.jsx)(be,{htmlFor:"price",children:"Price:"}),(0,u.jsx)(ve,{type:"text",name:"price",value:c.price,onChange:e=>{x({...c,price:e.target.value})},placeholder:"Type pet`s price"}),"price is too long"===p.message&&(0,u.jsx)(Le.M,{message:p.message})]})}),(0,u.jsxs)("li",{children:[(0,u.jsx)(be,{children:"Load the pet\u2019s image:"}),(0,u.jsx)(Ce.w,{avatarInputHandler:e=>{x({...c,avatar:e})}}),"set pet`s avatar"===p.message&&(0,u.jsx)(ue.mZ,{children:p.message})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)(be,{htmlFor:"comments",children:"Comments:"}),(0,u.jsx)(ke,{name:"comments",value:c.comments,onChange:e=>{x({...c,comments:e.target.value})},placeholder:"Type something about pet"}),"coments is too long(max 64)"===p.message&&(0,u.jsx)(ue.mZ,{children:p.message})]})]}),(0,u.jsxs)(ze,{children:[(0,u.jsx)(r.O6,{type:"submit",children:"Done"}),(0,u.jsx)(r.tA,{type:"button",onClick:()=>d(!0),children:"Back"})]})]})})]})},He=()=>{const e=(0,ae.j)(),[t,i]=(0,n.useState)(null),[a,r]=(0,n.useState)(!1),[o,s]=(0,n.useState)(null),d=(0,ae.G)(h.eP),c=(0,x.Zp)();(0,n.useEffect)((()=>{d&&e((0,ie.Ny)())}),[e,d]);const p=(0,ae.G)(h.wz),m=()=>{r(!a)},w=e=>{null===e||l.A.isAxiosError(e)?null!==e&&l.A.isAxiosError(e)&&s(e):i(e.data.notices)};return(0,u.jsxs)(z,{children:[(0,u.jsx)(C,{children:"Find your favourite pet"}),(0,u.jsx)(A,{dataHandler:w}),(0,u.jsxs)(F,{children:[(0,u.jsx)(g,{dataHandler:w}),(0,u.jsxs)(N,{type:"button",onClick:()=>{d?m():c("/login")},children:[(0,u.jsx)(E,{children:(0,u.jsx)(se.GGD,{style:{width:"22px",height:"22px"}})}),(0,u.jsx)(D,{children:"Add pet"})]})]}),null===o?(0,u.jsx)(oe,{noticesList:t,user:null!==p?p:null,handleDelete:e=>{if(t){const n=t.filter((t=>t._id!==e));i(n)}}}):(0,u.jsx)(ee.x,{}),a&&(0,u.jsxs)($.Q,{toggleModal:m,modalOpenState:a,children:[(0,u.jsx)(Ye,{user:p,toggleModal:m,handleNotice:e=>{t&&i([...t,e])}}),(0,u.jsx)(ne.s_,{type:"button",onClick:m,children:(0,u.jsx)(f.j55,{style:{width:"15px",height:"15px"}})})]})]})}},7745:(e,t,i)=>{i.d(t,{O6:()=>a,bK:()=>s,tA:()=>r,w_:()=>o});var n=i(5464);const a=n.default.button`
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
`,o=n.default.button`
  border: 2px solid #F59256;
  background-color: #F59256;
  border-radius: 40px;
  
  padding: 9px;
  text-align: center;
  
  width: 100%;
  color: white;

  font-size: 20px;
  font-weight: 500;
`,s=n.default.button`
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
`}}]);
//# sourceMappingURL=103.d7d441f3.chunk.js.map