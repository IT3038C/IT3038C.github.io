"use strict";(self.webpackChunkit_3038c=self.webpackChunkit_3038c||[]).push([[9162],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var o=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=l,m=c["".concat(s,".").concat(h)]||c[h]||g[h]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(8168),l=(n(6540),n(5680));const a={title:"Module 7 - Modules, Plugins, Debugging",sidebar_position:7,slug:"/7-old"},r=void 0,i={unversionedId:"old/module-7",id:"old/module-7",title:"Module 7 - Modules, Plugins, Debugging",description:"List of Links for this week:",source:"@site/content/modules/old/module-7.md",sourceDirName:"old",slug:"/7-old",permalink:"/modules/7-old",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Module 7 - Modules, Plugins, Debugging",sidebar_position:7,slug:"/7-old"}},s={},p=[{value:"Debugging",id:"debugging",level:2},{value:"Modules and Plugins",id:"modules-and-plugins",level:2},{value:"Python Modules with Pip",id:"python-modules-with-pip",level:2},{value:"Lab 7",id:"lab-7",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,l.yg)(c,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"List of Links for this week:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/debugging"},"https://code.visualstudio.com/docs/editor/debugging")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/scripting/core-powershell/ise/how-to-debug-scripts-in-windows-powershell-ise?view=powershell-5.1"},"https://docs.microsoft.com/en-us/powershell/scripting/core-powershell/ise/how-to-debug-scripts-in-windows-powershell-ise?view=powershell-5.1")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://www.jetbrains.com/help/pycharm/debugging.html"},"https://www.jetbrains.com/help/pycharm/debugging.html")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.diagnostics/get-counter?view=powershell-6"},"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.diagnostics/get-counter?view=powershell-6")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://technet.microsoft.com/en-us/library/ee872428.aspx"},"https://technet.microsoft.com/en-us/library/ee872428.aspx"))),(0,l.yg)("h2",{id:"debugging"},"Debugging"),(0,l.yg)("p",null,"Debugging is key to writing well-executed scripts. That's why it's important to become familiar with how the debugger for your IDE works."),(0,l.yg)("p",null,"For these examples, I'll be using PowerShell ISE. This is a simple debugging program, but will allow us to try out some of the concepts of debugging."),(0,l.yg)("p",null,"Launch PowerShell ISE on your Windows machine."),(0,l.yg)("p",null,"Open the ",(0,l.yg)("inlineCode",{parentName:"p"},"sysinfo.ps1")," file we worked on a few weeks back"),(0,l.yg)("p",null,"In ",(0,l.yg)("strong",{parentName:"p"},"ISE"),', right-click on the first line and select "Toggle BreakPoint"'),(0,l.yg)("p",null,'Select "Run Script"'),(0,l.yg)("p",null,"You should see right away that the breakpoint was hit. Now, using the Debug drop-down menu, we can slowly step through this program."),(0,l.yg)("p",null,"Notice how many steps the assignment of $IP is. Using 'Step-in;, the debugger will step through every step that PowerShell takes to calculate this value."),(0,l.yg)("p",null,'We can use "Step-out" to skip the rest of this particular step and move on to the next step.'),(0,l.yg)("p",null,"If we hover over $IP, we'll see the value of that variable. This can be very useful when working with a script that has several variables."),(0,l.yg)("p",null,'Stepping over will skip a step and "Continue" will finish running the script.'),(0,l.yg)("p",null,"Let's try a loop in PowerShell and debug it. This loop will simply print 5 random numbers."),(0,l.yg)("p",null,"Open a new script and save it as ",(0,l.yg)("inlineCode",{parentName:"p"},"rando.ps1")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"$RANDO=0\n\nfor($i=0; $i -lt 5; $i++){\n  $RANDO=Get-Random -Maximum 1000 -Minimum 1\n  Write-Host($RANDO)\n}\n")),(0,l.yg)("p",null,"Run it to make sure it works. Now, let's debug. Set the breakpoint at the 'for' loop."),(0,l.yg)("p",null,"Notice how we can hover over all of the variable at any time and get the value for that variable at that point in time."),(0,l.yg)("p",null,"What may also be useful is writing output for every step of your script. This can be written to the console, or to a log file."),(0,l.yg)("p",null,"To do something like this, you can create a file and add content to that file as things happen."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},'$RANDO=0\n\n$Logfile = "C:\\logs\\rando.log"\n\nfor($i=0; $i -lt 5; $i++){\n    $RANDO=Get-Random -Maximum 1000 -Minimum 1\n\n    Write-Host($RANDO)\n\n    Add-Content $LogFile "INFO: Random number is ${RANDO}"\n}\n')),(0,l.yg)("p",null,"Now open ",(0,l.yg)("inlineCode",{parentName:"p"},"C:\\logs\\rando.log")," and view the results of the file. You may have to create the folder ",(0,l.yg)("inlineCode",{parentName:"p"},"C:\\logs"),"."),(0,l.yg)("p",null,"Let's stick to PowerShell a little longer. Debugging is something that comes with time, so to understand it, it's best just to use it when the time arises and learn from that."),(0,l.yg)("p",null,"Let's write a PowerShell script that will give us some performance data about our Windows machine. The Windows performance monitoring framework is known as\u202fPerformance Logging and Alerting\u202f(PLA). PLA is built into Windows and uses COM and DCOM to obtain performance and diagnosis information from both local and remote computers.  You can see PLA in action by opening the"),(0,l.yg)("p",null,"Task Manager | More Details | Performance | Open Resource Monitor."),(0,l.yg)("p",null,"Windows performance is measured in counters. There are counters for all aspects of the system, from memory to cpu to disk. We can see this data in PowerShell using the Get-Counter cmdlet."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"> Get-counter")),(0,l.yg)("p",null,"Get-counter returns the counter sets available as well as a sample of performance on this machine. Since we're on a single machine, that's what we'll focus on, but you can easily send this command to multiple machines on your network to get performance data."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"$Machines = 'localhost'\n\nForeach ($machine in $Machines)\n{\n  $RCounters = Get-Counter -ListSet * -ComputerName $machine\n  \"There are {0} counters on {1}\" -f $RCounters.count, ($machine)\n}\n")),(0,l.yg)("p",null,"You can add multiple machines to the $Machines list to query them. The command tells us how many counters we have. We can use debugging to get a more in-depth look at how this ran. Get-Counter allows us to specify key pieces of data that we're concerned about, like Processor, Memory, and Networking. We can specify these properties when we run our Get-Counter command. Let's modify our script to specify some more key data. To do this, we'll need to specify Get-Counter for each set of values we want."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"$Machines = 'localhost'\n\nForeach ($machine in $Machines)\n{\n  $pt = (Get-Counter -Counter \"\\Processor(_Total)\\% Processor Time\").CounterSamples.CookedValue\n  $pt\n}\n")),(0,l.yg)("p",null,"This is helpful, but we need to get a sampling of data that we can use. To do this, we can add -SampleInterval 1 and -Max-Samples 10 to get 10 samples at one per second."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"$Machines = 'localhost'\n\nForeach ($machine in $Machines)\n{\n  $pt = (Get-Counter -Counter \"\\Processor(_Total)\\% Processor Time\" -SampleInterval 1 -MaxSamples 10).CounterSamples.CookedValue\n  $pt\n}\n")),(0,l.yg)("p",null,"Now, let's see if we can pretty this up a bit. We can see by debugging that we're getting an array of objects back for $pt. We can do another Foreach loop and print them in a more readable fashion."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},'$Machines = \'localhost\'\n\nForeach ($machine in $Machines)\n{\n  $pt = (Get-Counter -Counter "\\Processor(_Total)\\% Processor Time" -SampleInterval 1 -MaxSamples 3).CounterSamples.CookedValue\n  $sample = 1\n\n  foreach ($p in $pt) {\n    "Sample {2}: CPU is at {0}% on {1}" -f [int]$p, $machine, $sample\n    $sample++\n  }\n}\n')),(0,l.yg)("p",null,"If we want, we can write this to a file for later. Simply pipe this output to a file on your hard drive."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},'"Sample {2}: CPU is at {0}% on {1}" -f [int]$p, $machine, $sample | out-file C:\\output.txt')),(0,l.yg)("p",null,"Notice that it only wrote the last output. We need to include the -append flag to keep writing to it."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"out-file -append C:\\output.txt")),(0,l.yg)("p",null,"It may also help to throw a date-time stamp in front. To do this, we'll just edit our Sample output and include a formatted Get-Date."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},'$Machines = \'localhost\'\n\nForeach ($machine in $Machines)\n{\n  $pt = (Get-Counter -Counter "\\Processor(_Total)\\% Processor Time" -SampleInterval 1 -MaxSamples 3).CounterSamples.CookedValue\n  $sample = 1\n\n  foreach ($p in $pt) {\n    $date = Get-Date -Format g\n\n    "{3} - Sample {2}: CPU is at {0}% on {1}" -f [int]$p, $machine, $sample, $date | Out-File -Append C:\\output.txt\n\n    $sample++\n  }\n}\n')),(0,l.yg)("p",null,"Congratulations, you just created your first log file!"),(0,l.yg)("h2",{id:"modules-and-plugins"},"Modules and Plugins"),(0,l.yg)("p",null,"PowerShell Modules"),(0,l.yg)("p",null,"A few weeks back, we wrote a function in PowerShell:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"Function GetIP {\n\u202f\u202f\u202f$IP = Get-NetIPAddress | Where-Object {$_.IPv4Address -like '192*'}\n\u202f\u202f\u202freturn $IP.IPv4Address\n}\n")),(0,l.yg)("p",null,"Let's rewrite this function to a new file. Save this function in a file called tools.psm1."),(0,l.yg)("p",null,"Save this file to your PowerShell folder."),(0,l.yg)("p",null,"Now before we do anything with this, let's try running GetIP from your PowerShell command window (not from ISE), this command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"GetIP\n")),(0,l.yg)("p",null,"You should get an error saying GetIP doesn't exist. Now, let's import our module file like so (note that your path may differ):"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"import-module C:\\it3038c-scripts\\powershell\\tools.psm1\n")),(0,l.yg)("p",null,"Now from the PowerShell command line, run GetIP again. This should return your host IP address."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"GetIP\n")),(0,l.yg)("p",null,"If you get an error, run the following command to correct the executionpolicy on your server"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"Set-ExecutionPolicy Unrestricted\n")),(0,l.yg)("p",null,"Run GetIP one more time."),(0,l.yg)("p",null,"When it comes to code reuse, writing modules is vital. PowerShell V5 comes pre-built with module importing in mind. In fact, they've launched a whole website dedicated to module installation."),(0,l.yg)("p",null,"One issue with PowerShell is that it doesn't save our modules when we import them. We can fix this by editing our $profile. We first need to create this file, as it doesn't exist by default:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"new-item -path $profile -itemtype file -force\n")),(0,l.yg)("p",null,"We can edit this file in the ISE."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"powershell_ise $profile\n")),(0,l.yg)("p",null,"To load this script at every PowerShell startup, we simply need to call it."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"Import-module C:\\it3038c-scripts\\powershell\\tools.psm1\n")),(0,l.yg)("p",null,"Save the script and restart PowerShell. Try to run GetIP again and it will work."),(0,l.yg)("p",null,"Use the $profile file to add any commands that you want to run at startup of PowerShell."),(0,l.yg)("p",null,"PowerShell Gallery"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://www.powershellgallery.com"},"https://www.powershellgallery.com")),(0,l.yg)("p",null,"Powershell gallery gives you access to all of the latest PowerShell modules available online. In fact, we can run a PowerShell command to find PowerShell modules"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"find-module\n")),(0,l.yg)("h2",{id:"python-modules-with-pip"},"Python Modules with Pip"),(0,l.yg)("p",null,"Python can be extended using modules, typically installed using PIP."),(0,l.yg)("p",null,"Now, you can install a python module anywhere at anytime, however, if you're not careful, you can make things very difficult for yourself if you decide to switch from one project to another."),(0,l.yg)("p",null,"To prevent this, Python created a plugin isolation method known as VirtualENV. VirtualENV allows you to set and install your Python modules to a specific directory, known as your virtual environment. You activate this vENV when you work with a specific set of scripts, and deactivate it when you're finished. The benefit is that you can have certain versions of plugins, certain specific plugins, and plugin modifications that don't impact the entire system."),(0,l.yg)("p",null,"THESE COMMANDS ARE IN LINUX. IN WINDOWS, CALL ",(0,l.yg)("inlineCode",{parentName:"p"},"venv/webscraping/Scripts/activate.ps1")," to activate"),(0,l.yg)("p",null,"Let's create our first VirtualENV. First, make sure virtualenv is installed."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"pip install virtualenv\nvirtualenv ~/venv/webscraping/\n")),(0,l.yg)("p",null,'Now, "ACTIVATE" this venv so we can demonstrate how this works.'),(0,l.yg)("p",null,"Linux:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"source ~/venv/webscraping/bin/activate\n")),(0,l.yg)("p",null,"Windows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-powershell"},"~/venv/webscraping/Scripts/activate.ps1\n")),(0,l.yg)("p",null,"You can tell it's activated if you see (webscraping) in front of your command line."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"pip install bs4\n")),(0,l.yg)("p",null,"Now, run the bs4 import command to verify it works"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"$ python\n\n>>>import bs4\n")),(0,l.yg)("p",null,"If you don't get an error, then you know it works."),(0,l.yg)("p",null,"Now, deactivate your venv and rerun the bs4 import command"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"$ deactivate\n$ python\n\n>>>import bs4\nTraceback (most recent call last):\n  File \"<stdin>\", line 1, in <module>\nModuleNotFoundError: No module named 'bs4'\n")),(0,l.yg)("p",null,"The import command will no longer work, because we are no longer in our venv. You can re-activate it by re-running the 'source' command above."),(0,l.yg)("p",null,"SIDENOTE: pipenv will combine pip and virtualenv together, but for now, we'll keep them separate for example sake."),(0,l.yg)("p",null,"NodeJS Modules with NPM"),(0,l.yg)("p",null,"Last up on our tour of modules is NodeJS. Node uses Node Package Manager (NPM) to manage its plugins. NPM is installed with Node. Unlike Python, all NPM modules are installed within the directory you're working in, unless otherwise specified with the ",(0,l.yg)("inlineCode",{parentName:"p"},"-g")," flag."),(0,l.yg)("p",null,"We installed a module last week to help us get the IP faster. Let's install a helpful module called nodemon. nodemon will watch the server.js file for changes and automatically restart the service when a change is detected. To install an npm module, use the following. From your 'node' folder:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"npm install nodemon\n")),(0,l.yg)("p",null,"Notice your folder now contains a 'node_modules' folder. This contains the module and all of its dependencies."),(0,l.yg)("p",null,"For this particular module, I actually do want to install it globally, so that it can be used in any node folder. To do this, I'll need sudo rights"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"$ sudo npm install -g nodemon")),(0,l.yg)("p",null,"Now outside of our node directory, we can call the nodemon executable. Copy your server.js file from this location to /tmp, then cd to /tmp and run it with nodemon"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cp server.js /tmp/server.js\n\ncd /tmp\n\nnodemon server.js\n")),(0,l.yg)("p",null,"It works, because we installed this module globally."),(0,l.yg)("h2",{id:"lab-7"},"Lab 7"),(0,l.yg)("p",null,"Using the language of your choice, research a plugin that you might find useful. To find a plugin, use google or any of these sites for each language:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"PowerShell: ",(0,l.yg)("a",{parentName:"li",href:"https://www.powershellgallery.com/"},"https://www.powershellgallery.com/")),(0,l.yg)("li",{parentName:"ul"},"Python: ",(0,l.yg)("a",{parentName:"li",href:"https://pypi.python.org/pypi"},"https://pypi.python.org/pypi")),(0,l.yg)("li",{parentName:"ul"},"Node: ",(0,l.yg)("a",{parentName:"li",href:"https://www.npmjs.com/"},"https://www.npmjs.com/"))),(0,l.yg)("p",null,"Write a script that uses that plugin and include at least 3 different usages of the plugin that you've selected. For example, if you've selected to use Pillow, a Python plugin for manipulating images, give 3 different examples of tasks you can use this plugin for, like blurring an image, creating a thumbnail or applying a filter."),(0,l.yg)("p",null,"Once you've written a script that shows these examples, create another ",(0,l.yg)("inlineCode",{parentName:"p"},"README.md")," file in the ",(0,l.yg)("inlineCode",{parentName:"p"},"Labs")," folder that tells me how to install the modules and run the script you created. ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/reedws/IT3038C/blob/main/examples/lab-7-example.md"},"Here is an example of what I'm looking for in the README")))}g.isMDXComponent=!0}}]);