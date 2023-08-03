"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={id:"introduction",title:"GlueOps Platform Overview",type:"explainer"},i=void 0,s={unversionedId:"introduction",id:"introduction",title:"GlueOps Platform Overview",description:"GlueOps offers powerful platforms that enable a seamless, GitOps-driven workflow for deploying applications in production and nonprod environments. GlueOps provides both DevOps and DataOps solutions that are a centralized orchestration point for managing the deployment and infrastructure of applications, streamlining the development process and improving collaboration between developers and operations teams. With the GlueOps Platform, developers can easily manage application deployments, create ephemeral preview environments, and ensure the smooth transition of changes to production.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/GlueOps/glueops-dev/docs/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"GlueOps Platform Overview",type:"explainer"},sidebar:"main",next:{title:"Cluster Domains",permalink:"/docs/glueops-cluster-domain"}},p={},l=[{value:"Platform Components",id:"platform-components",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GlueOps offers powerful platforms that enable a seamless, GitOps-driven workflow for deploying applications in production and nonprod environments. GlueOps provides both DevOps and DataOps solutions that are a centralized orchestration point for managing the deployment and infrastructure of applications, streamlining the development process and improving collaboration between developers and operations teams. With the GlueOps Platform, developers can easily manage application deployments, create ephemeral preview environments, and ensure the smooth transition of changes to production."),(0,r.kt)("h2",{id:"platform-components"},"Platform Components"),(0,r.kt)("p",null,"The GlueOps DevOps Platform consists of several key components that work together to facilitate efficient and automated application deployments. These components include:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GlueOps Platform"),": The central orchestration point of all GlueOps services. The Platform utilizes webhooks to monitor repository activity and automatically updates application deployments and infrastructure based on changes within repositories.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Repositories"),": Application deployments are managed through repositories. The GlueOps Platform supports two main types of repositories:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deployment Configurations Repository"),": A central repository that configures both production and non-production deployments within the GlueOps Platform. It defines the infrastructure, environments, and dependencies required for application deployments. Additionally, it generates ephemeral preview environments that allow developers to explore and validate their applications before merging changes or deploying to production.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Application Repositories"),": These repositories contain the actual application code, configurations, and Dockerfiles. Each application repository must include a Dockerfile, which defines the build process for creating the application's container image. Application repositories enable developers to manage and version control their applications independently, allowing for flexibility in deploying and scaling different applications.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Container Registry"),": The Container Registry serves as the central repository for storing and distributing container images. When changes are pushed to application repositories, the GlueOps Platform automatically builds new container images based on the Dockerfile specifications and publishes them to the container registry. This ensures that the correct versions of applications are deployed consistently across different environments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Encrypted Secret Store"),": The GlueOps Platform provides an encrypted secret store for securely storing secret values. It can be integrated with common secret store options, such as AWS Secrets Manager, or provide its own encrypted secret store with automated backups. The encrypted secret store ensures that sensitive information, such as API keys or database credentials, is stored securely and accessible only to authorized applications.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Kubernetes Clusters"),": The GlueOps Platform manages Kubernetes clusters to deploy applications and services. It supports an arbitrary number of clusters, but GlueOps recommends separating workloads by deploying production and non-prod applications to different clusters. Kubernetes provides container orchestration capabilities, ensuring scalability, reliability, and easy management of application deployments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Metrics, Logs, and Alerts"),": The GlueOps Platform automatically collects logs from Kubernetes and deployed applications, offering centralized access and visibility into application performance. It also provides dashboards for monitoring various services, enabling developers and operations teams to track metrics and identify any potential issues. Custom alerts can be provisioned to notify stakeholders about aberrant service behavior that requires attention or remediation."))),(0,r.kt)("p",null,"The GlueOps Platform's comprehensive set of components simplifies the deployment process, enables efficient collaboration, and promotes best practices in DevOps and DataOps. By leveraging these components, developers and operations teams can accelerate application development, ensure consistent deployments, and achieve higher levels of productivity and reliability."))}m.isMDXComponent=!0}}]);