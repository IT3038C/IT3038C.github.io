"use strict";(self.webpackChunkit_3038c=self.webpackChunkit_3038c||[]).push([[452],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),h=r,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={title:"Bash Backup",sidebar_label:"Overview",sidebar_position:1,slug:"/3/bash-backup"},o=void 0,l={unversionedId:"module-3/bash-backup/index",id:"module-3/bash-backup/index",title:"Bash Backup",description:"Learning outcomes",source:"@site/content/modules/module-3/bash-backup/index.mdx",sourceDirName:"module-3/bash-backup",slug:"/3/bash-backup",permalink:"/modules/3/bash-backup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Bash Backup",sidebar_label:"Overview",sidebar_position:1,slug:"/3/bash-backup"},sidebar:"modules",previous:{title:"Finalize",permalink:"/modules/2/bash-exercises/finalize"},next:{title:"Finalize",permalink:"/modules/3/bash-backup/finalize"}},s={},u=[{value:"Learning outcomes",id:"learning-outcomes",level:2},{value:"Goals",id:"goals",level:2},{value:"Guidelines",id:"guidelines",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Resources",id:"resources",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"learning-outcomes"},"Learning outcomes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Practice the use of Git and GitHub."),(0,r.kt)("li",{parentName:"ol"},"Practice the use of Bash to copy and compress files and directories."),(0,r.kt)("li",{parentName:"ol"},"Practice the use of Bash to code solutions to technical problems.")),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Practice problem solving."),(0,r.kt)("li",{parentName:"ul"},"Practice Bash fundamentals."),(0,r.kt)("li",{parentName:"ul"},"Practice using the official documentation")),(0,r.kt)("h2",{id:"guidelines"},"Guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This assignment utilized automated-tests to check for the correctness of your code. These tests can be a bit specific about what you name things",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please follow the instructions on this assignment for the best outcome."))),(0,r.kt)("li",{parentName:"ul"},"Make a habit of committing and pushing your code frequently to GitHub."),(0,r.kt)("li",{parentName:"ul"},"Make sure to meaningful commit messages that describe what you did."),(0,r.kt)("li",{parentName:"ul"},"Make sure the automated tests and checks continue to pass after you make changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Don't forget to fill out the self assessment on the README file"))),(0,r.kt)("h2",{id:"instructions"},"Instructions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Accept the Assignment on Canvas.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This will create a repository for you with a few starting files.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"  .\n  \u251c\u2500\u2500 .vscode\n  \u2502   \u2514\u2500\u2500 settings.json\n  \u251c\u2500\u2500 1-backup-file.sh       \u2b05\ufe0f\n  \u251c\u2500\u2500 2-backup-directory.sh  \u2b05\ufe0f\n  \u251c\u2500\u2500 test_backup-file.sh\n  \u251c\u2500\u2500 test_backup-directory.sh\n  \u2514\u2500\u2500 README.md              \ud83d\udd3c: update this once done\n"))),(0,r.kt)("li",{parentName:"ul"},"You will only be working on the files marked with the arrows")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone down the repository to your linux VM.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the project tests by running each test script with bash.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Our task would be to implement the functions in the files marked with \u2b05\ufe0f arrow above until all the tests pass.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the end of each test, commit your code ",(0,r.kt)("img",{alt:"commit logo",style:{height:"20px",marginBottom:"-4px"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"})," ",(0,r.kt)("inlineCode",{parentName:"p"},'git commit -m "finished test xyz"'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DON'T FORGET")," to Update the README.md file with your self assessment"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Your grade"),(0,r.kt)("li",{parentName:"ul"},"Self Reflection"),(0,r.kt)("li",{parentName:"ul"},"How long it took you to complete the assignment"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Push your code."))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ss64.com/bash/rm.html"},"rm man page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ss64.com/bash/cp.html"},"cp man page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ss64.com/bash/mkdir.html"},"mkdir man page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ss64.com/bash/tar.html"},"tar man page"))))}p.isMDXComponent=!0}}]);