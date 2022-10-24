"use strict";(self.webpackChunkit_3038c=self.webpackChunkit_3038c||[]).push([[697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"Module 8 \u2013 Data Types & RegEx",sidebar_position:8,slug:"/8"},o=void 0,s={unversionedId:"module-8",id:"module-8",title:"Module 8 \u2013 Data Types & RegEx",description:"Python Data Storage Types",source:"@site/content/modules/module-8.md",sourceDirName:".",slug:"/8",permalink:"/IT3038C/modules/8",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Module 8 \u2013 Data Types & RegEx",sidebar_position:8,slug:"/8"},sidebar:"defaultSidebar",previous:{title:"Module 7 - Modules, Plugins, Debugging",permalink:"/IT3038C/modules/7"},next:{title:"Module 9 \u2013 Web Scraping",permalink:"/IT3038C/modules/9"}},i={},p=[{value:"Python Data Storage Types",id:"python-data-storage-types",level:2},{value:"Lists",id:"lists",level:3},{value:"Sub-lists",id:"sub-lists",level:3},{value:"Tuples",id:"tuples",level:3},{value:"Dictionaries",id:"dictionaries",level:3},{value:"Regular Expressions",id:"regular-expressions",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"python-data-storage-types"},"Python Data Storage Types"),(0,r.kt)("p",null,"Let's talk briefly to clear up some of the python data types that might be a bit confusing to those of you who are new to Python."),(0,r.kt)("h3",{id:"lists"},"Lists"),(0,r.kt)("p",null,"Lists are the same as arrays. They're just called lists in Python, even though they are arrays. However, python lists are far more flexible than arrays because you can have multiple data types in a list, including sub-lists."),(0,r.kt)("p",null,"Let's create a list now."),(0,r.kt)("p",null,"Open a python console"),(0,r.kt)("p",null,"Create a list called food"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'>>> food = ["fruit", "vegetables", "bread", "beer"]\n>>> food[0]\n"fruit"\n')),(0,r.kt)("p",null,"Notice how the first entry in a list is ","[0]",', because lists are "zero based", meaning they start at 0.'),(0,r.kt)("h3",{id:"sub-lists"},"Sub-lists"),(0,r.kt)("p",null,"Lists can also have Sub-lists, like so"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'>>> food = [["apple","banana"],["tomato","corn"], "beer"]\n\n>>> food[0]\n[\'apple\', \'banana\']\n\n>>> food[0][0]\n\'apple\'\n\n>>> food[0][1]\n\'banana\'\n')),(0,r.kt)("p",null,"As you can see, we can have a list full of lists, and to call a specific list, we pass one index (food","[0]","). Two get one item within one list, we pass two indexes (food","[0][0]",")"),(0,r.kt)("p",null,"What if we go out of range?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'>>> food[1][2]\n\nTraceback (most recent call last):\n  File "<stdin>", line 1, in <module>\nIndexError: list index out of range\n')),(0,r.kt)("p",null,"We can add or modify lists."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n>>> food[0][0] = \"strawberry\"\n\n>>> food\n[['strawberry', 'banana'], ['tomato', 'corn'], 'beer']\n\n>>> food.append(\"blueberry\")\n\n>>> food\n[['strawberry', 'banana'], ['tomato', 'corn'], 'beer', 'blueberry']\n")),(0,r.kt)("p",null,'What if we apply an index to our "beer" entry'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> food[2]\n'beer'\n\n>>> food[2][0]\n'b'\n\n>>> food[2][3]\n'r'\n")),(0,r.kt)("p",null,"As you can see, it treats the 'string' variable as an index. This also works for negative indexes, starting at the end. Let's create a new string to test this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> food[2][-4]\n'b'\n\n>>> word = \"Hello World\"\n>>> word[0]\n'H'\n\n>>> word[1]\n'e'\n\n>>> word[-3]\n'r'\n\n>>>word[0:4]\n'Hell'\n\n>>> word[0:4] + word[-6:-1]\n'Hell Worl'\n")),(0,r.kt)("h3",{id:"tuples"},"Tuples"),(0,r.kt)("p",null,"Tuples are immutable lists, meaning unlike a list, a tuple cannot be changed once created."),(0,r.kt)("p",null,'And just so we\'re aware: "Objects whose value can change are said to be mutable; objects whose value is unchangeable once they are created are called immutable."'),(0,r.kt)("p",null,"Tuples can be referenced the same as lists, giving them a few advantages:"),(0,r.kt)("p",null,"Tuples are faster, protects from accidental changes, can be used as dictionary keys (more on that soon)."),(0,r.kt)("p",null,"Let's build a tuple."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'>>> t = ("this", "is", "a", "tuple")\n\n>>> t[0]\n\n>>> t[0]\n\'this\'\n\n>>> t[3]\n\'tuple\'\n')),(0,r.kt)("p",null,"But we can't append or modify a tuple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> t[0]\n'this'\n\n>>> t[0]=\"what\"\n\nTraceback (most recent call last):\n  File \"<stdin>\", line 1, in <module>\nTypeError: 'tuple' object does not support item assignment\n\n>>> t\n('this', 'is', 'a', 'tuple')\n")),(0,r.kt)("h3",{id:"dictionaries"},"Dictionaries"),(0,r.kt)("p",null,"Next to lists and tuples, dictionaries are essential to python programming. They're like lists, but they have no order because they are accessed by keys."),(0,r.kt)("p",null,"Let's create an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> drink = {\"soda\" : \"coke\", \"beer\" : \"dunkel\", \"water\" : \"water\"}\n\n>>> drink\n{'water': 'water', 'beer': 'dunkel', 'soda': 'coke'}\n\n>>> drink['beer']\n'dunkel'\n\n>>> drink['beer'] = \"ale\"\n\n>>> drink['beer']\n'ale'\n")),(0,r.kt)("p",null,"Key data types must be immutable, so no lists or dictionaries. Tuples are ok though."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> drink['beer']=(\"dunkel\",\"IPA\",\"Ale\")\n\n>>> drink['beer']\n('dunkel', 'IPA', 'Ale')\n\n>>> drink['beer'][0]\n'dunkel'\n\n>>> drink['beer'][2]\n'Ale'\n\n>>> drink['beer'][1]\n'IPA'\n\n>>> drink['water'][1]\n'a'\n\n>>> drink['water'][0]\n'w'\n\n>>> drink['water']\n'water'\n\n>>> drink['soda']\n'coke'\n\n>>> di = { \"countdown\":(5,4,3,2,1), \"countup\":(1,2,3,4,5), (1,2,3):\"abc\" }\n\n>>> di['countdown']\n(5, 4, 3, 2, 1)\n\n>>> di[(1,2,3)]\n'abc'\n")),(0,r.kt)("p",null,"If you're ever unsure of what type of data a certain value is, you can use the type() function to find out."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n>>> type(drink)\n<class 'dict'>\n\n>>> type(drink['beer'])\n<class 'tuple'>\n\n>>> type(drink['beer'][0])\n<class 'str'>\n")),(0,r.kt)("p",null,"In a future lab, you'll see that json is returned as a dictionary. This is why when we pull our json data, the data is returned as a dictionary object. And to parse that data, we have to use the above rules to get the data we want. Let's test this out."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> import json, urllib.request\n\n>>> r = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?zip=45218,us&appid=4d77e6ffc103503b80a32507a754582a')\n\n>>> data=json.load(r)\n\n>>> print(type(data))\n<class 'dict'>\n\n>>> type(data['weather'])\n<class 'list'>\n\n>>> type(data['weather'][0])\n<class 'dict'>\n\n>>> type(data['weather'][0]['description'])\n<class 'str'>\n\n>>> data['weather'][0]['description']\n'overcast clouds'\n")),(0,r.kt)("h2",{id:"regular-expressions"},"Regular Expressions"),(0,r.kt)("p",null,"Regular Expressions or \"reg-ex\" is a set of characters that act as a 'catch' to other text. This text can be read by a computer to interpret expected content and validate it."),(0,r.kt)("p",null,"An example of validation might come in the form of an email address. When a user submits a form to a web page, we want to validate the values are legit, so we use regular expressions to validate the form before we send it to the web server. An email address contains the following:"),(0,r.kt)("p",null,"Multiple alphanumeric characters and some special characters before the @ symbol"),(0,r.kt)("p",null,"Multiple alphanumeric characters and some special characters after the @ symbol"),(0,r.kt)("p",null,'A "dot" (.) Or multiple "dots" (.)'),(0,r.kt)("p",null,"Multiple alphanumeric characters and some special characters after the @ symbol (in this example, limited to .com, .net, .org, .edu)"),(0,r.kt)("p",null,"Here is how we do that."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://regex101.com/"},"https://regex101.com/")),(0,r.kt)("p",null,"Let's create our Regular Expression string, starting small and working our way up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Cheat Sheet:\n\n^The \u2013 Starts with "The"\n\nEnd$ - Ends with "End"\n\n^The End$ - Starts with "The" and ends with "End" (exact match)\n\nThe* End - matches string followed by 0 or more "e" (The End is valid, the \'e\' is totally optional)\n\nThe+ End - matches string followed by 1 or more "e" (\'Theeeee End\' is valid, but not \'Th End\')\n\nThe? End \u2013 may or may not have an "e" (The End, Th End, but not Thee End)\n\n[The ]+End$ - And characters "t", "h", "e" or <space>, but nothing else before or after "End".\n')),(0,r.kt)("p",null,"The square brackets indicate that you can specify that list of characters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[A-Z] \u2013 Any Capital Letters\n\n[a-z] \u2013 Any Lowercase Letters\n\n[0-9] \u2013 Any Numbers\n\n[A-z0-9] \u2013 Any letters or Numbers, no special characters\n\n[@%_-.] \u2013 Special characters\n\n\\$ - RegEx characters used to validate the string need to be 'escaped' with a \"\\\"\n")),(0,r.kt)("p",null,"Let's validate an email address."),(0,r.kt)("p",null,'First, tell RegEx what is allowed in the email address name, then tell it we NEED to have an "@" symbol and "gmail.com"'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[A-Za-z0-9_%.-]+@gmail\\.com$")),(0,r.kt)("p",null,"Validate:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"someguy@gmail.com")),(0,r.kt)("p",null,"Any other email will not work"),(0,r.kt)("p",null,"We can get fancy and say we'll allow any letters and numbers in place of gmail"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[A-z0-9_%.-]+@[A-z0-9-]+\\.com$")),(0,r.kt)("p",null,"You can specify that it has to be .com, .net, .org or some other TLD"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[A-z0-9_%.-]+@[A-z0-9-]+\\.(com|net|org|ninja)+$")),(0,r.kt)("p",null,"Try:\n",(0,r.kt)("inlineCode",{parentName:"p"},"some@an.com")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"some@an.ninja")),(0,r.kt)("p",null,'Finally, we can say it has to include a top level domain with at least 2 characters, denoted by "{2,}"'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[A-Za-z0-9_%.-]+@[A-z0-9_%.-]+\\.[A-z0-9]{2,}")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dog@go.com")),(0,r.kt)("p",null,"Don't fret: People spend years studying and using regex and often struggle with the simplest forms of it. You could spend a whole semester teaching and learning it, so if it doesn't make sense, don't worry. Google is your friend. The most common inputs already have regex pre-written for us, we just have to find them."),(0,r.kt)("p",null,"Now, back to python. Let's test RegEx in Python."),(0,r.kt)("p",null,"Create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"regex.py")),(0,r.kt)("p",null,"Let's test the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import re\n\ndata = \"Hello. My email is reedws@ucmail.uc.edu. Please contact me!\"\n\np = re.compile('[A-Za-z0-9_%.-]+@[A-z0-9_%.-]+\\.[A-z0-9]{2,}')\n\nprint(p.search(data).group())\n")),(0,r.kt)("p",null,"This code will take our string called data and pull out just the email address. Re.compile takes our regex as an argument and the search function takes our string and outputs the results compared to the regex."))}d.isMDXComponent=!0}}]);