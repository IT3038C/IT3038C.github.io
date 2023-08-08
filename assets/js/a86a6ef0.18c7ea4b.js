"use strict";(self.webpackChunkit_3038c=self.webpackChunkit_3038c||[]).push([[285],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=i,d=c["".concat(o,".").concat(h)]||c[h]||m[h]||r;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={title:"Bash Args",sidebar_label:"Overview",sidebar_position:1,slug:"/4/bash-args"},l=void 0,s={unversionedId:"module-4/bash-args/index",id:"module-4/bash-args/index",title:"Bash Args",description:"Learning outcomes",source:"@site/content/modules/module-4/bash-args/index.mdx",sourceDirName:"module-4/bash-args",slug:"/4/bash-args",permalink:"/modules/4/bash-args",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Bash Args",sidebar_label:"Overview",sidebar_position:1,slug:"/4/bash-args"},sidebar:"modules",previous:{title:"Finalize",permalink:"/modules/3/bash-files/finalize"},next:{title:"Finalize",permalink:"/modules/4/bash-args/finalize"}},o={},p=[{value:"Learning outcomes",id:"learning-outcomes",level:2},{value:"Goals",id:"goals",level:2},{value:"Guidelines",id:"guidelines",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Example Usages",id:"example-usages",level:3},{value:"Resources",id:"resources",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"learning-outcomes"},"Learning outcomes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Practice the use of Git and GitHub."),(0,i.kt)("li",{parentName:"ol"},"Practice writing Bash scripts that use switches and arguments."),(0,i.kt)("li",{parentName:"ol"},"Practice the use of Bash to code solutions to technical problems.")),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Practice problem solving."),(0,i.kt)("li",{parentName:"ul"},"Practice Bash fundamentals."),(0,i.kt)("li",{parentName:"ul"},"Practice using the official documentation")),(0,i.kt)("h2",{id:"guidelines"},"Guidelines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This assignment utilized automated-tests to check for the correctness of your code. These tests can be a bit specific about what you name things",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Please follow the instructions on this assignment for the best outcome."))),(0,i.kt)("li",{parentName:"ul"},"Make a habit of committing and pushing your code frequently to GitHub."),(0,i.kt)("li",{parentName:"ul"},"Make sure to meaningful commit messages that describe what you did."),(0,i.kt)("li",{parentName:"ul"},"Make sure the automated tests and checks continue to pass after you make changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Don't forget to fill out the self assessment on the README file"))),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Accept the Assignment on Canvas.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This will create a repository for you with a few starting files.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  .\n  \u251c\u2500\u2500 .vscode\n  \u2502   \u2514\u2500\u2500 settings.json\n  \u251c\u2500\u2500 my_script.sh       \u2b05\ufe0f\n  \u251c\u2500\u2500 test_my_script.sh\n  \u2514\u2500\u2500 README.md          \ud83d\udd3c: update this once done\n"))),(0,i.kt)("li",{parentName:"ul"},"You will only be working on the files marked with the arrows")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone down the repository to your linux VM.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the project tests by running each test script with bash.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Our task would be to implement the functions in the files marked with \u2b05\ufe0f arrow above until all the tests pass.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At the end of each test, commit your code ",(0,i.kt)("img",{alt:"commit logo",style:{height:"20px",marginBottom:"-4px"},src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"})," ",(0,i.kt)("inlineCode",{parentName:"p"},'git commit -m "finished test xyz"'),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"DON'T FORGET")," to Update the README.md file with your self assessment"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Your grade"),(0,i.kt)("li",{parentName:"ul"},"Self Reflection"),(0,i.kt)("li",{parentName:"ul"},"How long it took you to complete the assignment"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Push your code."))),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The script should be named ",(0,i.kt)("inlineCode",{parentName:"li"},"my_script.sh"),"."),(0,i.kt)("li",{parentName:"ol"},"The script must accept the following switches and corresponding arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-h"),": Display help information about the script and its usage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-f <filename>"),": Specify the input filename."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-o <output_dir>"),": Specify the output directory where the results will be stored."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-t <type>"),': Specify the type of action to perform. The supported types are "process" and "analyze".'))),(0,i.kt)("li",{parentName:"ol"},"The script must validate user input for the switches and arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"-h")," switch should display the script's usage information."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"-f")," switch should check if the specified filename exists and is a regular file."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"-o")," switch should check if the specified output directory exists and is a directory."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"-t"),' switch should accept only "process" or "analyze" as valid arguments.'))),(0,i.kt)("li",{parentName:"ol"},"The script should implement the following functionalities based on the selected type:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'If the user selects the "process" type, the script should perform a specific processing task on the input file and store the output in the specified output directory.'),(0,i.kt)("li",{parentName:"ul"},'If the user selects the "analyze" type, the script should perform an analysis on the input file and generate a report in the specified output directory.'),(0,i.kt)("li",{parentName:"ul"},"Be creative here! You can implement any processing or analysis task you want. For example, you can implement a script that processes a text file and generates a report containing the number of words in the file, or a script that analyzes a CSV file and generates a report containing the number of rows and columns in the file."))),(0,i.kt)("li",{parentName:"ol"},"Proper usage and error messages should be displayed when incorrect or insufficient arguments are provided."),(0,i.kt)("li",{parentName:"ol"},"The script should be well-documented, with comments explaining its functionality and usage.")),(0,i.kt)("h3",{id:"example-usages"},"Example Usages"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Display help information:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./my_script.sh -h\n"))),(0,i.kt)("li",{parentName:"ol"},"Process a file and store the output in the specified directory:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./my_script.sh -f input.txt -o output -t process\n"))),(0,i.kt)("li",{parentName:"ol"},"Analyze a file and generate a report in the specified directory:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./my_script.sh -f input.txt -o output -t analyze\n")))),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ss64.com/bash/exit.html"},"exit man page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ss64.com/bash/while.html"},"while man page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ss64.com/bash/case.html"},"case man page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ss64.com/bash/if.html"},"if man page"))))}m.isMDXComponent=!0}}]);