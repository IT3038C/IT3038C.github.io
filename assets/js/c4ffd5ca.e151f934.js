"use strict";(self.webpackChunkit_3038c=self.webpackChunkit_3038c||[]).push([[4848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(i,".").concat(m)]||h[m]||c[m]||o;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Module 9 \u2013 Web Scraping",sidebar_position:9,slug:"/9-old"},s=void 0,l={unversionedId:"old/module-9",id:"old/module-9",title:"Module 9 \u2013 Web Scraping",description:"Links:",source:"@site/content/modules/old/module-9.md",sourceDirName:"old",slug:"/9-old",permalink:"/modules/9-old",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Module 9 \u2013 Web Scraping",sidebar_position:9,slug:"/9-old"}},i={},p=[{value:"Web Scraping",id:"web-scraping",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"Regular Expressions",id:"regular-expressions",level:3},{value:"Lab 8",id:"lab-8",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RegEx Cheat Sheet - ",(0,r.kt)("a",{parentName:"li",href:"https://www.debuggex.com/cheatsheet/regex/python"},"https://www.debuggex.com/cheatsheet/regex/python")),(0,r.kt)("li",{parentName:"ul"},"Beautiful Soup - ",(0,r.kt)("a",{parentName:"li",href:"https://www.crummy.com/software/BeautifulSoup/bs4/doc/"},"https://www.crummy.com/software/BeautifulSoup/bs4/doc/")),(0,r.kt)("li",{parentName:"ul"},"PythonForBeginners - ",(0,r.kt)("a",{parentName:"li",href:"http://www.pythonforbeginners.com/beautifulsoup/beautifulsoup-4-python"},"http://www.pythonforbeginners.com/beautifulsoup/beautifulsoup-4-python")),(0,r.kt)("li",{parentName:"ul"},"Regular Expressions 101 - ",(0,r.kt)("a",{parentName:"li",href:"https://regex101.com/"},"https://regex101.com/")),(0,r.kt)("li",{parentName:"ul"},"RegExdrill - ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/regexdrill"},"https://twitter.com/regexdrill"))),(0,r.kt)("h2",{id:"web-scraping"},"Web Scraping"),(0,r.kt)("p",null,"Let's do some web scraping \u2013 a tool that can be used for both good and evil. Please choose good and be careful, too many scraping attempts can get you blocked or bring a web server to its knees."),(0,r.kt)("p",null,"First, let's create a vENV for our scraping environment. If you didn't already, to do this, run the following commands. This is linux using my users home directory."),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ virtualenv ~/venv/webscraping\n\n # Using base prefix '/usr/local'\n # New python executable in /home/reedws/venv/scraping/bin/python3.6\n # Also creating executable in /home/reedws/venv/scraping/bin/python\n # Installing setuptools, pip, wheel...done.\n\n$ source ~/venv/webscraping/bin/activate\n\n# (scraping)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"virtualenv --python=/usr/bin/python3 ~/venv/webscraping\n")),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\Users\\Administrator> virtualenv venv\\webscraping\n\nUsing base prefix 'c:\\\\python36'\n\nNew python executable in C:\\Users\\Administrator\\venv\\scraping\\Scripts\\python.exe\n\nInstalling setuptools, pip, wheel...done.\n\nPS C:\\Users\\Administrator> .\\venv\\webscraping\\Scripts\\activate.ps1\n\n(scraping) PS C:\\Users\\Administrator>\n")),(0,r.kt)("p",null,"Run pip install for BeautifulSoup4 and requests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install bs4 requests\n")),(0,r.kt)("p",null,"Now, create a new file in your Python directory and call it webscraping.py"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from\u202fbs4\u202fimport\u202fBeautifulSoup\nimport\u202frequests,\u202fre\n\nr\u202f=\u202frequests.get('https://analytics.usa.gov').content\nsoup\u202f=\u202fBeautifulSoup(r,\u202f'html.parser')\nprint(type(soup))\nprint(soup.prettify()[:100])\nfor\u202flink\u202fin\u202fsoup.find_all('a'):\u202fprint(link.get('href'))\n")),(0,r.kt)("p",null,"I'm going to break this file down for you, just so we're all on the same page. Some of this stuff I've iterated a few times, but it's important to understand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from\u202fbs4\u202fimport\u202fBeautifulSoup\n")),(0,r.kt)("p",null,"We are importing the BeautifulSoup module from our bs4 package. The difference between importing BeautifulSoup and importing all of bs4 has to do with best practices. If you're working in a large application, you may run into problems with global variables being overwritten by the import of a module, so it is generally frowned upon when importing an entire modules when you only need a function of it."),(0,r.kt)("p",null,"That being said, we are going to break these rules anyway and import requests and re, which is used for regular expressions. More on that later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import\u202frequests,\u202fre\n")),(0,r.kt)("p",null,"Now to get the content of a web page, we simply need to do a GET on that page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"r\u202f=\u202frequests.get('https://analytics.usa.gov').content\n")),(0,r.kt)("p",null,'Now "r" contains the content of the page analytics.usa.gov. We can then turn that into what\'s called a "Soup" object and use it for parsing the data into readable chunks.'),(0,r.kt)("p",null,"TIP: If you're wondering what the datatype of a variable might be, simply do type(varname)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"type(soup)\n<class 'bs4.BeautifulSoup'>\n")),(0,r.kt)("p",null,'With this, we can print the page out more "beautifully"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(soup.prettify()[:100])\n")),(0,r.kt)("p",null,"--the :100 signifies to only apply to the last 100 lines in the return, so as to keep the output smaller."),(0,r.kt)("p",null,"We can parse through the data, too."),(0,r.kt)("p",null,"Let's see if we can extract links from this page. We know that in HTML a link is created using an ",(0,r.kt)("inlineCode",{parentName:"p"},"<a href=''>"),' tag, so we just need to find all the "a" tags and print the "href" part out.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for\u202flink\u202fin\u202fsoup.find_all('a'):\u202f\n    print(link.get('href'))\n")),(0,r.kt)("p",null,"That's that. Run this code and see what your output is."),(0,r.kt)("p",null,"You should see a list of all of the HTTP links on the page."),(0,r.kt)("p",null,"We can also loop through and print using Regular expressions, so any href that starts with http will show up on our page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for\u202flink\u202fin\u202fsoup.find_all('a',\u202fattrs={'href':re.compile(\"^http\")}):\u202f\n    print(link.get('href'))\n")),(0,r.kt)("p",null,"This will return the entire html tag, which is fine. We can go one step further and say we only want links from a certain site, like github.com"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"for\u202flink\u202fin\u202fsoup.find_all('a',\u202fattrs={'href':re.compile(\"^https://github.com\")}):\u202f\n    print(link)\n")),(0,r.kt)("p",null,"Let's take a look at the re.compile statement. Notice the '^' icon, which is used in regular expressions. As a reminder from our last class, here is what RegEx can do for you and how it works:"),(0,r.kt)("h3",{id:"regular-expressions"},"Regular Expressions"),(0,r.kt)("p",null,"Regular Expressions or \"regex\" is a set of characters that act as a 'catch' to other text. This text can be read by a computer to interpret expected content and validate it."),(0,r.kt)("p",null,"An example of validation might come in the form of an email address. When a user submits a form to a web page, we want to validate the values are legit, so we use regular expressions to validate the form before we send it to the web server. An email address contains the following:"),(0,r.kt)("p",null,"Multiple alphanumeric characters and some special characters before the @ symbol"),(0,r.kt)("p",null,"Multiple alphanumeric characters and some special characters after the @ symbol"),(0,r.kt)("p",null,'A "dot" (.) Or multiple "dots" (.)'),(0,r.kt)("p",null,"Multiple alphanumeric characters and some special characters after the @ symbol (in this example, limited to .com, .net, .org, .edu)"),(0,r.kt)("p",null,"Here's that website we used last week to test regex:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://regex101.com/"},"https://regex101.com/")),(0,r.kt)("p",null,"And here's a Cheat Sheet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'^The \u2013 Starts with "The"\n\nEnd$ - Ends with "End"\n\n^The End$ - Starts with "The" and ends with "End" (exact match)\n\nThe* End - matches string followed by 0 or more "e" (The End is valid, the \'e\' is totally optional)\n\nThe+ End - matches string followed by 1 or more "e" (\'Theeeee End\' is valid, but not \'Th End\')\n\nThe? End \u2013 may or may not have an "e" (The End, Th End, but not Thee End)\n\n[The ]+End$ - And characters "t", "h", "e" or <space>, but nothing else before or after "End".  ### The square brackets indicate that you can specify that list of characters.\n\n[A-Z] \u2013 Any Capital Letters\n\n[a-z] \u2013 Any Lowercase Letters\n\n[0-9] \u2013 Any Numbers\n\n[A-z0-9] \u2013 Any letters or Numbers, no special characters\n\n[@%_-.] \u2013 Special characters\n\n\\$ - RegEx characters used to validate the string need to be \'escaped\' with a "\\"\n')),(0,r.kt)("p",null,"Let's do a quick regex test:"),(0,r.kt)("p",null,"Create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"regex.py")),(0,r.kt)("p",null,"Let's test the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import\u202frequests,\u202fre\n\ndata\u202f=\u202f\"Hello.\u202fMy\u202femail\u202fis\u202freedws@ucmail.uc.edu.\u202fPlease\u202fcontact\u202fme!\"\np\u202f=\u202fre.compile('[A-Za-z0-9_%.-]+@[A-z0-9_%.-]+\\.[A-z0-9]{2,}')\nprint(p.search(data).group())\n")),(0,r.kt)("p",null,"This code will take our string called data and pull out just the email address. Re.compile takes our regex as an argument and the search function takes our string and outputs the results compared to the regex."),(0,r.kt)("p",null,"Now, let's get back go BeautifulSoup."),(0,r.kt)("p",null,"For our next example, let's use a test scraping site: ",(0,r.kt)("a",{parentName:"p",href:"http://webscraper.io/test-sites/e-commerce/allinone/phones"},"http://webscraper.io/test-sites/e-commerce/allinone/phones")),(0,r.kt)("p",null,"Let's create new file called webscraperio.py"),(0,r.kt)("p",null,"We're going to take the input of the webpage, run it through BeautifulSoup and parse the output using RegEx."),(0,r.kt)("p",null,"First, import your modules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import\u202frequests,\u202fre\n\nfrom\u202fbs4\u202fimport\u202fBeautifulSoup\n")),(0,r.kt)("p",null,'Then, create the request and assign the output of it to a variable called "r"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'r\u202f=\u202frequests.get("http://webscraper.io/test-sites/e-commerce/allinone/phones").content\n')),(0,r.kt)("p",null,'Now, run r through BeautifulSoup and assign it to another variable called "soup"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"soup\u202f=\u202fBeautifulSoup(r,\u202f'html.parser')\n")),(0,r.kt)("p",null,"Let's use our soup data to find all of the links on this page. Let's create a variable called \"tags\". This variable will use soup.findAll to search through the page's content using regular expression."),(0,r.kt)("p",null,"We can change our compile code another look for specific text in the href"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"tags\u202f=\u202fsoup.findAll(\"a\",\u202f{\"href\":re.compile('(allinone)')})\nfor\u202fa\u202fin\u202ftags:\n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202fprint(a.get('href'))\n")),(0,r.kt)("p",null,"That is pretty simple, but we can get as complex as we want. Change your regex check to something different:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"tags\u202f=\u202fsoup.findAll(\"a\",\u202f{\"href\":re.compile('[<>#%|\\{\\}!\\\\^~\\[\\]`/]')})\nfor\u202fa\u202fin\u202ftags:\n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202fprint(a.get('href'))\n")),(0,r.kt)("p",null,"Let's try searching for all reviews on this page."),(0,r.kt)("p",null,'Look at the page source and find the reviews. It looks like the reviews are in a "ratings" div class. Let\'s try pulling that.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import\u202frequests,\u202fre\u202f\nfrom\u202fbs4\u202fimport\u202fBeautifulSoup\n\nr\u202f=\u202frequests.get("http://webscraper.io/test-sites/e-commerce/allinone/phones").content\u202f\nsoup\u202f=\u202fBeautifulSoup(r,\u202f\'html.parser\')\u202f\ntags\u202f=\u202fsoup.findAll("div",\u202f{"class":re.compile(\'(ratings)\')})\u202f\nfor\u202fp\u202fin\u202ftags:\u202f\n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202fa\u202f=\u202fp.findAll("p",{"class":"pull-right"})\u202f\n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202fprint(a[0].string)\u202f\n')),(0,r.kt)("p",null,"Let's do one more scraping example:"),(0,r.kt)("p",null,"The method for defining a scraping depends entirely on the way the page is structured. To view this, open a page in chrome, select the information you want to extract, right click and inspect."),(0,r.kt)("p",null,"Reebok's website is super easy to scrape data from. Go to Reebok and select an item to get to the item page. Using the inspector, we can scrape the price and the name of the item on a page."),(0,r.kt)("p",null,"Open the page ",(0,r.kt)("a",{parentName:"p",href:"https://www.reebok.com/us/flexagon-energy-shoes---preschool/DV8354.html"},"https://www.reebok.com/us/flexagon-energy-shoes---preschool/DV8354.html")),(0,r.kt)("p",null,'Right-click on the title and click "Inspect"'),(0,r.kt)("p",null,"Notice the Tag (h1) and the class name. This is what our code will look for."),(0,r.kt)("p",null,"Repeat this process for the price of the item on this page."),(0,r.kt)("p",null,"Using this knowledge, we can add it to our code to extract the values. Let's go through this line by line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import\u202frequests,\u202fre\nfrom\u202fbs4\u202fimport\u202fBeautifulSoup\n\ndata\u202f\u202f=\u202frequests.get("https://www.reebok.com/us/flexagon-energy-shoes---preschool/DV8354.html").content\u202f\nsoup\u202f=\u202fBeautifulSoup(data,\u202f\'html.parser\')\u202f\nspan\u202f=\u202fsoup.find("h1",\u202f{"class":"product_information_title___2rG9M\u202fproduct_title\u202fgl-heading\u202fgl-heading--m"})\u202f\ntitle\u202f=\u202fspan.text\nspan\u202f=\u202fsoup.find("span",\u202f{"class":"gl-price__value\u202fgl-price__value--sale"})\u202f\nprice\u202f=\u202fspan.text\nprint("Item\u202f%s\u202fhas\u202fprice\u202f%s"\u202f%\u202f(title,\u202fprice))\n')),(0,r.kt)("p",null,"Notice a few things: we're using the html.parser. That's because it just works better in this case. Reebok's site has very well-formed HTML, a common attribute of a large site like that. Other sites that don't have well-formed HTML benefit from using the LXML parser because it parses content differently and makes it easier to get the data. The point it there is no right or wrong way to do it, just use the best parser for the job."),(0,r.kt)("h2",{id:"lab-8"},"Lab 8"),(0,r.kt)("p",null,"Using a website of your choice, extract some valuable data from it and print it to the console. Print the output in a matter that makes sense, for example, if you're scraping a store page, print the item name and price on the same line. Be careful, because multiple hits to a website may prevent you from further visiting that site. Also, some sites immediately block scraping attempts. If this happens, select a different site. Commit your script to github and submit a portion of the output from your script."))}c.isMDXComponent=!0}}]);