"use strict";(self.webpackChunkpet_support_front=self.webpackChunkpet_support_front||[]).push([[206],{156:(e,t,i)=>{i.d(t,{A:()=>a});const a=e=>{if(e){const t=e.split("-");return t[2]+"."+t[1]+"."+t[0]}return"birthday error"}},663:(e,t,i)=>{i.d(t,{A0:()=>l,ZQ:()=>n,cP:()=>r,cU:()=>d,lR:()=>s,mZ:()=>o});var a=i(5464);const n=a.default.input`
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
`,d=a.default.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 280px;
  margin-bottom: 40px;
`,r=a.default.li`
  width: 100%;
  max-width: 280px;
  @media screen and (min-width: 768px) {
    max-width: 448px;
  }
`,s=a.default.label`
  width: 100%;
  max-width: 280px;
  position: relative;
`,l=a.default.div`
  position: relative;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    max-width: 448px;
  }
`,o=a.default.p`
  margin-top: 4px;
  margin-left: 32px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(60, 188, 129, 1);
`},4019:(e,t,i)=>{i.d(t,{aF:()=>d,s_:()=>r,zs:()=>n});var a=i(5464);const n=a.default.div`
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
`,d=a.default.div`
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
`,r=a.default.button`
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
`},4385:(e,t,i)=>{i.r(t),i.d(t,{default:()=>je});var a=i(5043),n=i(2781),d=i(5086),r=i(5464);const s=r.default.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
  border-radius: 20px;
  box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
  padding: 20px 16px;
  margin-bottom: 47px;
  margin-top: 18px;
  

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row-reverse;

    margin-left: -32px;
    border-radius: 0 20px 20px 0;
    padding: 24px 32px;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    margin-top: 24px;
  }
`,l=r.default.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 32px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`,o=r.default.ul`
  display: flex;
`,p=r.default.button`
  display: flex;
  align-self: flex-end;

  color: rgba(17, 17, 17, 0.6);
  font-size: 16px;
  font-weight: 500;

  background-color: transparent;
  border: none;
`;r.default.div`


`;var x=i(397);const c=r.default.div`
  border-radius: 50%;
  width: 233px;
  height: 233px;
  background-color: rgba(245, 146, 86, 0.5);

`,h=r.default.img`
  border-radius: 50%;
  width: 233px;
  height: 233px;
`,m=r.default.label`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

  margin-top: 14px;
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 20px;
  }
  @media screen and (min-width: 1024px) {
    top: 231px;
    right: 16px;
  }
`,u=r.default.input`
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
`,g=r.default.span`
  margin-left: 4px;
  font-size: 12px;
  font-weight: 400;
`;var f=i(5905),b=i(7962),w=i(9621),j=i(579);const y=e=>{let{avatar:t}=e;const i=(0,w.j)(),[n,r]=(0,a.useState)(null);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c,{children:(0,j.jsx)(h,{src:null!==n?n:t,alt:"user avatar"})}),(0,j.jsxs)(m,{children:[(0,j.jsx)(u,{type:"file",accept:".png,.webp,.jpeg,.svg,.jpg",onChange:e=>{if(null===e.target.files)throw new Error("file list is empty");(0,f.A)(e.target.files[0]).then((t=>{if(e.target.files){const n=`data:${e.target.files[0].type};base64,${t}`;r(n),a=n,i((0,d.TK)({avatar:a}))}var a})).catch((e=>{console.error("Error converting file:",e)}))}}),(0,j.jsx)(b.d00,{style:{width:"20px",height:"20px",color:"rgba(245, 146, 86, 1)"}}),(0,j.jsx)(g,{children:"Edit photo"})]})]})},v=r.default.div`
  display: flex;
  align-items: center;
`,k=r.default.span`
  display: block;
  width: 56px;
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 83px;
  }
`,z=r.default.span`
  display: block;
  width: 117px;
  font-size: 12px;
  font-weight: 500;

  margin-right: 33px;
  margin-left: 26px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 175px;

    margin-right: 53px;
    margin-left: 36px;
  }
