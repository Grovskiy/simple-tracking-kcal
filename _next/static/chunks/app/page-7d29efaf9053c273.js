(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2785:(e,t,s)=>{Promise.resolve().then(s.bind(s,5480))},7401:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var a=s(2115);let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,a.forwardRef)((e,t)=>{let{color:s="currentColor",size:r=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:i="",children:o,iconNode:m,...u}=e;return(0,a.createElement)("svg",{ref:t,...l,width:r,height:r,stroke:s,strokeWidth:d?24*Number(c)/Number(r):c,className:n("lucide",i),...u},[...m.map(e=>{let[t,s]=e;return(0,a.createElement)(t,s)}),...Array.isArray(o)?o:[o]])}),d=(e,t)=>{let s=(0,a.forwardRef)((s,l)=>{let{className:d,...i}=s;return(0,a.createElement)(c,{ref:l,iconNode:t,className:n("lucide-".concat(r(e)),d),...i})});return s.displayName="".concat(e),s}},6046:(e,t,s)=>{"use strict";var a=s(6658);s.o(a,"useRouter")&&s.d(t,{useRouter:function(){return a.useRouter}})},5480:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>z});var a=s(5155),r=s(9616),n=s(7401);let l=(0,n.A)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),c=()=>new Date().toISOString().split("T")[0];var d=s(2115);let i=(0,n.A)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),o=e=>{let{products:t,onAddEntry:s,selectedDate:r}=e,[n,l]=(0,d.useState)(""),[c,o]=(0,d.useState)("");return(0,a.jsx)("div",{className:"card card-compact bg-base-100 shadow-xl",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("h2",{className:"card-title text-base",children:"Додати спожиту їжу"}),(0,a.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),n&&c){let e=t.find(e=>e.id===n);if(!e)return;let a=Math.round(e.caloriesPer100g*parseInt(c)/100);s({productId:n,grams:parseInt(c),date:r,productName:e.name,calories:a}),l(""),o("")}},className:"flex gap-2",children:[(0,a.jsxs)("select",{className:"select select-bordered select-md w-full max-w-xs flex-1",value:n,onChange:e=>l(e.target.value),children:[(0,a.jsx)("option",{value:"",children:"Виберіть продукт"}),t.map(e=>(0,a.jsxs)("option",{value:e.id,children:[e.name," (",e.caloriesPer100g," ккал/100г)"]},e.id))]}),(0,a.jsx)("input",{type:"number",placeholder:"Грам",className:"input input-md input-bordered w-32",value:c,onChange:e=>o(e.target.value)}),(0,a.jsx)("button",{type:"submit",className:"btn btn-primary btn-md",children:(0,a.jsx)(i,{className:"h-5 w-5"})})]})]})})},m=e=>{let{onAddProduct:t}=e,[s,r]=(0,d.useState)(""),[n,l]=(0,d.useState)("");return(0,a.jsx)("div",{className:"card card-compact",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("h2",{className:"card-title text-base",children:"Додати новий продукт"}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s&&n&&(t({name:s,caloriesPer100g:parseInt(n)}),r(""),l(""))},className:"flex gap-2",children:[(0,a.jsxs)("label",{className:"form-control w-full max-w-xs flex-1",children:[(0,a.jsx)("div",{className:"label",children:(0,a.jsx)("span",{className:"label-text",children:"Назва продукту"})}),(0,a.jsx)("input",{type:"text",placeholder:"Цільнозерновий хліб",className:"input input-md input-bordered w-full max-w-xs",value:s,onChange:e=>r(e.target.value)})]}),(0,a.jsxs)("label",{className:"form-controlmax-w-xs",children:[(0,a.jsx)("div",{className:"label",children:(0,a.jsx)("span",{className:"label-text",children:"Ккал на 100г"})}),(0,a.jsx)("input",{type:"number",placeholder:"244",className:"input input-md input-bordered w-28",value:n,onChange:e=>l(e.target.value)})]}),(0,a.jsxs)("label",{className:"form-control max-w-xs",children:[(0,a.jsx)("div",{className:"label",children:(0,a.jsx)("span",{className:"label-text",children:"⠀"})}),(0,a.jsx)("button",{type:"submit",className:"btn btn-primary btn-md",children:(0,a.jsx)(i,{className:"h-5 w-5"})})]})]})]})})},u=e=>new Date(e).toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),x=(0,n.A)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),h=e=>{let{isOpen:t,onConfirm:s,onCancel:r,itemName:n}=e;return t?(0,a.jsxs)("div",{className:"modal modal-open rounded-box",children:[(0,a.jsxs)("div",{className:"modal-box",children:[(0,a.jsx)("h3",{className:"text-lg font-bold",children:"Підтвердження видалення"}),(0,a.jsxs)("p",{className:"py-4",children:["Ви впевнені, що хочете видалити ",n,"?"]}),(0,a.jsxs)("div",{className:"modal-action",children:[(0,a.jsx)("button",{className:"btn",onClick:r,children:"Скасувати"}),(0,a.jsx)("button",{className:"btn btn-error",onClick:s,children:"Видалити"})]})]}),(0,a.jsx)("div",{className:"modal-backdrop",onClick:r})]}):null},p="calorieGoal",b=()=>localStorage.getItem(p)||"1700",j=e=>{localStorage.setItem(p,e)},g={id:"",productId:"",productName:"",grams:0,calories:0,date:"",userId:"",createdAt:""},N=e=>{var t,s;let{entries:r,date:n,onDeleteEntry:l}=e,[c,i]=(0,d.useState)({isOpen:!1,entry:g}),[o,m]=(0,d.useState)(b()),p=r.reduce((e,t)=>e+t.calories,0),N=parseInt(o)-p,v=Math.min(p/parseInt(o)*100,100),y=N>=0?{bar:"bg-primary",text:"text-primary"}:80>=Math.abs(N)?{bar:"bg-warning",text:"text-warning"}:{bar:"bg-error",text:"text-error"},f=e=>{i({isOpen:!0,entry:e})},w=e=>{m(e),j(e)};return(0,a.jsx)("div",{className:"card card-compact bg-base-100 shadow-xl",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h2",{className:"card-title text-base",children:u(n)}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-2xl font-bold",children:p}),(0,a.jsxs)("details",{className:"dropdown dropdown-end w-full",children:[(0,a.jsxs)("summary",{className:"btn btn-sm text-sm text-base-content/70",children:["/ ",o," ккал"]}),(0,a.jsx)("div",{className:"dropdown-content glass z-[1] mt-2 rounded-box p-2 shadow",children:(0,a.jsxs)("label",{className:"form-controlmax-w-xs",children:[(0,a.jsx)("div",{className:"label",children:(0,a.jsx)("span",{className:"label-text",children:"Денна ціль"})}),(0,a.jsx)("input",{type:"number",placeholder:"1700",className:"input input-md input-bordered w-28",value:o,onChange:e=>w(e.target.value)})]})})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mb-1 h-2 w-full rounded-full bg-base-200",children:(0,a.jsx)("div",{className:"h-2 rounded-full ".concat(y.bar),style:{width:"".concat(v,"%")}})}),(0,a.jsxs)("div",{className:"mb-1 flex justify-between text-sm",children:[(0,a.jsx)("span",{children:"Прогрес"}),(0,a.jsxs)("span",{children:[Math.round(v),"%"]})]}),(0,a.jsxs)("div",{className:"mt-1 flex justify-between text-sm",children:[(0,a.jsx)("span",{children:"Залишилось:"}),(0,a.jsxs)("span",{className:y.text,children:[Math.abs(N)," ккал",N>=0?"":80>=Math.abs(N)?" трохи перевищено":" перевищено"]})]})]}),(0,a.jsx)("div",{className:"space-y-2",children:r.map(e=>(0,a.jsxs)("div",{className:"flex items-center justify-between rounded-lg bg-base-200 px-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-medium",children:e.productName}),(0,a.jsxs)("span",{className:"text-sm text-base-content/70",children:[" • ",e.grams,"г"]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsxs)("span",{className:"font-medium",children:[e.calories," ккал"]}),(0,a.jsx)("button",{className:"btn btn-ghost btn-sm",onClick:()=>f(e),children:(0,a.jsx)(x,{size:16})})]})]},e.id))}),(0,a.jsx)(h,{isOpen:c.isOpen,onConfirm:()=>{c.entry&&(l(c.entry.id),i({isOpen:!1,entry:g}))},onCancel:()=>i({isOpen:!1,entry:g}),itemName:"".concat(null===(t=c.entry)||void 0===t?void 0:t.productName," (").concat(null===(s=c.entry)||void 0===s?void 0:s.grams,"г)")})]})})},v=(0,n.A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),y=(0,n.A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),f=(0,n.A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),w=(e,t)=>{let s=new Date(e);return s.setDate(s.getDate()+t),s.toISOString().split("T")[0]},k=e=>{let{date:t,onDateChange:s}=e;return(0,a.jsxs)("div",{className:"my-4 flex items-center justify-center gap-4",children:[(0,a.jsx)("button",{className:"btn btn-circle btn-outline btn-neutral btn-sm",onClick:()=>s(w(t,-1)),children:(0,a.jsx)(v,{className:"h-5 w-5"})}),(0,a.jsxs)("button",{className:"btn btn-ghost btn-outline btn-neutral btn-sm gap-2",onClick:()=>s(c()),children:[(0,a.jsx)(y,{className:"h-5 w-5"}),u(t)]}),(0,a.jsx)("button",{className:"btn btn-circle btn-outline btn-neutral btn-sm",onClick:()=>s(w(t,1)),children:(0,a.jsx)(f,{className:"h-5 w-5"})})]})},C={id:"",name:"",caloriesPer100g:0,userId:"",createdAt:""},S=e=>{var t;let{products:s,onDeleteProduct:r}=e,[n,l]=(0,d.useState)({isOpen:!1,product:C}),c=e=>{l({isOpen:!0,product:e})};return(0,a.jsx)("div",{className:"card card-compact",children:(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("h2",{className:"card-title text-base",children:"Мої продукти"}),(0,a.jsx)("div",{className:"space-y-2",children:s.map(e=>(0,a.jsxs)("div",{className:"flex items-center justify-between rounded-lg bg-base-100 px-2 shadow-md",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"font-medium",children:e.name}),(0,a.jsxs)("span",{className:"text-sm text-base-content/70",children:[" ","• ",e.caloriesPer100g," ккал/100г"]})]}),(0,a.jsx)("button",{className:"btn btn-ghost btn-sm",onClick:()=>c(e),children:(0,a.jsx)(x,{size:16})})]},e.id))}),(0,a.jsx)(h,{isOpen:n.isOpen,onConfirm:()=>{n.product&&(r(n.product.id),l({isOpen:!1,product:C}))},onCancel:()=>l({isOpen:!1,product:C}),itemName:null===(t=n.product)||void 0===t?void 0:t.name})]})})},A=e=>{let{products:t,entries:s,onAddProduct:r,onAddEntry:n,onDeleteProduct:l,onDeleteEntry:i}=e,[u,x]=(0,d.useState)(c()),h=s.filter(e=>e.date===u);return(0,a.jsxs)("div",{className:"mx-auto max-w-lg space-y-4 p-4",children:[(0,a.jsxs)("details",{className:"dropdown w-full",children:[(0,a.jsx)("summary",{className:"btn btn-outline btn-neutral btn-sm btn-block mb-2",children:"Додати новий продукт"}),(0,a.jsxs)("div",{className:"dropdown-content glass z-[1] w-full rounded-box p-2 shadow",children:[(0,a.jsx)(m,{onAddProduct:r}),(0,a.jsx)(S,{products:t,onDeleteProduct:l})]})]}),(0,a.jsx)(k,{date:u,onDateChange:x}),(0,a.jsx)(o,{products:t,onAddEntry:n,selectedDate:u}),(0,a.jsx)(N,{entries:h,date:u,onDeleteEntry:i})]})};var I=s(6046);let E=e=>{let{children:t}=e,{user:s,loading:n}=(0,r.Z)(),l=(0,I.useRouter)();return((0,d.useEffect)(()=>{n||s||l.push("/auth")},[s,n,l]),n)?(0,a.jsx)("div",{className:"flex min-h-screen items-center justify-center",children:(0,a.jsx)("span",{className:"loading loading-ring loading-lg"})}):s?(0,a.jsx)(a.Fragment,{children:t}):null};var O=s(7058),P=s(4595);let M=e=>{let[t,s]=(0,d.useState)([]),[a,r]=(0,d.useState)(!0);return(0,d.useEffect)(()=>{if(!e)return;let t=(0,O.P)((0,O.rJ)(P.db,"entries"),(0,O._M)("userId","==",e)),a=(0,O.aQ)(t,e=>{s(e.docs.map(e=>({id:e.id,...e.data()}))),r(!1)});return()=>a()},[e]),{entries:t,loading:a,addEntry:async t=>{try{await (0,O.gS)((0,O.rJ)(P.db,"entries"),{...t,userId:e,createdAt:new Date().toISOString()})}catch(e){throw console.error("Error adding entry:",e),e}},deleteEntry:async e=>{try{await (0,O.kd)((0,O.H9)(P.db,"entries",e))}catch(e){throw console.error("Error deleting entry:",e),e}}}},D=e=>{let[t,s]=(0,d.useState)([]),[a,r]=(0,d.useState)(!0);return(0,d.useEffect)(()=>{if(!e)return;let t=(0,O.P)((0,O.rJ)(P.db,"products"),(0,O._M)("userId","==",e)),a=(0,O.aQ)(t,e=>{s(e.docs.map(e=>({id:e.id,...e.data()}))),r(!1)});return()=>a()},[e]),{products:t,loading:a,addProduct:async t=>{try{await (0,O.gS)((0,O.rJ)(P.db,"products"),{...t,userId:e,createdAt:new Date().toISOString()})}catch(e){throw console.error("Error adding product:",e),e}},deleteProduct:async e=>{try{await (0,O.kd)((0,O.H9)(P.db,"products",e))}catch(e){throw console.error("Error deleting product:",e),e}}}};function z(){let{user:e,logout:t}=(0,r.Z)(),{products:s,addProduct:n,deleteProduct:c,loading:d}=D(null==e?void 0:e.uid),{entries:i,addEntry:o,deleteEntry:m,loading:u}=M(null==e?void 0:e.uid);return d||u?(0,a.jsx)("div",{className:"flex min-h-screen items-center justify-center",children:(0,a.jsx)("span",{className:"loading loading-ring loading-lg"})}):(0,a.jsx)(E,{children:(0,a.jsxs)("div",{className:"grid min-h-screen grid-rows-[1fr_55px] justify-items-center font-[family-name:var(--font-geist-sans)]",children:[(0,a.jsxs)("main",{className:"row-start-1 flex flex-col items-start",children:[(0,a.jsxs)("div",{className:"mx-auto pb-4 pt-8 text-sm",children:["Вітаю, ",null==e?void 0:e.email]}),(0,a.jsx)(A,{products:s,entries:i,onAddProduct:n,onAddEntry:o,onDeleteProduct:c,onDeleteEntry:m})]}),(0,a.jsx)("footer",{className:"row-start-2 flex flex-wrap items-center justify-center gap-6",children:(0,a.jsxs)("button",{onClick:t,className:"btn btn-sm",children:["Вийти",(0,a.jsx)(l,{size:16})]})})]})})}},6060:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var a=s(399),r=s(2115),n=s(4595);let l=()=>{let[e,t]=(0,r.useState)(null),[s,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let e=(0,a.hg)(n.j,e=>{t(e),l(!1)});return()=>e()},[]),{user:e,loading:s,signInWithGoogle:async()=>{try{return(await (0,a.df)(n.j,n.h)).user}catch(e){throw console.error("Error signing in with Google:",e),e}},logout:()=>(0,a.CI)(n.j)}}},4595:(e,t,s)=>{"use strict";s.d(t,{db:()=>i,h:()=>d,j:()=>c});var a=s(9904),r=s(399),n=s(7058);let l=(0,a.Wp)({apiKey:"AIzaSyCFQPz1JQSGn8M2QdVkxA8tWqQvQT0QYcA",authDomain:"tracking-kcal.firebaseapp.com",projectId:"tracking-kcal",storageBucket:"tracking-kcal.firebasestorage.app",messagingSenderId:"959211134233",appId:"1:959211134233:web:621d0a43eeeb642a347988"}),c=(0,r.xI)(l),d=new r.HF,i=(0,n.aU)(l)},9616:(e,t,s)=>{"use strict";s.d(t,{AuthProvider:()=>c,Z:()=>d});var a=s(5155),r=s(2115),n=s(6060);let l=(0,r.createContext)(null),c=e=>{let{children:t}=e,s=(0,n.A)();return(0,a.jsx)(l.Provider,{value:s,children:t})},d=()=>{let e=(0,r.useContext)(l);if(!e)throw Error("useAuthContext must be used within AuthProvider");return e}}},e=>{var t=t=>e(e.s=t);e.O(0,[992,882,459,441,517,358],()=>t(2785)),_N_E=e.O()}]);