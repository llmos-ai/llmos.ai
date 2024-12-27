"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[5400],{1051:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(4848),i=t(8453);const o={sidebar_position:2,title:"System Storage"},r=void 0,l={id:"user_guide/storage/system-storage",title:"System Storage",description:"LLMOS has two built-in storage options:",source:"@site/docs/user_guide/storage/system-storage.md",sourceDirName:"user_guide/storage",slug:"/user_guide/storage/system-storage",permalink:"/docs/user_guide/storage/system-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/user_guide/storage/system-storage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"System Storage"},sidebar:"tutorialSidebar",previous:{title:"Volumes",permalink:"/docs/user_guide/storage/volumes"},next:{title:"Advanced",permalink:"/docs/category/advanced"}},a={},d=[{value:"Ceph Prerequisites",id:"ceph-prerequisites",level:2},{value:"Enabling Ceph Storage",id:"enabling-ceph-storage",level:2},{value:"Ceph Toolbox",id:"ceph-toolbox",level:3},{value:"Disabling Ceph Storage",id:"disabling-ceph-storage",level:2},{value:"Deleting Data from Hosts",id:"deleting-data-from-hosts",level:3},{value:"Zapping Devices",id:"zapping-devices",level:4}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"LLMOS has two built-in storage options:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://github.com/rancher/local-path-provisioner",children:"Local Path Storage"})}),": This is a basic storage service that saves data on the host machine. It's best for testing or single-node setups, but it doesn't support high availability (HA) or fault tolerance."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://rook.io/docs/rook/latest-release/Getting-Started/intro",children:"Ceph Cluster Storage"})}),": This is a distributed storage service offering high availability and data fault tolerance. It supports block and filesystem storage, making it suitable for medium to large production environments."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Note"}),": Ceph storage isn't enabled by default. You'll need to turn it on and ensure your cluster has enough resources(minimum 4 vCPUs and 8 GB RAM). See the ",(0,n.jsx)(s.a,{href:"#ceph-prerequisites",children:"device prerequisites"})," below."]})}),"\n",(0,n.jsx)(s.h2,{id:"ceph-prerequisites",children:"Ceph Prerequisites"}),"\n",(0,n.jsx)(s.p,{children:"Before setting up Ceph storage, you'll need one of these local storage types:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Raw devices (no partitions or filesystems)"}),"\n",(0,n.jsx)(s.li,{children:"Raw partitions (no filesystems)"}),"\n",(0,n.jsx)(s.li,{children:"LVM Logical Volumes (no filesystems)"}),"\n",(0,n.jsx)(s.li,{children:"Persistent Volumes from a block mode storage class"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To check if your devices or partitions have filesystems, run:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"$ lsblk -f\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Look for the ",(0,n.jsx)(s.code,{children:"FSTYPE"})," field. If it's empty, the device is available. In the example below, ",(0,n.jsx)(s.code,{children:"vdb"})," is available, but ",(0,n.jsx)(s.code,{children:"vda"})," has a filesystem and isn't usable."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"NAME                  FSTYPE      LABEL UUID                                   MOUNTPOINT\nvda\n\u2514\u2500vda1                LVM2_member       >eSO50t-GkUV-YKTH-WsGq-hNJY-eKNf-3i07IB\n  \u251c\u2500ubuntu--vg-root   ext4              c2366f76-6e21-4f10-a8f3-6776212e2fe4   /\n  \u2514\u2500ubuntu--vg-swap_1 swap              9492a3dc-ad75-47cd-9596-678e8cf17ff9   [SWAP]\nvdb\n"})}),"\n",(0,n.jsxs)(s.p,{children:["For more details, see ",(0,n.jsx)(s.a,{href:"https://rook.github.io/docs/rook/latest-release/Getting-Started/Prerequisites/prerequisites#ceph-prerequisites",children:"Rook Ceph Prerequisites"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"enabling-ceph-storage",children:"Enabling Ceph Storage"}),"\n",(0,n.jsxs)(s.p,{children:["If Ceph storage isn't enabled, you'll see a notification on the ",(0,n.jsx)(s.strong,{children:"Home"})," page. Click the ",(0,n.jsx)(s.code,{children:"Enable"})," link to go to the setup page."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Enable Ceph Notification",src:t(4929).A+"",width:"3416",height:"796"})}),"\n",(0,n.jsxs)(s.p,{children:["You can configure the Ceph cluster by setting up block pools, filesystems, and other options. Once done, click ",(0,n.jsx)(s.code,{children:"Save"})," to enable Ceph storage."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["The default settings should work for most users. You can refer to the ",(0,n.jsx)(s.a,{href:"https://rook.github.io/docs/rook/latest-release/Helm-Charts/ceph-cluster-chart/#configuration",children:"Ceph Cluster Configuration"})," if you need more details."]})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Enable Ceph Configs",src:t(1967).A+"",width:"3188",height:"1752"})}),"\n",(0,n.jsxs)(s.p,{children:["Wait for the Ceph cluster to reach ",(0,n.jsx)(s.strong,{children:"Ready"})," status. You can check the status of the Ceph Block Pool and Filesystem in the ",(0,n.jsx)(s.code,{children:"Storage"})," section."]}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsxs)(s.p,{children:["If you don't see the Ceph cluster, try selecting ",(0,n.jsx)(s.code,{children:"All Namespaces"})," from the top navigation bar."]}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Namespace Filter",src:t(8910).A+"",width:"3190",height:"410"})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Ceph Status",src:t(226).A+"",width:"3112",height:"858"})}),"\n",(0,n.jsxs)(s.p,{children:["Once Ceph is ready, you can use the ",(0,n.jsx)(s.code,{children:"llmos-ceph-block"})," or ",(0,n.jsx)(s.code,{children:"llmos-ceph-filesystem"})," StorageClass to create volumes or workloads that need persistent storage."]}),"\n",(0,n.jsx)(s.h3,{id:"ceph-toolbox",children:"Ceph Toolbox"}),"\n",(0,n.jsx)(s.p,{children:"The Ceph toolbox is a container with tools for troubleshooting and testing. To access it:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Go to ",(0,n.jsx)(s.strong,{children:"Storage > Ceph Management > Ceph Clusters"})," and click ",(0,n.jsx)(s.code,{children:"Execute Toolbox"})," next to the ",(0,n.jsx)(s.strong,{children:"llmos-ceph"})," cluster.\n",(0,n.jsx)(s.img,{alt:"Ceph Toolbox",src:t(6927).A+"",width:"3104",height:"636"})]}),"\n",(0,n.jsxs)(s.li,{children:["This opens a new window where the toolbox pod runs in the background. You can use tools like:","\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"ceph status\nceph osd status\nceph df\nrados df\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"disabling-ceph-storage",children:"Disabling Ceph Storage"}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"All data will be deleted after the Ceph Cluster is removed."})," Make sure you have a backup before disabling Ceph storage."]})}),"\n",(0,n.jsx)(s.p,{children:"Before turning off Ceph, ensure all workloads using it are deleted and their volumes are detached:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Delete all workloads using Ceph storage."}),"\n",(0,n.jsxs)(s.li,{children:["Go to the ",(0,n.jsx)(s.strong,{children:"Volumes"})," page and confirm that all volumes using the Ceph storage are removed."]}),"\n",(0,n.jsxs)(s.li,{children:["Then, go to ",(0,n.jsx)(s.strong,{children:"Managed Addons"})," and click ",(0,n.jsx)(s.code,{children:"Disable"})," next to ",(0,n.jsx)(s.strong,{children:"llmos-ceph-cluster"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Click ",(0,n.jsx)(s.code,{children:"Save"})," to finish."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Disable Ceph",src:t(5827).A+"",width:"3104",height:"810"})}),"\n",(0,n.jsx)(s.h3,{id:"deleting-data-from-hosts",children:"Deleting Data from Hosts"}),"\n",(0,n.jsxs)(s.p,{children:["To fully clean up, delete files from each host in the cluster. Remove everything under the ",(0,n.jsx)(s.code,{children:"/var/lib/llmos/rook-ceph"})," directory to avoid issues when re-enabling Ceph later."]}),"\n",(0,n.jsx)(s.h4,{id:"zapping-devices",children:"Zapping Devices"}),"\n",(0,n.jsx)(s.p,{children:"To reset disks used by Ceph:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'DISK="/dev/sdX"\nsgdisk --zap-all $DISK\ndd if=/dev/zero of="$DISK" bs=1M count=100 oflag=direct,dsync\nblkdiscard $DISK\npartprobe $DISK\n'})}),"\n",(0,n.jsx)(s.p,{children:"If LVM or device mapper data prevents reusing drives, try:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"ls /dev/mapper/ceph-* | xargs -I% -- dmsetup remove %\nrm -rf /dev/ceph-*\nrm -rf /dev/mapper/ceph--*\n"})}),"\n",(0,n.jsx)(s.p,{children:"If drives are still locked, a reboot may help."}),"\n",(0,n.jsxs)(s.p,{children:["For more information, please check the ",(0,n.jsx)(s.a,{href:"https://rook.github.io/docs/rook/latest-release/Getting-Started/ceph-teardown/?h=cleanup#troubleshooting",children:"Rook Ceph Cleanup"})," guide."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5827:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/ceph-addon-disable-8e84adaf9b01a89d829d4b6e626da634.png"},226:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/ceph-cluster-ready-ec03d68b52cf70f142b6065f60de7050.png"},1967:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/ceph-enable-configs-7325f6e0998c349117cb96c030638697.png"},4929:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/ceph-enable-notification-60ef4223b20931db019140f797a70150.png"},8910:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/ceph-ns-filter-b248d17aeefcdbb59989d1e1519d5ddd.png"},6927:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/ceph-toolbox-8079b3015b66f8239eaeb349ac861076.png"},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>l});var n=t(6540);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);