`,U=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  padding: 4px;

  background-color: rgba(253, 247, 242, 1);
  border: none;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    height: 32px;
    width: 32px;
    padding: 6px;
  }
`,C=r.default.form`
  display: flex;
  justify-content: center;
  margin-left: 8px;
  justify-self: center;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`,F=r.default.input`
  padding: 4px 18px;
  box-sizing: border-box;
  margin-right: 9px;

  font-size: 12px;
  font-weight: 400;
  width: 159px;

  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: rgba(253, 247, 242, 1);

  @media screen and (min-width: 768px) {
    width: 216px;
    padding: 4px 12px;
    font-size: 18px;

    margin-right: 24px;
  }
`;var A=i(5394),D=i(184);const E=e=>{let{fieldName:t,fieldLabel:i,fieldData:n,handleClick:d,updateField:r,handleUserUpdate:s,objectKey:l,type:o="text"}=e;const[p,x]=(0,a.useState)(n);return(0,j.jsxs)(v,{children:[(0,j.jsx)(k,{children:i}),r.updateFieldName!==t?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(z,{children:p}),(0,j.jsx)(U,{id:t,type:"button",onClick:d,disabled:r.isUpdating,style:r.isUpdating?{color:"rgba(17, 17, 17, 0.6)"}:{color:"rgba(245, 146, 86, 1)"},children:(0,j.jsx)(A.isX,{style:{width:"100%",height:"100%"}})})]}):(0,j.jsxs)(C,{onSubmit:e=>{e.preventDefault(),s({[l]:p})},children:[(0,j.jsx)(F,{type:o,value:p,onChange:e=>x(e.target.value)}),(0,j.jsx)(U,{type:"submit",children:(0,j.jsx)(D.CMH,{style:{width:"100%",height:"100%",color:"rgba(245, 146, 86, 1)"}})})]})]})};var N=i(5005);const P=()=>{const e={isUpdating:!1,updateFieldName:""},[t,i]=(0,a.useState)(e),r=(0,w.G)(n.eP),c=(0,w.j)();(0,a.useEffect)((()=>{r&&c((0,d.Ny)())}),[c,r]);const h=t=>{switch(t.currentTarget.id){case"userNameUpdate":i({isUpdating:!0,updateFieldName:"userNameUpdate"});break;case"userEmailUpdate":i({isUpdating:!0,updateFieldName:"userEmailUpdate"});break;case"userBirthdayUpdate":i({isUpdating:!0,updateFieldName:"userBirthdayUpdate"});break;case"userPhoneUpdate":i({isUpdating:!0,updateFieldName:"userPhoneUpdate"});break;case"userCityUpdate":i({isUpdating:!0,updateFieldName:"userCityUpdate"});break;default:i(e)}},m=t=>{c((0,d.TK)(t)),i(e)},u=(0,w.G)(n.wz);return u?(0,j.jsxs)(s,{children:[(0,j.jsx)(y,{avatar:u.avatar}),(0,j.jsxs)("div",{children:[(0,j.jsxs)(l,{children:[(0,j.jsx)(o,{children:(0,j.jsx)(E,{fieldName:"userNameUpdate",fieldLabel:"Name:",fieldData:u.name,handleClick:h,updateField:t||e,handleUserUpdate:m,objectKey:"name"})}),(0,j.jsx)(o,{children:(0,j.jsx)(E,{fieldName:"userEmailUpdate",fieldLabel:"Email:",fieldData:u.email,handleClick:h,updateField:t,handleUserUpdate:m,objectKey:"email"})}),(0,j.jsx)(o,{children:(0,j.jsx)(E,{fieldName:"userBirthdayUpdate",fieldLabel:"Birthday:",fieldData:u.birthday?u.birthday:"set birthday",handleClick:h,updateField:t||e,handleUserUpdate:m,objectKey:"birthday",type:"date"})}),(0,j.jsx)(o,{children:(0,j.jsx)(E,{fieldName:"userPhoneUpdate",fieldLabel:"Phone:",fieldData:u.phoneNumber,handleClick:h,updateField:t||e,handleUserUpdate:m,objectKey:"phoneNumber"})}),(0,j.jsx)(o,{children:(0,j.jsx)(E,{fieldName:"userCityUpdate",fieldLabel:"City:",fieldData:u.city,handleClick:h,updateField:t||e,handleUserUpdate:m,objectKey:"city"})})]}),(0,j.jsxs)(p,{type:"button",onClick:()=>{c((0,d.je)())},children:[(0,j.jsx)(x.hSA,{style:{width:"18px",height:"18px",color:"rgba(245, 146, 86, 1)"}}),"Log Out"]})]})]}):(0,j.jsx)(N.x,{})},S=r.default.div`
  height: 100vh;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1024px) {
   display: flex; 
   gap: 32px;
  }
`,B=r.default.div`
  width: 100%;
`,L=r.default.div`
  display: flex;
  align-items: center;
`,K=r.default.p`
  font-size: 20px;
  font-weight: 500px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  
`,_=r.default.p`
  font-size: 20px;
  font-weight: 500px;
`,M=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

