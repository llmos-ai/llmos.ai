"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[853],{7603:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(4848),a=t(8453);const r={sidebar_position:2,title:"Role Templates"},l=void 0,o={id:"user_and_auth/role-template",title:"Role Templates",description:"Role templates are used to create roles with predefined permissions that can be assigned to users. LLMOS currently has two types of role templates:",source:"@site/docs/user_and_auth/role-template.md",sourceDirName:"user_and_auth",slug:"/user_and_auth/role-template",permalink:"/docs/user_and_auth/role-template",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/user_and_auth/role-template.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Role Templates"},sidebar:"tutorialSidebar",previous:{title:"Users",permalink:"/docs/user_and_auth/user"},next:{title:"API Keys",permalink:"/docs/user_and_auth/api-keys"}},i={},c=[{value:"Global Roles",id:"global-roles",level:2},{value:"Creating a Custom Global Role",id:"creating-a-custom-global-role",level:3},{value:"Namespace Roles",id:"namespace-roles",level:2},{value:"Creating a Custom Namespace Role",id:"creating-a-custom-namespace-role",level:3},{value:"RBAC Management",id:"rbac-management",level:2},{value:"Namespace Permissions",id:"namespace-permissions",level:3}];function d(e){const s={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Role templates are used to create roles with predefined permissions that can be assigned to users. LLMOS currently has two types of role templates:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Global Roles"}),": These roles are used to grant permissions to users at the system level."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Namespace Roles"}),": These roles can be assigned to users within specific namespaces. They grant permissions to users within the namespace they are assigned to."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"global-roles",children:"Global Roles"}),"\n",(0,n.jsxs)(s.p,{children:["Global roles has predefined roles created by the LLMOS that are available to all users. They are used to grant permissions to users at the system level. Built-in roles can't be modified or deleted.\nCurrently, LLMOS comes with two default ",(0,n.jsx)(s.strong,{children:"Global Roles"})," which are ",(0,n.jsx)(s.strong,{children:"Admin"})," and ",(0,n.jsx)(s.strong,{children:"Standard User"}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Role Name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Administrator"}),(0,n.jsx)(s.td,{children:"Full control over the entire system and cluster components."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Standard User"}),(0,n.jsx)(s.td,{children:"Limited access to the system resources and can only perform actions that are allowed by their role within the assigned namespaces."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"creating-a-custom-global-role",children:"Creating a Custom Global Role"}),"\n",(0,n.jsx)(s.p,{children:"Admin users can add new global roles and assign them to users with the following steps:."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Log in to the LLMOS dashboard as an admin user."}),"\n",(0,n.jsxs)(s.li,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"Users & Authentication"})," > ",(0,n.jsx)(s.strong,{children:"Role Tempaltes"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Create Global Role"})," button on the top right corner."]}),"\n",(0,n.jsxs)(s.li,{children:["Specify the ",(0,n.jsx)(s.strong,{children:"Name"})," and ",(0,n.jsx)(s.strong,{children:"Description"}),"(optional)."]}),"\n",(0,n.jsxs)(s.li,{children:["Select ",(0,n.jsx)(s.strong,{children:"New User Default"})," checkbox if you want to assign this role to new users by default."]}),"\n",(0,n.jsxs)(s.li,{children:["On the ",(0,n.jsx)(s.strong,{children:"Grant Resources"})," tab, add the resources and permissions that you want to grant to the role.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["For more details about the resources and permissions, refer to the Kubernetes ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",children:"RBAC"})," documentation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Create Global Role",src:t(6999).A+"",width:"3696",height:"1850"})}),"\n",(0,n.jsxs)(s.p,{children:["After adding the new global role, you should be able to see the new role listed on the ",(0,n.jsx)(s.strong,{children:"Custom"})," section when creating a new user or editing a existing user."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Assign Global Role",src:t(3096).A+"",width:"3180",height:"1718"})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"For global roles, users will have access to the assigned resources in all namespaces they have access to. So if you want to restrict access to the namespace-level, consider creating a custom namespace role template instead."})}),"\n",(0,n.jsx)(s.h2,{id:"namespace-roles",children:"Namespace Roles"}),"\n",(0,n.jsxs)(s.p,{children:["Namespace roles are roles that can be assigned to grant permissions to users within specific namespaces. LLMOS comes with two default ",(0,n.jsx)(s.strong,{children:"Namespace Roles"})," which are ",(0,n.jsx)(s.strong,{children:"Namespace Owner"})," and ",(0,n.jsx)(s.strong,{children:"Namespace Ready-Only"}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Role Name"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Namespace Owner"}),(0,n.jsx)(s.td,{children:"Full control over the resources within the namespace they are assigned to."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Namespace Ready-Only"}),(0,n.jsx)(s.td,{children:"Read-only access to the resources within the namespace they are assigned to."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"creating-a-custom-namespace-role",children:"Creating a Custom Namespace Role"}),"\n",(0,n.jsx)(s.p,{children:"Custom namespace roles will only take effect if they are assigned to users within a namespace. They can be created by admin users with the following steps:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Log in to the LLMOS dashboard as an admin user."}),"\n",(0,n.jsxs)(s.li,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"Users & Authentication"})," > ",(0,n.jsx)(s.strong,{children:"Role Tempaltes"})," and click the ",(0,n.jsx)(s.strong,{children:"Namespaces"})," tab."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Create Namespace Role"})," button on the top right corner."]}),"\n",(0,n.jsxs)(s.li,{children:["Specify the ",(0,n.jsx)(s.strong,{children:"Name"})," and ",(0,n.jsx)(s.strong,{children:"Description"}),"(optional)."]}),"\n",(0,n.jsxs)(s.li,{children:["Check the ",(0,n.jsx)(s.strong,{children:"Namespace Creator Default"})," checkbox if you want to assign this role to new namespaces by default."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"(Optional)"})," Select the ",(0,n.jsx)(s.strong,{children:"Locked"})," checkbox if you don't want this role to be used for assigning to namespaces at the current time."]}),"\n",(0,n.jsxs)(s.li,{children:["On the ",(0,n.jsx)(s.strong,{children:"Grant Resources"})," tab, add the ",(0,n.jsx)(s.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",children:"resources and permissions"})," that you want to grant to the role."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Create Namespace Role",src:t(7757).A+"",width:"3188",height:"1748"})}),"\n",(0,n.jsx)(s.h2,{id:"rbac-management",children:"RBAC Management"}),"\n",(0,n.jsx)(s.h3,{id:"namespace-permissions",children:"Namespace Permissions"}),"\n",(0,n.jsx)(s.p,{children:"To assign a custom namespace role to a user, following the steps below:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to ",(0,n.jsx)(s.strong,{children:"LLMOS Management"})," > ",(0,n.jsx)(s.strong,{children:"Advanced"})," > ",(0,n.jsx)(s.strong,{children:"Namespaces"})," page."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Create"})," or ",(0,n.jsx)(s.strong,{children:"Edit"})," button on the namespace that you want to assign the role to."]}),"\n",(0,n.jsxs)(s.li,{children:["On the ",(0,n.jsx)(s.strong,{children:"Members"})," tab, click the ",(0,n.jsx)(s.strong,{children:"Add"})," button to add a new member."]}),"\n",(0,n.jsxs)(s.li,{children:["Typing to search for the user you want to assign the role to and select the namespace permissions from the list.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Owner"}),": The user will have full control over the namespace."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Read-Only"}),": The user will have read-only access to the namespace."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Custom"}),": Select this option to assign custom namespace roles to the user.\n",(0,n.jsx)(s.img,{alt:"Add Namespace Member",src:t(228).A+"",width:"1698",height:"1048"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.strong,{children:"Create"})," and the member should be added to the namespace with the selected role.\n",(0,n.jsx)(s.img,{alt:"Assign Namespace Role",src:t(234).A+"",width:"3190",height:"1734"})]}),"\n",(0,n.jsx)(s.li,{children:"To verify the role permissions, log in to the dashboard as the user, and you should view or manage the resources in the namespace that the role allows you to access."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3096:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/auth-globalrole-template-assign-54ec3457cce5f25af1ed420e32f6e22f.png"},6999:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/auth-globalrole-template-create-6cd12146d7ab12e35b06d5a4bead03d5.png"},228:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/auth-namespace-add-member-5c986e164c7dad301196d09c4b45f6a5.png"},234:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/auth-namespace-assign-role-4763eb971e24a06a5a3798c9073dc849.png"},7757:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/auth-namespacerole-template-create-76b7a58eedaad70629c5da9406f23be3.png"},8453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>o});var n=t(6540);const a={},r=n.createContext(a);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);