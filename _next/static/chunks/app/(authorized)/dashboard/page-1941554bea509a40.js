(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[560],{5941:(e,t,a)=>{Promise.resolve().then(a.bind(a,8678))},8678:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>T});var s=a(5155),r=a(9616);let n=()=>new Date().toISOString().split("T")[0];var l=a(2115),i=a(3473),d=a(7709),o=a(3312),c=a(8299),u=a(767),m=a(1567);let x=c.bL,p=c.l9,g=c.ZL;c.bm;let f=l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(c.hJ,{ref:t,className:(0,m.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});f.displayName=c.hJ.displayName;let h=l.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(f,{}),(0,s.jsxs)(c.UC,{ref:t,className:(0,m.cn)("fixed left-[50%] top-0 z-50 grid w-full max-w-lg translate-x-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:top-[50%] md:translate-y-[-50%]",a),...n,children:[r,(0,s.jsxs)(c.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(u.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});h.displayName=c.UC.displayName;let b=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,m.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};b.displayName="DialogHeader";let v=l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(c.hE,{ref:t,className:(0,m.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})});v.displayName=c.hE.displayName;let j=l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(c.VY,{ref:t,className:(0,m.cn)("text-sm text-muted-foreground",a),...r})});j.displayName=c.VY.displayName;let N=l.forwardRef((e,t)=>{let{className:a,type:r,...n}=e;return(0,s.jsx)("input",{type:r,className:(0,m.cn)("text-basetransition-colors flex h-10 w-full rounded-sm border border-input bg-transparent px-3 py-1 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...n})});N.displayName="Input";let y=e=>{let{products:t,onAddEntry:a,selectedDate:r}=e,[n,c]=(0,l.useState)(null),[u,m]=(0,l.useState)(""),[g,f]=(0,l.useState)(!1),y=t.map(e=>({value:e.id,label:"".concat(e.name," (").concat(e.caloriesPer100g," ккал/100г)")}));return(0,s.jsxs)(x,{open:g,onOpenChange:f,children:[(0,s.jsx)(p,{asChild:!0,children:(0,s.jsx)(o.$,{className:"fixed bottom-20 right-6 h-14 w-14 rounded-full p-0 md:right-1/4",size:"icon",children:(0,s.jsx)(i.A,{className:"h-6 w-6"})})}),(0,s.jsxs)(h,{className:"sm:max-w-[425px]",children:[(0,s.jsxs)(b,{children:[(0,s.jsx)(v,{children:"Додати спожиту їжу"}),(0,s.jsx)(j,{children:'Додайте продукти до свого щоденника. Натисніть кнопку "Додати" після завершення.'})]}),(0,s.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),n&&u){let e=t.find(e=>e.id===n.value);if(!e)return;let s=Math.round(e.caloriesPer100g*Number.parseInt(u)/100);a({productId:n.value,grams:Number.parseInt(u),date:r,productName:e.name,calories:s}),c(null),m(""),f(!1)}},className:"space-y-4",children:[(0,s.jsx)(d.Ay,{options:y,value:n,onChange:c,placeholder:"Виберіть продукт",className:"react-select-container",classNamePrefix:"react-select"}),(0,s.jsx)(N,{type:"number",placeholder:"Грам",value:u,onChange:e=>m(e.target.value)}),(0,s.jsx)(o.$,{type:"submit",className:"w-full",children:"Додати"})]})]})]})};var w=a(5686),S=a(9223),k=a(6030),C=a(9749);function D(e){let{value:t,className:a=""}=e;return(0,s.jsxs)("div",{className:"relative h-[1px] ".concat(a),children:[(0,s.jsx)("div",{className:"absolute right-1/2 top-0 h-full rounded-l-sm bg-primary/60",style:{width:"".concat(t/2,"%")}}),(0,s.jsx)("div",{className:"absolute left-1/2 top-0 h-full rounded-r-sm bg-primary/60",style:{width:"".concat(t/2,"%")}})]})}let A={id:"",productId:"",productName:"",grams:0,calories:0,date:"",userId:"",createdAt:""},I=e=>{var t,a;let{entries:n,onDeleteEntry:i,selectedDate:d}=e,[o,c]=(0,l.useState)({isOpen:!1,entry:A}),{user:u}=(0,r.Z)(),{goalForDate:m,loading:x}=(0,S.l)(null==u?void 0:u.uid,d),p=n.reduce((e,t)=>e+t.calories,0),g=m?m-p:0,f=m?p/m*100:0,h=g>=0?{bar:"bg-primary",text:"text-primary"}:110>=Math.abs(g)?{bar:"bg-warning",text:"text-warning"}:{bar:"bg-error",text:"text-error"},b=g>=0?{bar:"progress-primary",text:"text-primary"}:110>=Math.abs(g)?{bar:"progress-warning",text:"text-warning"}:{bar:"progress-error",text:"text-error"},v=e=>{c({isOpen:!0,entry:e})};return x?(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("span",{className:"loading loading-ring loading-lg"})}):(0,s.jsxs)("div",{children:[(0,s.jsx)(C.Zp,{className:"mb-4",children:(0,s.jsxs)(C.Wu,{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("span",{className:"text-lg font-medium",children:"Прогрес"}),(0,s.jsxs)("span",{className:"text-lg font-medium ".concat(h.text),children:[" ",x?(0,s.jsx)("span",{className:"loading loading-ring loading-xs mr-1"}):Math.round(f),"%"]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("progress",{className:"progress ".concat(b.bar),value:x?void 0:f,max:"100"}),(0,s.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-gray-500",children:"Спожито"}),(0,s.jsxs)("p",{className:"font-medium",children:[p," ккал"]})]}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("p",{className:"text-gray-500",children:"Залишилось"}),(0,s.jsx)("p",{className:"font-medium",children:(0,s.jsxs)("span",{className:h.text,children:[x?(0,s.jsx)("span",{className:"loading loading-ring loading-xs"}):Math.abs(g)," ","ккал",g>=0?"":80>=Math.abs(g)?" трохи перевищено":" перевищено"]})})]}),(0,s.jsxs)("div",{className:"text-right",children:[(0,s.jsx)("p",{className:"text-gray-500",children:"Ціль"}),(0,s.jsxs)("p",{className:"font-medium",children:[m," ккал"]})]})]})]})]})}),(0,s.jsx)(C.Zp,{children:(0,s.jsxs)(C.Wu,{children:[(0,s.jsx)("div",{className:"space-y-2",children:n.map(e=>{let t=m?e.calories/m*100:0;return(0,s.jsxs)("div",{className:"rounded-lg bg-base-200 pl-2",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between gap-x-2",children:[(0,s.jsxs)("div",{className:"flex min-w-0 flex-1 items-center gap-x-2",children:[(0,s.jsx)("span",{className:"text-overflow-ellipsis block overflow-hidden truncate whitespace-nowrap font-medium",children:e.productName}),(0,s.jsxs)("span",{className:"whitespace-nowrap text-sm text-base-content/70",children:[" ","• ",e.grams,"г"]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsxs)("span",{className:"text-sm font-medium",children:[e.calories," ккал"]}),(0,s.jsx)("button",{className:"btn btn-ghost btn-sm",onClick:()=>v(e),children:(0,s.jsx)(w.A,{size:16})})]})]}),(0,s.jsx)(D,{value:t,className:"-mt-[2px]"})]},e.id)})}),(0,s.jsx)(k.R,{isOpen:o.isOpen,onConfirm:()=>{o.entry&&(i(o.entry.id),c({isOpen:!1,entry:A}))},onCancel:()=>c({isOpen:!1,entry:A}),itemName:"".concat(null===(t=o.entry)||void 0===t?void 0:t.productName," (").concat(null===(a=o.entry)||void 0===a?void 0:a.grams,"г)")})]})})]})},E=e=>new Date(e).toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"});var O=a(3518),P=a(2423),z=a(6967);let R=(e,t)=>{let a=new Date(e);return a.setDate(a.getDate()+t),a.toISOString().split("T")[0]},M=e=>{let{date:t,onDateChange:a}=e;return(0,s.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,s.jsx)(o.$,{onClick:()=>a(R(t,-1)),variant:"ghost",children:(0,s.jsx)(O.A,{className:"!size-5"})}),(0,s.jsxs)(o.$,{onClick:()=>a(n()),variant:"ghost",className:"text-base",children:[(0,s.jsx)(P.A,{size:16}),E(t)]}),(0,s.jsx)(o.$,{onClick:()=>a(R(t,1)),variant:"ghost",children:(0,s.jsx)(z.A,{className:"!size-5"})})]})},_=e=>{let{products:t,entries:a,selectedDate:r,onAddEntry:n,onDeleteEntry:l,onDateChange:i}=e,d=a.filter(e=>e.date===r);return(0,s.jsxs)("div",{className:"min-h-screen pb-28",children:[(0,s.jsx)("div",{className:"bg-background shadow-sm",children:(0,s.jsx)("div",{className:"mx-auto max-w-xl px-4 py-2",children:(0,s.jsx)(M,{date:r,onDateChange:i})})}),(0,s.jsx)("div",{className:"mx-auto max-w-xl px-4 py-4",children:(0,s.jsx)(I,{entries:d,onDeleteEntry:l,selectedDate:r})}),(0,s.jsx)(y,{products:t,onAddEntry:n,selectedDate:r})]})};var Q=a(7058),J=a(4595);let G=(e,t)=>{let[a,s]=(0,l.useState)([]),[r,n]=(0,l.useState)(!0);return(0,l.useEffect)(()=>{if(!e)return;let a=(0,Q.P)((0,Q.rJ)(J.db,"entries"),(0,Q._M)("userId","==",e),(0,Q._M)("date","==",t),(0,Q.My)("createdAt","desc")),r=(0,Q.aQ)(a,e=>{s(e.docs.map(e=>({id:e.id,...e.data()}))),n(!1)});return()=>r()},[e,t]),{entries:a,loading:r,addEntry:async t=>{try{await (0,Q.gS)((0,Q.rJ)(J.db,"entries"),{...t,userId:e,createdAt:new Date().toISOString()})}catch(e){throw console.error("Error adding entry:",e),e}},deleteEntry:async e=>{try{await (0,Q.kd)((0,Q.H9)(J.db,"entries",e))}catch(e){throw console.error("Error deleting entry:",e),e}}}};var H=a(6498);function T(){let{user:e}=(0,r.Z)(),{products:t,loading:a}=(0,H.Q)(null==e?void 0:e.uid),[i,d]=(0,l.useState)(n()),{entries:o,addEntry:c,deleteEntry:u,loading:m}=G(null==e?void 0:e.uid,i);return a||m?(0,s.jsx)("div",{className:"flex min-h-screen items-center justify-center",children:(0,s.jsx)("span",{className:"loading loading-ring loading-lg"})}):(0,s.jsx)(_,{products:t,entries:o,selectedDate:i,onAddEntry:c,onDeleteEntry:u,onDateChange:d})}},6030:(e,t,a)=>{"use strict";a.d(t,{R:()=>r});var s=a(5155);let r=e=>{let{isOpen:t,onConfirm:a,onCancel:r,itemName:n}=e;return t?(0,s.jsxs)("div",{className:"modal modal-open rounded-box",children:[(0,s.jsxs)("div",{className:"modal-box",children:[(0,s.jsx)("h3",{className:"text-lg font-bold",children:"Підтвердження видалення"}),(0,s.jsxs)("p",{className:"py-4",children:["Ви впевнені, що хочете видалити ",n,"?"]}),(0,s.jsxs)("div",{className:"modal-action",children:[(0,s.jsx)("button",{className:"btn",onClick:r,children:"Скасувати"}),(0,s.jsx)("button",{className:"btn btn-error",onClick:a,children:"Видалити"})]})]}),(0,s.jsx)("div",{className:"modal-backdrop",onClick:r})]}):null}},3312:(e,t,a)=>{"use strict";a.d(t,{$:()=>o});var s=a(5155),r=a(2317),n=a(1027),l=a(2115),i=a(1567);let d=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=l.forwardRef((e,t)=>{let{className:a,variant:n,size:l,asChild:o=!1,...c}=e,u=o?r.DX:"button";return(0,s.jsx)(u,{className:(0,i.cn)(d({variant:n,size:l,className:a})),ref:t,...c})});o.displayName="Button"},9749:(e,t,a)=>{"use strict";a.d(t,{Wu:()=>i,Zp:()=>l});var s=a(5155),r=a(2115),n=a(1567);let l=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...r})});l.displayName="Card",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",a),...r})}).displayName="CardHeader",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",a),...r})}).displayName="CardTitle",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",a),...r})}).displayName="CardDescription";let i=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("p-4",a),...r})});i.displayName="CardContent",r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-4",a),...r})}).displayName="CardFooter"},6060:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var s=a(399),r=a(2115),n=a(4595);let l=()=>{let[e,t]=(0,r.useState)(null),[a,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let e=(0,s.hg)(n.j,e=>{t(e),l(!1)});return()=>e()},[]),{user:e,loading:a,signInWithGoogle:async()=>{try{return(await (0,s.df)(n.j,n.h)).user}catch(e){throw console.error("Error signing in with Google:",e),e}},logout:()=>(0,s.CI)(n.j)}}},9223:(e,t,a)=>{"use strict";a.d(t,{l:()=>l});var s=a(7058),r=a(2115),n=a(4595);let l=(e,t)=>{let[a,l]=(0,r.useState)([]),[i,d]=(0,r.useState)(null),[o,c]=(0,r.useState)(null),[u,m]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{if(!e)return;let a=(0,s.P)((0,s.rJ)(n.db,"calorieGoals"),(0,s._M)("userId","==",e),(0,s.My)("startDate","desc")),r=(0,s.aQ)(a,e=>{let a=e.docs.map(e=>({id:e.id,...e.data()}));if(l(a),a.length>0&&d(a[0].value),t){let e=new Date(t).getTime(),s=null;for(let t of a)if(new Date(t.startDate).setHours(0,0,0,0)<=e){s=t;break}c(s?s.value:null)}else c(a.length>0?a[0].value:null);m(!1)});return()=>r()},[e,t]),{goalHistory:a,currentGoal:i,goalForDate:o,setNewGoal:async t=>{if(e)try{await (0,s.gS)((0,s.rJ)(n.db,"calorieGoals"),{userId:e,value:t,startDate:new Date().toISOString(),createdAt:new Date().toISOString()}),await (0,s.BN)((0,s.H9)(n.db,"userProfiles",e),{userId:e,currentGoal:t,lastUpdated:new Date().toISOString()},{merge:!0})}catch(e){throw console.error("Error setting new goal:",e),e}},loading:u}}},6498:(e,t,a)=>{"use strict";a.d(t,{Q:()=>l});var s=a(7058),r=a(2115),n=a(4595);let l=e=>{let[t,a]=(0,r.useState)([]),[l,i]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{if(!e)return;let t=(0,s.P)((0,s.rJ)(n.db,"products"),(0,s._M)("userId","==",e)),r=(0,s.aQ)(t,e=>{let t=e.docs.map(e=>({id:e.id,...e.data()}));t.sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()),a(t),i(!1)});return()=>r()},[e]),{products:t,loading:l,addProduct:async t=>{try{await (0,s.gS)((0,s.rJ)(n.db,"products"),{...t,userId:e,createdAt:new Date().toISOString()})}catch(e){throw console.error("Error adding product:",e),e}},deleteProduct:async e=>{try{await (0,s.kd)((0,s.H9)(n.db,"products",e))}catch(e){throw console.error("Error deleting product:",e),e}}}}},4595:(e,t,a)=>{"use strict";a.d(t,{db:()=>o,h:()=>d,j:()=>i});var s=a(9904),r=a(399),n=a(7058);let l=(0,s.Wp)({apiKey:"AIzaSyCFQPz1JQSGn8M2QdVkxA8tWqQvQT0QYcA",authDomain:"tracking-kcal.firebaseapp.com",projectId:"tracking-kcal",storageBucket:"tracking-kcal.firebasestorage.app",messagingSenderId:"959211134233",appId:"1:959211134233:web:621d0a43eeeb642a347988"}),i=(0,r.xI)(l),d=new r.HF,o=(0,n.aU)(l)},1567:(e,t,a)=>{"use strict";a.d(t,{cn:()=>n});var s=a(3463),r=a(9795);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.QP)((0,s.$)(t))}},9616:(e,t,a)=>{"use strict";a.d(t,{AuthProvider:()=>i,Z:()=>d});var s=a(5155),r=a(2115),n=a(6060);let l=(0,r.createContext)(null),i=e=>{let{children:t}=e,a=(0,n.A)();return(0,s.jsx)(l.Provider,{value:a,children:t})},d=()=>{let e=(0,r.useContext)(l);if(!e)throw Error("useAuthContext must be used within AuthProvider");return e}}},e=>{var t=t=>e(e.s=t);e.O(0,[992,882,459,172,134,441,517,358],()=>t(5941)),_N_E=e.O()}]);