`,I=r.default.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  margin-left: 15px;

  color: white;
  background-color: rgba(245, 146, 86, 1);
  border: none;
  border-radius: 50%;
`;var O=i(3156),R=i(2021),Z=i(4019),T=i(6916),Y=i(663),$=i(899),q=i(7745);const G=r.default.div`
  @media screen and (min-width: 768px) {
    width: 608px;
  }
`,H=r.default.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 20px;
`,Q=r.default.form`
  padding: 28px 20px 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 40px 80px;
  }
`,V=r.default.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 40px;
`,X=(0,r.default)(Y.ZQ)`
  margin-top: 8px;
`,J=r.default.label`
  width: 100%;
  max-width: 280px;
  position: relative;

  font-size: 18px;
  font-weight: 500;

`,W=r.default.label`
  font-size: 18px;
  font-weight: 500;
`,ee=r.default.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`,te=r.default.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`,ie=r.default.textarea`
  width: calc(100% - 40px);
  height: 100px;
  resize: none;

  margin-top: 8px;
  padding: 12px 14px;

  border-radius: 20px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: rgb(253, 247, 242);

  ::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: rgba(17, 17, 17, 0.6);
  }
`,ae=r.default.button.attrs({type:"button"})`
  border: 2px solid #f59256;
  background-color: #f59256;
  border-radius: 40px;

  padding: 9px;
  text-align: center;

  width: 100%;
  color: white;

  font-size: 20px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    width: 180px;
  }
`;var ne=i(5720),de=i(6213);var re=i(4702),se=i(156);let le=$.Ik({breed:$.Yj().trim().required("set pet`s breed").max(28,"breed is too long(max 28)").min(3,"breed is too short(min 3)"),birthDate:$.Yj().required("set pet`s birth date"),name:$.Yj().trim().required("set pet`s name").max(28,"name is too long(max 28)").min(3,"name is too short(min 3)")}),oe=$.Ik({comments:$.Yj().trim().max(140,"comments is too long(max 140)"),avatar:$.Yj().required("set pet`s avatar")});var pe=i(5308);const xe=e=>{let{toggleModal:t,handleData:i}=e;const d=(0,w.G)(n.wz);if(null===d)throw new Error;const r={message:"",status:null},s={name:"",birthDate:"",breed:"",avatar:"",comments:"",owner:d._id},[l,o]=(0,a.useState)(s),[p,x]=(0,a.useState)(!1),[c,h]=(0,a.useState)(r),m=async e=>{const t=e.target.textContent;if("Next"===t){try{await le.validate(l)}catch(c){if(c instanceof $.yI)return h({message:c.message,status:null})}x(!0)}"Back"===t&&x(!1)},u=e=>{switch(h(r),e.target.name){case"name":o({...l,name:e.target.value});break;case"birthDate":o({...l,birthDate:e.target.value});break;case"breed":o({...l,breed:e.target.value});break;case"comments":o({...l,comments:e.target.value})}};return(0,j.jsxs)(G,{children:[(0,j.jsx)(H,{children:"Add pet"}),(0,j.jsx)(Q,{onSubmit:async e=>{e.preventDefault();try{await oe.validate(l)}catch(c){if(c instanceof $.yI)return h({message:c.message,status:null})}const a=(0,se.A)(l.birthDate);try{const e=await(async e=>{try{return await de.A.post("/pets",e)}catch(c){throw c}})({...l,birthDate:a});i(e.data.pet),(0,pe.K)("pet added")}catch(c){var n;if(de.A.isAxiosError(c))h(c),(0,pe.u)(null===(n=c.response)||void 0===n?void 0:n.data.message);return null}o(s),x(!1),t()},children:p?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(V,{children:[(0,j.jsx)(Y.cP,{children:(0,j.jsxs)(ee,{children:[(0,j.jsx)(W,{children:"Add pet photo"}),(0,j.jsx)(ne.w,{avatarInputHandler:e=>{o({...l,avatar:e})}}),"set pet`s avatar"===c.message&&(0,j.jsx)(Y.mZ,{children:c.message})]})}),(0,j.jsxs)(Y.cP,{children:[(0,j.jsx)(J,{htmlFor:"comments",children:"Comments"}),(0,j.jsxs)(Y.A0,{children:[(0,j.jsx)(ie,{name:"comments",placeholder:"Type comments",onChange:u,value:l.comments}),"comments is too long(max 140)"===c.message&&(0,j.jsx)(Y.mZ,{children:c.message})]})]})]}),(0,j.jsxs)(te,{children:[(0,j.jsx)(q.O6,{type:"submit",children:"Done"}),(0,j.jsx)(q.tA,{type:"button",onClick:m,children:"Back"})]})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(V,{children:[(0,j.jsxs)(Y.cP,{children:[(0,j.jsx)(J,{htmlFor:"name",children:"Name pet"}),(0,j.jsxs)(Y.A0,{children:[(0,j.jsx)(X,{type:"text",name:"name",placeholder:"Type pet name",onChange:u,value:l.name}),c.message.length>=1&&c.message.includes("name")&&(0,j.jsx)(re.M,{message:c.message})]})]}),(0,j.jsxs)(Y.cP,{children:[(0,j.jsx)(J,{htmlFor:"birthDate",children:"Date of birth"}),(0,j.jsxs)(Y.A0,{children:[(0,j.jsx)(X,{type:"date",name:"birthDate",min:"1950-01-01",onChange:u,value:l.birthDate}),c.message.length>=1&&c.message.includes("birth")&&(0,j.jsx)(Y.mZ,{children:"birthday field is empty"})]})]}),(0,j.jsxs)(Y.cP,{children:[(0,j.jsx)(J,{htmlFor:"breed",children:" Breed"}),(0,j.jsxs)(Y.A0,{children:[(0,j.jsx)(X,{type:"text",name:"breed",placeholder:"type pet breed",onChange:u,value:l.breed}),c.message.length>=1&&c.message.includes("breed")&&(0,j.jsx)(re.M,{message:c.message})]})]})]}),(0,j.jsxs)(te,{children:[(0,j.jsx)(ae,{type:"button",onClick:m,children:"Next"}),(0,j.jsx)(q.tA,{type:"button",onClick:()=>{t(),o(s)},children:"Cancel"})]})]})})]})},ce=r.default.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 24px;
    width: 100%;
  }
