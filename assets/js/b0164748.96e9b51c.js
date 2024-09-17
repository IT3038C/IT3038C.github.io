"use strict";(self.webpackChunkit_3038c=self.webpackChunkit_3038c||[]).push([[8755],{5680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>h});var t=a(6540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),u=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=u(a),d=l,h=g["".concat(i,".").concat(d)]||g[d]||c[d]||s;return a?t.createElement(h,r(r({ref:n},p),{},{components:a})):t.createElement(h,r({ref:n},p))}));function h(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=a.length,r=new Array(s);r[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[g]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<s;u++)r[u]=a[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3734:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var t=a(8168),l=(a(6540),a(5680));const s={title:"Module 2 \u2013 Bash",sidebar_position:2,slug:"/2-old"},r=void 0,o={unversionedId:"old/module-2",id:"old/module-2",title:"Module 2 \u2013 Bash",description:"If you do not have your GitHub account setup, please do that now.",source:"@site/content/modules/old/module-2.md",sourceDirName:"old",slug:"/2-old",permalink:"/modules/2-old",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Module 2 \u2013 Bash",sidebar_position:2,slug:"/2-old"}},i={},u=[{value:"PuTTY",id:"putty",level:2},{value:"Create a User",id:"create-a-user",level:2},{value:"Create an SSH Key (Windows)",id:"create-an-ssh-key-windows",level:3},{value:"Git for Linux",id:"git-for-linux",level:2},{value:"Bash Commands",id:"bash-commands",level:2},{value:"Note on Code Samples",id:"note-on-code-samples",level:3},{value:"Grep",id:"grep",level:3},{value:"AWK",id:"awk",level:3},{value:"Other Commands",id:"other-commands",level:3},{value:"Creating a Bash Script",id:"creating-a-bash-script",level:2},{value:"Variables",id:"variables",level:3},{value:"A Real World Example",id:"a-real-world-example",level:3},{value:"Avoid being rate-limited",id:"avoid-being-rate-limited",level:2},{value:"Lab 2",id:"lab-2",level:2},{value:"Example",id:"example",level:3}],p={toc:u},g="wrapper";function c(e){let{components:n,...s}=e;return(0,l.yg)(g,(0,t.A)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"If you do not have your GitHub account setup, please do that now."),(0,l.yg)("h2",{id:"putty"},"PuTTY"),(0,l.yg)("p",null,"First, we'll connect to our Linux instance via Putty. If you are NOT using the Sandbox environment, then you just need to connect via SSH to your Linux machine."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of PuTTY Configuration",src:a(458).A,width:"902",height:"864"})),(0,l.yg)("h2",{id:"create-a-user"},"Create a User"),(0,l.yg)("p",null,"Quick aside, I hate putting in a password every time I su, so let's create a user that doesn't have to do that. To do this, we have to sudo su to root first.\nRun the following commands from your Linux PuTTY connection"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"sudo su\nsudo useradd reedws #### THIS should be YOUR UC username ####\nsudo echo 'reedws ALL=(ALL:ALL) NOPASSWD:ALL' > /etc/sudoers.d/reedws\nsu \u2013 reedws\n")),(0,l.yg)("h3",{id:"create-an-ssh-key-windows"},"Create an SSH Key (Windows)"),(0,l.yg)("p",null,"Now, let's do one more step to make our lives super easy. As the user you just created. We're going to 'key' our user so that we can login without a password from our Windows machine."),(0,l.yg)("p",null,"On your Windows VM, right-click the PuTTY icon and click Run PuTTYgen"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of Run PuTTYgen menu",src:a(1851).A,width:"342",height:"426"})),(0,l.yg)("p",null,"Click Generate and move the mouse until the bar is full. This will generate a unique key."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of PuTTYgen create screen",src:a(5487).A,width:"408",height:"408"})),(0,l.yg)("p",null,"Once finished, select ALL of the text in the window under Public key for pasting into OpenSSH"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of OpenSSH Key from PuTTYgen",src:a(9193).A,width:"598",height:"136"})),(0,l.yg)("p",null,'Click "Save public key" and "Save private key". Click "Yes" that you are sure you want to save without a passphrase.\nSave them to a location like C:\\ssh_keys\\\nGive the file name your username, reedws.pub and reedws.ppk respectively.'),(0,l.yg)("p",null,"Return to your Linux session. Run the command as your user, making sure all spelling matches:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"## you may need to create the .ssh directory. To do this, run\nmkdir ~/.ssh/\n\nvi ~/.ssh/authorized_keys\n")),(0,l.yg)("p",null,"Press the 'i' key within VIM to enter ",(0,l.yg)("em",{parentName:"p"},"INSERT")," mode, then paste the contents of the ssh-rsa key from your PuTTYgen window. It should start with ",(0,l.yg)("strong",{parentName:"p"},"ssh-rsa")," and end with ",(0,l.yg)("strong",{parentName:"p"},"rsa-key-YYYYMMDD")),(0,l.yg)("p",null,"Save and quit the file by pressing ",(0,l.yg)("inlineCode",{parentName:"p"},"esc")," and entering ",(0,l.yg)("inlineCode",{parentName:"p"},":wq")," (write and quit)"),(0,l.yg)("p",null,"Now it's not enough to just have the file, we also need to set permissions on it. Change the perms to 700 for .ssh folder and 600 for the authorized_keys file, that is, read and write for ONLY the owner of the file:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"chmod 700 ~/.ssh\nchmod 600 ~/.ssh/authorized_keys\n")),(0,l.yg)("p",null,"Return to the base PuTTY window. For hostname, enter ",(0,l.yg)("inlineCode",{parentName:"p"},"username@192.168.33.XX")," where username is your user and XX is the last octet of your IP."),(0,l.yg)("p",null,"On the left side, under Connections, click SSH | Auth (select Auth, do not click +)\nClick Browse and add your SSH Private Key"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of PuTTY auth config",src:a(9756).A,width:"928",height:"888"})),(0,l.yg)("p",null,"Return to the Session tab and save the session by entering a session name and clicking Save"),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of PuTTY config window with saved connections",src:a(1485).A,width:"916",height:"882"})),(0,l.yg)("p",null,"Now, click Open to open the session. You should be connected as a user, with root access, no password needed. Make sure you can ",(0,l.yg)("inlineCode",{parentName:"p"},"sudo su")," as well."),(0,l.yg)("h2",{id:"git-for-linux"},"Git for Linux"),(0,l.yg)("p",null,"Let's install Git on our Linux machine"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"sudo yum -y install git\n")),(0,l.yg)("p",null,"This command calls the package manager for our system, finds all of the dependencies for Git and installs them."),(0,l.yg)("p",null,"All we need to do it run 'git \u2013version' to verify it's working."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"git --version\n")),(0,l.yg)("p",null,"Now that we've already established our Github repo, we just need to pull it down, but first, we have to let our Github repo know who we are, so that we can freely push and pull."),(0,l.yg)("p",null,"To do this, we'll need to generate an SSH key on our Linux machine that we can use to authenticate to Github."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t ed25519 -C "<your-github-email>"\n')),(0,l.yg)("p",null,"You'll be prompted for a save location. Defaults are fine, and we don't need a password, so keep hitting enter until you are out of the command."),(0,l.yg)("p",null,'Now we need to copy our "public" key from our linux server to ',(0,l.yg)("a",{parentName:"p",href:"https://github.com/settings/ssh/new"},"https://github.com/settings/ssh/new")),(0,l.yg)("p",null,"Run the following command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cat ~/.ssh/id_ed25519.pub\n")),(0,l.yg)("p",null,"Give it a friendly name (sandbox) then paste the contents of the file above and Save."),(0,l.yg)("p",null,'Return to your repo in Github. Click the code button and copy the "SSH" clone location:'),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"Screenshot of GitHub clone via ssh option",src:a(2345).A,width:"407",height:"360"})),(0,l.yg)("p",null,"Make sure it starts with ",(0,l.yg)("a",{parentName:"p",href:"mailto:git@github.com"},"git@github.com")),(0,l.yg)("p",null,"Back to your putty window, run the command"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~\ngit clone git@github.com:<your-username>/it3038c-scripts.git\n")),(0,l.yg)("p",null,"You may be promoted to validate the cert. Type ",(0,l.yg)("inlineCode",{parentName:"p"},"yes")),(0,l.yg)("p",null,"Now"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cd it3038c-scripts\n")),(0,l.yg)("p",null,"You now have your Git repo synced to your Linux machine. Let's go ahead and complete our setup by running these two commands:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'git config --global user.name "<your-username>"\ngit config --global user.email "<your github email>"\n')),(0,l.yg)("h2",{id:"bash-commands"},"Bash Commands"),(0,l.yg)("p",null,"Bash is the Bourne Again SHell. Bourne shell is the original sh shell that we see on many systems. Bash became the default on Unix V7. Let's run a few basic commands."),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"note-on-code-samples"},"Note on Code Samples"),(0,l.yg)("p",null,'The code examples below includes a "',(0,l.yg)("inlineCode",{parentName:"p"},"$"),'" only when differentiating user input and expected output in the same code block, otherwise they are omitted.'),(0,l.yg)("hr",null),(0,l.yg)("p",null,"Get Bash Version using the machine variable $BASH_VERSION"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"$ echo $BASH_VERSION\n\n4.2.46(2)-release\n")),(0,l.yg)("p",null,"Get our current working directory (print working directory)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"$ pwd\n\n/home/<username>\n")),(0,l.yg)("p",null,"If you're not in your home directory,"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~\n")),(0,l.yg)("p",null,"Let's do some basic file manipulation. First, let's create a directory called playground and cd into that directory."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"$ mkdir playground\n$ cd playground\n$ pwd\n\n/home/username/playground\n")),(0,l.yg)("p",null,"You can create an empty file using the touch command"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"touch 1.txt\n")),(0,l.yg)("p",null,"You can create several files by passing in a parameter multiple times"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"touch 1.txt 2.txt 3.txt\n")),(0,l.yg)("p",null,'You can create several files using "Brace Expansion"'),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"touch file_{1..100}.txt\n")),(0,l.yg)("p",null,"Show all the files"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"ls\n")),(0,l.yg)("p",null,"Now remove them"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"rm *\nls\n")),(0,l.yg)("p",null,"Create several files with several brace expansions"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"touch hello_{1..5}.txt world_{1..5}.txt\nls\n")),(0,l.yg)("p",null,"Get a line count from an input (ll in this case)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"$ ls | wc \u2013l\n\n10\n")),(0,l.yg)("p",null,"Clear the terminal window"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"clear\n")),(0,l.yg)("p",null,"Count from x to y by z's {x..y..z}"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"$ echo {0..10..2}\n\n2 4 6 8 10\n")),(0,l.yg)("p",null,"Print letters in a range"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"$ echo {A..Z}\n\nA B C D E F G H I J K L M N O P Q R S T U V W X Y Z\n")),(0,l.yg)("p",null,"The range can include ASCII characters"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"$ echo {A..z}\n\nA B C D E F G H I J K L M N O P Q R S T U V W X Y Z [  ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z\n")),(0,l.yg)("h3",{id:"grep"},"Grep"),(0,l.yg)("p",null,"Using grep filters out results, plus all kinds of new stuff."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"man grep\n<q to quit>\n")),(0,l.yg)("p",null,"Use grep to filter through the ls command"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"ls | grep 5\nls | grep hello\n")),(0,l.yg)("p",null,"Filtering results with grep:"),(0,l.yg)("p",null,"Run a 'cat' command on /var/log/secure to get a list of recent authentications"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"sudo cat /var/log/secure\n")),(0,l.yg)("p",null,"Now apply a GREP filter to it. Let's find all instances of student"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"sudo cat /var/log/secure | grep student\n")),(0,l.yg)("p",null,"That's quite a bit of data. Let's find specifically any time root was impersonated"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"sudo cat /var/log/secure | grep 'session opened for user root'\n")),(0,l.yg)("p",null,"This is much more readable\u2026"),(0,l.yg)("h3",{id:"awk"},"AWK"),(0,l.yg)("p",null,"You can use AWK to filter results as well. Take our ",(0,l.yg)("inlineCode",{parentName:"p"},"ll")," command as example.\nIf you count the columns, you'll see there are 9 total. We can use AWK to only print certain columns"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"ll | awk '{print $9}'\n")),(0,l.yg)("p",null,"Combining Grep and AWK commands, we can get specific data from a command like our cat command above. Let's see if we can extract the date and time and username only from our secure log file."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"sudo cat /var/log/secure | grep student | awk '{print $1 $2 $3 $13}'\n")),(0,l.yg)("p",null,"Not bad. If we want to make this a little prettier, simply added empty quotations between each variable"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'sudo cat /var/log/secure | grep student | awk \'{print $1 " " $2 " " $3 " " $13}\'\n')),(0,l.yg)("p",null,"Let's apply this filter to another command: ",(0,l.yg)("inlineCode",{parentName:"p"},"ip a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"ip a\n")),(0,l.yg)("p",null,"We want to grab the primary IP address of this machine, so we have to find out what makes a single line distinct for this. We can see that ens192 is the name of our connection, so let's GREP on that"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"ip a | grep 'ens192'\n")),(0,l.yg)("p",null,"Better, but we're still grabbing an extra line. Let's add one more qualifier to our grep command to get a single line. Looks like if we grab noprefixroute ens192\" we'll get our single line output."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"ip a | grep 'noprefixroute ens192'\n")),(0,l.yg)("p",null,"Now we can use AWK to grab the IP alone, without the rest of the line."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"ip a | grep 'noprefixroute ens192' | awk '{print $2}'\n")),(0,l.yg)("p",null,"Excellent, we just grabbed our IP (with subnet mask) using simple BASH commands."),(0,l.yg)("h3",{id:"other-commands"},"Other Commands"),(0,l.yg)("p",null,"Here are some other commands we'll be using in our first script\nDate lets you manipulate date data"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'$ date\n\nFri Jan 29 11:11:11 EDT 2021\n\n$ date +"%d-%m-%Y"\n\n29-01-2021\n\n$ date +"%H:%M:%S"\n\n12:34:56\n')),(0,l.yg)("p",null,"We can grab our username using the Machine Variable $USER"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'$ echo "Name: " $USER\n\nName: reedws\n')),(0,l.yg)("p",null,"This is ok, but we can do better.\nprintf let's us create simple, formatted strings that you can pass variables into our strings. \\t is a tab, %s denotes a string for our variable that we pass as $USER, \\n is a new line."),(0,l.yg)("p",null,"Let's see if we can make the above statement prettier with printf"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'$ printf "Name: %s" $USER\n\nname: student[student...\n\n$ printf "Name: %s\\n" $USER\n\nname: student\n\n$ printf "Name: \\t%s\\n" $USER\n\nname:   student\n')),(0,l.yg)("h2",{id:"creating-a-bash-script"},"Creating a Bash Script"),(0,l.yg)("p",null,"As your newly created user, run these commands to create a scripts that contains variables, arguments, and flow-logic. First, let's cd into our bash directory in our git repo and create a file"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~/it3038c-scripts/bash\nvim myFirstScript.sh\n")),(0,l.yg)("p",null,"Press the ",(0,l.yg)("inlineCode",{parentName:"p"},"i"),' key in Vim will allow you to insert.\nStart file with "sha-bang"'),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\n# This script outputs the IP address and Hostname of a machine\necho 'This is a script. Hello!'\n")),(0,l.yg)("p",null,"Press ESC to exit ",(0,l.yg)("inlineCode",{parentName:"p"},"INSERT")," mode to Save and exit vim\n",(0,l.yg)("inlineCode",{parentName:"p"},":wq"),"    or    ",(0,l.yg)("inlineCode",{parentName:"p"},":x")),(0,l.yg)("p",null,"Try to run the script:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"./myFirstScript.sh\n")),(0,l.yg)("p",null,"You'll get a permissions error. That's because we don't have execute on the script. Grant execute permissions with the following command:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x myFirstScript.sh\n$ ./myFirstScript.sh\n\nThis is a script. Hello!\n")),(0,l.yg)("p",null,"There are a few options with Echo. Use vim to continue editing the file:"),(0,l.yg)("p",null,"$ vim myFirstScript.sh"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'greeting="This is a script. Hello!"\necho $greeting, thanks for joining us!\necho \'$greeting, thanks for joining us! You owe me $20\'\necho "$greeting, thanks for joining us!"\necho "$greeting, you owe me $20"\n')),(0,l.yg)("p",null,"Save and exit vim with ",(0,l.yg)("inlineCode",{parentName:"p"},"<esc>")," ",(0,l.yg)("inlineCode",{parentName:"p"},":wq")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"./myFirstScript.sh")),(0,l.yg)("p",null,"output:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"This is a script. Hello!, thanks for joining us!\n$greeting, thanks for joining us! You owe me $20\nThis is a script. Hello!, thanks for joining us!\nThis is a script. Hello!, you owe me 0\n")),(0,l.yg)("p",null,"Notice how each command has a slightly different output based on the use of single or double quotes."),(0,l.yg)("p",null,"Reopen the script with vim and in the last line, change ",(0,l.yg)("inlineCode",{parentName:"p"},"$")," to ",(0,l.yg)("inlineCode",{parentName:"p"},"\\$")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},'echo "$greeting, you owe me \\$20"')),(0,l.yg)("p",null,"Save and exit vim with ",(0,l.yg)("inlineCode",{parentName:"p"},"<esc>")," ",(0,l.yg)("inlineCode",{parentName:"p"},":wq")),(0,l.yg)("p",null,"Run the script and notice how the use of escape characters has fixed the last line."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sh"},"$ ./myFirstScript.sh\n\nThis is a script. Hello!, thanks for joining us!\n$greeting, thanks for joining us! You owe me $20\nThis is a script. Hello!, thanks for joining us!\nThis is a script. Hello!, you owe me $20\n")),(0,l.yg)("h3",{id:"variables"},"Variables"),(0,l.yg)("p",null,"Open your script for editing and add the following lines:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"echo Machine Type: $MACHTYPE\necho Hostname: $HOSTNAME\necho Working Dir: $PWD\necho Session length: $SECONDS\necho Home Dir: $HOME\n")),(0,l.yg)("p",null,"These are know as Machine variables and they are available on virtually all flavors of Linux."),(0,l.yg)("p",null,"Save and close your script and run it. You should see an output of all these reserved variables."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"Machine Type: x86_64-redhat-linux-gnu\nHostname: username-centos\nWorking Dir: /home/reedws\nSession length: 0\nHome Dir: /home/reedws\n")),(0,l.yg)("p",null,"Reopen your script and add the following lines:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"a=$(ip a | grep 'noprefixroute ens192'| awk '{print $2}')\necho My IP is $a\n")),(0,l.yg)("p",null,"Save and run the script again. You should see an output that includes your IP address."),(0,l.yg)("h3",{id:"a-real-world-example"},"A Real World Example"),(0,l.yg)("p",null,"The takeaway with bash scripting is you can take any set of Linux commands and turn them into a bash script."),(0,l.yg)("p",null,"Let's write a simple script that pulls from data from the internet. For this we'll use the ",(0,l.yg)("inlineCode",{parentName:"p"},"curl")," command plus another tool called ",(0,l.yg)("inlineCode",{parentName:"p"},"jq"),". Both of these should already be installed"),(0,l.yg)("p",null,"Here is an example of the command we'll be turning into a script:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"curl https://api.covidtracking.com/v1/us/current.json | jq '.[0]'\n")),(0,l.yg)("p",null,"The output will return in json format. The ",(0,l.yg)("inlineCode",{parentName:"p"},"jq")," command parses the output and allows us to get just the data we want. Using some of the techniques we've already learned, we can create a simple script that gives us the ",(0,l.yg)("inlineCode",{parentName:"p"},"date")," and the number of ",(0,l.yg)("inlineCode",{parentName:"p"},"positive")," cases."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"vim covid.sh")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n# This script downloads covid data and displays it\n\nPOSITIVE=$(curl https://api.covidtracking.com/v1/us/current.json | jq '.[0].positive')\nTODAY=$(date)\n\necho \"On $TODAY, there were $POSITIVE positive COVID cases\"\n")),(0,l.yg)("p",null,"Save your script. Remember to add executable rights ",(0,l.yg)("inlineCode",{parentName:"p"},"chmod +x covid.sh"),"\nThen run it with\n",(0,l.yg)("inlineCode",{parentName:"p"},"./covid.sh")),(0,l.yg)("p",null,"The output should look like ",(0,l.yg)("inlineCode",{parentName:"p"},"On Sat Aug 28 14:23:53 EDT 2021, there were 28756489 positive cases")),(0,l.yg)("h2",{id:"avoid-being-rate-limited"},"Avoid being rate-limited"),(0,l.yg)("p",null,"API's are typically rate limited based on the number of calls per second. If you call this API multiple times in your script, you are likely to be rate limited. With one small tweak, we can do 1 call per script invocation."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n# This script downloads covid data and displays it\n\nDATA=$(curl https://api.covidtracking.com/v1/us/current.json)\nPOSITIVE=$(echo $DATA | jq '.[0].positive')\nTODAY=$(date)\n\necho \"On $TODAY, there were $POSITIVE positive COVID cases\"\n")),(0,l.yg)("h2",{id:"lab-2"},"Lab 2"),(0,l.yg)("p",null,"Using this template as a starting point, add more data to this script. Please include at least 3 additional data points, displayed in a readable output."),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"On Sat Aug 28 14:23:53 EDT 2021, there were 28756489 positive cases, 74582825 negative tests, 500500 deaths and 776361 hospitalized.")),(0,l.yg)("p",null,"Finally, add your script to Github and push."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"git add .\ngit commit -m 'Lab 2'\ngit push origin main\n")))}c.isMDXComponent=!0},2345:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/1-clone-ssh-34c221aaed5adaa43ce696bf60f795f9.png"},458:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/1-configuration-9eea6d046d9693108ff8821e264d2525.png"},1851:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/2-run-puttygen-03049fcfaaf6b50c8a8e1a1df49125ab.png"},5487:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/3-puttygen-create-c41b5b9ca58e830a9c3ead3aa6407f3e.png"},9193:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/4-openssh-key-bfd105aa0ef0a822696e0d92029b1c6b.png"},9756:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/5-private-key-auth-104023d7c9a52dbb6079ed247dcf86e0.png"},1485:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/6-save-config-00256129cc1741326c5bf0e73b956881.png"}}]);