`,he=r.default.li`
  position: relative;

  background-color: white;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  padding: 20px 20px 40px 20px;

  @media screen and (min-width: 768px) {
    width: calc(100% - 64px);
    display: flex;
    gap: 32px;
  }
`,me=r.default.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    height: 161px;
    width: 161px;
  }
`,ue=r.default.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 20px;
`,ge=r.default.li`
  font-size: 14px;
  font-weight: 400;
`,fe=r.default.span`
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,be=r.default.button`
  position: absolute;
  right: 20px;
  top: 272px;
  width: 20px;
  height: 20px;


  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  color: rgba(17, 17, 17, 0.6);
  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
    
    width: 44px;
    height: 44px;
    background-color: rgba(253, 247, 242, 1);
    border-radius: 50%;
    padding: 10px;
  }
`,we=e=>{let{petsList:t,handleDelete:i}=e;return(0,j.jsx)(ce,{children:t.map((e=>(0,j.jsxs)(he,{children:[(0,j.jsx)(me,{src:e.avatar,alt:"petAvatar"}),(0,j.jsxs)(ue,{children:[(0,j.jsxs)(ge,{children:[(0,j.jsx)(fe,{children:"Name:\xa0"}),e.name]}),(0,j.jsxs)(ge,{children:[(0,j.jsx)(fe,{children:"Date of Bitrth:\xa0"}),e.birthDate]}),(0,j.jsxs)(ge,{children:[(0,j.jsx)(fe,{children:"Breed:\xa0"}),e.breed]}),(0,j.jsxs)(ge,{children:[(0,j.jsx)(fe,{children:"Comments:\xa0"}),e.comments]})]}),(0,j.jsx)(be,{type:"button",onClick:()=>{i(e._id)},children:(0,j.jsx)(b.BUH,{style:{width:"100%",height:"100%"}})})]},e._id)))})},je=()=>{const[e,t]=(0,a.useState)(!1),[i,n]=(0,a.useState)([]),[d,r]=(0,a.useState)(null),s=async()=>{try{const e=await(async()=>{try{return await de.A.get("/pets")}catch(d){throw d}})();n(e.data.pets)}catch(d){return de.A.isAxiosError(d)&&r(d),null}},l=()=>{t(!e)};return(0,a.useEffect)((()=>{s()}),[]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(S,{children:[(0,j.jsxs)("div",{children:[(0,j.jsx)(K,{children:"My information:"}),(0,j.jsx)(P,{})]}),(0,j.jsxs)(B,{children:[(0,j.jsxs)(M,{children:[(0,j.jsx)(K,{children:"My pets:"}),(0,j.jsxs)(L,{children:[(0,j.jsx)(_,{children:"Add pet"}),(0,j.jsx)(I,{onClick:l,children:(0,j.jsx)(O.OiG,{style:{width:"24px",height:"24px"}})})]})]}),d?(0,j.jsx)(N.x,{}):(0,j.jsx)(we,{petsList:i,handleDelete:async e=>{try{await(async e=>{try{return await de.A.delete(`/pets/${e}`)}catch(d){throw d}})(e);const t=i.filter((t=>t._id!==e));await n(t),await(0,pe.K)("pet succesfully deleted")}catch(d){var t;if(de.A.isAxiosError(d))(0,pe.u)(null===(t=d.response)||void 0===t?void 0:t.data.message);return null}}})]})]}),e&&(0,j.jsxs)(T.Q,{toggleModal:l,children:[(0,j.jsx)(xe,{toggleModal:l,handleData:e=>{n([...i,e])}}),(0,j.jsx)(Z.s_,{type:"button",onClick:l,children:(0,j.jsx)(R.j55,{style:{width:"15px",height:"15px"}})})]})]})}},4702:(e,t,i)=>{i.d(t,{M:()=>l});var a=i(6833),n=i(5464);const d=n.default.div`
 position: absolute;
 color: red;
 right: 18px;
 bottom: 28px;
`,r=n.default.p`
 margin-top: 4px;
 margin-left: 32px;
 font-size: 14px;
 font-weight: 400;
 color: rgba(60, 188, 129, 1);
`;var s=i(579);const l=e=>{let{message:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d,{children:(0,s.jsx)(a.Ab,{style:{width:"20px",height:"20px"}})}),(0,s.jsx)(r,{children:t})]})}},5005:(e,t,i)=>{i.d(t,{x:()=>p});const a=i.p+"static/media/error.e14917749310fd6ba4bb.png";var n=i(5464);const d=n.default.div`
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
`,r=n.default.h1`
  @media screen and (min-width: 768px) {
    font-size: 64px;
}
`,s=n.default.p`
  font-weight: 600;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 34px;
    text-align: center;
  }

`,l=n.default.img`
  width: 60%;
  @media screen and (min-width: 768px) {
  width: 25%;
  }
`;var o=i(579);const p=()=>(0,o.jsxs)(d,{children:[(0,o.jsx)(l,{src:a,alt:"sad Pepe"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(r,{children:"OOPS ERROR!"}),(0,o.jsx)(s,{children:" Content not found"})]})]})},5720:(e,t,i)=>{i.d(t,{w:()=>x});var a=i(5043),n=i(8789),d=i(5464);const r=d.default.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 8px;

  background-color: rgba(253, 247, 242, 1);
  width: 208px;
  height: 208px;
  border-radius: 20px;
`,s=d.default.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`;var l=i(1462),o=i(5905),p=i(579);const x=e=>{let{avatarInputHandler:t}=e;const i=["image/png","image/webp","image/jpeg","image/jpg","image/svg"],[d,x]=(0,a.useState)(null),c=(0,a.useCallback)((e=>{i.includes(e[0].type)?(0,o.A)(e[0]).then((i=>{const a=`data:${e[0].type};base64,${i}`;x(a),t(a)})).catch((e=>{console.error("Error converting file:",e)})):window.alert("file format should be png, webp, jpg, jpeg, svg")}),[t]),{getRootProps:h,getInputProps:m}=(0,n.VB)({onDrop:c});return(0,p.jsxs)(r,{...h(),children:[(0,p.jsx)("input",{...m()}),null===d?(0,p.jsx)(l.fAo,{style:{color:"rgba(17, 17, 17, 0.6)",width:"48px",height:"48px"}}):(0,p.jsx)(s,{src:d,alt:"petImg"})]})}},5905:(e,t,i)=>{i.d(t,{A:()=>a});const a=function(e){return new Promise(((t,i)=>{const a=new FileReader;a.onload=()=>{const e=a.result;e?t(e.split(",")[1]):i(new Error("Failed to read file"))},a.onerror=e=>i(e),a.readAsDataURL(e)}))}},6916:(e,t,i)=>{i.d(t,{Q:()=>s});var a=i(5043),n=i(7950),d=i(4019),r=i(579);const s=e=>{let{children:t,toggleModal:i,modalOpenState:s}=e;(0,a.useEffect)((()=>{const e=e=>{"Escape"===e.code&&i()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)})),(0,a.useEffect)((()=>(s&&(document.body.style.overflow="hidden",document.body.style.pointerEvents="none",document.body.style.overflow="",document.body.style.pointerEvents=""),()=>{document.body.style.overflow="",document.body.style.pointerEvents=""})),[s]);const l=e=>{const t=e.target;t&&1===t.children.length&&i()},o=document.getElementById("modal-root");return o&&o?(0,n.createPortal)((0,r.jsx)(d.zs,{onClick:l,children:(0,r.jsx)(d.aF,{onClick:e=>e.stopPropagation(),children:t})}),o):null}},7745:(e,t,i)=>{i.d(t,{O6:()=>n,bK:()=>s,tA:()=>d,w_:()=>r});var a=i(5464);const n=a.default.button`
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
`,d=a.default.button`
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
`,r=a.default.button`
  border: 2px solid #F59256;
  background-color: #F59256;
  border-radius: 40px;
  
  padding: 9px;
  text-align: center;
  
  width: 100%;
  color: white;

  font-size: 20px;
  font-weight: 500;
`,s=a.default.button`
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
//# sourceMappingURL=206.9cdcaebe.chunk.js.map