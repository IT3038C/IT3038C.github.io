"use strict";(self.webpackChunkit_3038c=self.webpackChunkit_3038c||[]).push([[1807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8507:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={title:"Lab 4 \u2013 Git and GitHub"},l="Lab 4 \u2013 Git and GitHub",r={type:"mdx",permalink:"/IT3038C/lab-4",source:"@site/src/pages/lab-4.md",title:"Lab 4 \u2013 Git and GitHub",description:"List of Links for this Week:",frontMatter:{title:"Lab 4 \u2013 Git and GitHub"}},s=[{value:"Important note on Git vs GitHub",id:"important-note-on-git-vs-github",level:2},{value:"Github CLI",id:"github-cli",level:2},{value:"In-Depth with Git",id:"in-depth-with-git",level:2},{value:"README",id:"readme",level:2},{value:"Lab 4",id:"lab-4",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lab-4--git-and-github"},"Lab 4 \u2013 Git and GitHub"),(0,i.kt)("p",null,"List of Links for this Week:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Git Branching: ",(0,i.kt)("a",{parentName:"li",href:"https://learngitbranching.js.org/"},"https://learngitbranching.js.org/")),(0,i.kt)("li",{parentName:"ul"},"Git Markdown Cheatsheet: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"},"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://imgs.xkcd.com/comics/git.png",alt:"XDCD Git Comic"})),(0,i.kt)("h2",{id:"important-note-on-git-vs-github"},"Important note on Git vs GitHub"),(0,i.kt)("p",null,"Many people struggle to understand the difference between Git and GitHub. It's important to know these are two separate, but closely related tools."),(0,i.kt)("p",null,"Git is a command line tool for tracking changes made to files incrementally."),(0,i.kt)("p",null,"GitHub is a cloud tool for storing Git repositories and sharing them with others. GitHub provides many collaboration tools such as Pull Requests, Wikis, Issues, Projects, and more."),(0,i.kt)("p",null,"GitHub is just one tool for remote git repositories. Other tools like GitLab and BitBucket are also available and serve the same purpose."),(0,i.kt)("h2",{id:"github-cli"},"Github CLI"),(0,i.kt)("p",null,"There's a relatively new tool called \"Github CLI\". It's a command-line program you install to manage your Github repos."),(0,i.kt)("p",null,"Let's try it out."),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"https://cli.github.com/")," and click Download for Windows."),(0,i.kt)("p",null,"Run the installation, accepting defaults is fine."),(0,i.kt)("p",null,"Now, restart PowerShell and set it up."),(0,i.kt)("p",null,"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"gh auth login\n\n? What account do you want to log into? GitHub.com\n? What is your preferred protocol for Git operations? HTTPS\n? Authenticate Git with your GitHub credentials? Yes\n? How would you like to authenticate GitHub CLI? Login with a web browser\n\n! First copy your one-time code: 8DC2-5326\n- Press Enter to open github.com in your browser...\n\u2713 Authentication complete. Press Enter to continue...\n- gh config set -h github.com git_protocol https\n\u2713 Configured git protocol\n\u2713 Logged in as reedws\n\n")),(0,i.kt)("p",null,"Now, instead of using the git command, you can use the gh command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"gh repo clone <username>/it3038c-scripts\n")),(0,i.kt)("p",null,"When interacting with git, the GitHub CLI does not show much benefit to me. It is however very useful for interacting with GitHub features such as Pull Requests and Issues."),(0,i.kt)("h2",{id:"in-depth-with-git"},"In-Depth with Git"),(0,i.kt)("p",null,"The following lesson can be done on the OS of your choice."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),'\nI use the "touch" command a lot which is a command that creates an empty file. This is NOT a valid PowerShell command. But we can make it one by using the "set-alias" command'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"set-alias touch new-item\n")),(0,i.kt)("p",null,"At this point you should have a git repo with some files in it. You should at least have a bash and powershell folder, with a script or two in each folder. You've run a few git commands, but let's dig and and really try to understand what's going on here."),(0,i.kt)("p",null,"Let\u2019s review some common Git commands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git init          # Initialize local git repository\n\ngit add <file>    # Add files(s) to index.  \u201c.\u201d  will add all files\n\ngit status        # Check Status of Working Tree\n\ngit commit        # Commit changes to \u201cindex\u201d\n\ngit push          # Push to Remote Repository\n\ngit pull          # Pull from Remote Repository\n\ngit clone         # Clone repo into a new directory\n\ngit remote        # Manage remote repository\n")),(0,i.kt)("p",null,"There are 4 primary git commands. Think of git as if you\u2019re going shopping."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git add")," puts items in your shopping cart."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," paying for them at the checkout counter and putting them in your car"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git push")," is taking the groceries home"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," would be like if your roommate also brought groceries home. Now you both have all the groceries."),(0,i.kt)("p",null,"In our ",(0,i.kt)("inlineCode",{parentName:"p"},"it3038c-scripts")," directory, create a folder called \u201ctesting\u201d and within, create 2 files (app.js, index.html)."),(0,i.kt)("p",null,"From your it3038c-scripts directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir testing\n\ntouch testing/app.js testing/index.html\n\ngit status\n")),(0,i.kt)("p",null,"Notice we now have \u201cUntracked\u201d files, meaning that they exist in our git repo, but git is not tracking or handling these files. Let\u2019s add some content to our index.html file. Open it with vim or with your Windows text editor and add the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n  <head>\n    <title>My App</title>\n  </head>\n  <body>\n    This is my app\n  </body>\n</html>\n")),(0,i.kt)("p",null,"Save and close the file. Now, let\u2019s add just this html file to our repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git add testing/index.html\n\ngit status\n\n# On branch main\n#\n# Initial commit\n#\n# Changes to be committed:\n#   (use "git rm --cached <file>..." to unstage)\n#\n# new file:   index.html\n#\n# Untracked files:\n#   (use "git add <file>..." to include in what will be committed)\n#\n# app.js\n')),(0,i.kt)("p",null,"Notice that we have 1 file to be committed (index.html), and one file that is untracked (app.js). To remove a file from being tracked, run ",(0,i.kt)("inlineCode",{parentName:"p"},"git rm --cached"),". Let\u2019s do that now."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git rm \u2013-cached testing/index.html\n\ngit status\n")),(0,i.kt)("p",null,"Now both files are untracked again. Let\u2019s create a second index.html file called index2.html and let\u2019s use a wildcard \u2018*\u2019 to add both html files back to \u201cshopping cart\u201d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp testing/index.html testing/index2.html\n\ngit add testing/*.html\n\ngit status\n")),(0,i.kt)("p",null,"Now you should have 2 .html files, both being tracked. Let\u2019s try deleting index2.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'rm index2.html\n\nls\n\ngit status\n\n# On branch main\n#\n# Initial commit\n#\n# Changes to be committed:\n#   (use "git rm --cached <file>..." to unstage)\n#\n# new file:   index.html\n# new file:   index2.html\n#\n# Changes not staged for commit:\n#   (use "git add/rm <file>..." to update what will be committed)\n#   (use "git checkout -- <file>..." to discard changes in working directory)\n#\n# deleted:    index2.html\n#\n# Untracked files:\n#   (use "git add <file>..." to include in what will be committed)\n#\n# app.js\n')),(0,i.kt)("p",null,"Notice our file index2.html is still showing up as \u201cdeleted\u201d, so our git repo still knows it\u2019s a thing, even though we deleted it. To remove it from git, we have to run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git rm --cached testing/index2.html\n")),(0,i.kt)("p",null,"Now it is removed, but we can do it in one command rather than two. Create the index2.html file again."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp testing/index.html testing/index2.html\n\ngit add testing/*.html\n\ngit status\n")),(0,i.kt)("p",null,"Then delete the file AND remove it from git"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git rm -rf index2.html\n")),(0,i.kt)("p",null,"Now the file is gone and also no longer being tracked by git"),(0,i.kt)("p",null,"Let\u2019s now add the rest of the files to the repo. Do this with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\n\ngit status\n")),(0,i.kt)("p",null,"This shows we have both our index.html and app.js files tracked by git. Let\u2019s make a change to index.html"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n  <head>\n    <title>My App</title>\n  </head>\n  <body>\n    This is my app!!!!\n  </body>\n</html>\n")),(0,i.kt)("p",null,"I added a few exclamation points to my file. Now save and"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git status\n\n# On branch main\n#\n# Initial commit\n#\n# Changes to be committed:\n#   (use "git rm --cached <file>..." to unstage)\n#\n# new file:   app.js\n# new file:   index.html\n#\n# Changes not staged for commit:\n#   (use "git add <file>..." to update what will be committed)\n#   (use "git checkout -- <file>..." to discard changes in working directory)\n#\n# modified:   index.html\n')),(0,i.kt)("p",null,"Git is telling us that we have added new files, but also that our index.html file has been modified, so we need to add to our shopping cart to be \u2018staged\u2019"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\n")),(0,i.kt)("p",null,"Now let\u2019s commit. This is the \u201ccheckout\u201d instance of our shopping analogy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git commit -m 'Initial commit'\n\n# [main(root-commit) a32bd90] Initial commit\n# 2 files changed, 8 insertions(+)\n# create mode 100644 app.js\n# create mode 100644 index.html\n\ngit status\n\n# On branch main\n# nothing to commit, working directory clean\n")),(0,i.kt)("p",null,"Let\u2019s edit the app.js file now and add the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Console.log(`Hello`);\n")),(0,i.kt)("p",null,"Save and close this file. Now, use the repeatable process of git."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\ngit commit -m 'Added output to app.js'\ngit status\n")),(0,i.kt)("p",null,"Notice how my comment gives a little hint to what I actually did."),(0,i.kt)("p",null,"Let\u2019s create a .gitignore file. If you\u2019re working in Windows, you\u2019ll have to add this file via command line, because Windows Explorer won\u2019t let you create a file with \u2018.\u2019 In front"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"touch .gitignore\n")),(0,i.kt)("p",null,"Let\u2019s create a file to ignore. Something like output.log. First create the file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ touch output.log\n\n$ git status\n\n# On branch main\n# Untracked files:\n#   (use "git add <file>..." to include in what will be committed)\n#\n# output.log\n# nothing added to commit but untracked files present (use "git add" to track)\n')),(0,i.kt)("p",null,"Notice the file shows up, but when we edit our gitignore file and add it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vim .gitignore\n#### If using Powershell you can edit this file with notepad. Feel free to set another alias `set-alias vim notepad`\nnotepad .gitignore\n")),(0,i.kt)("p",null,"Add the following contents to the ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-.gitignore"},"output.log\n")),(0,i.kt)("p",null,"Then run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ git status\n\n# On branch main\n# Untracked files:\n#   (use "git add <file>..." to include in what will be committed)\n#\n# .gitignore\n# nothing added to commit but untracked files present (use "git add" to track)\n')),(0,i.kt)("p",null,"Our only file is the .gitignore file we just created. Now add it and commit it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\ngit commit -m 'added .gitignore file'\n")),(0,i.kt)("p",null,"You can also add entire directories the exact same way. Options include"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-.gitignore"},"/directoryname\n\n*.txt\n\n.pycache\n")),(0,i.kt)("p",null,"Let\u2019s talk about branches. A branch is the functionality you would use if working on a team or working by yourself on code that you want to complete before it is merged into the Production code. This allows others to make changes without impacting you, and vice versa. To create a branch, type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git branch dev\n")),(0,i.kt)("p",null,"Git branch creates the branch, but doesn\u2019t switch to it. To checkout this branch, do"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout dev\n\ngit branch\n")),(0,i.kt)("p",null,"You can see the * indicates we are in the \u2018dev\u2019 branch. Now create a file called new.js. Edit it and add some text to it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vim new.js\n")),(0,i.kt)("p",null,"Add the contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"This is a test\n")),(0,i.kt)("p",null,"Also edit index.html and make some minor changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n  <head>\n    <title>My App</title>\n  </head>\n  <body>\n    This is my app!!!! Hi Dev!\n  </body>\n</html>\n")),(0,i.kt)("p",null,"Now add and commit these changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\ngit commit -m 'adding new stuff'\n")),(0,i.kt)("p",null,"Now let\u2019s switch back to the main branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout main\n")),(0,i.kt)("p",null,"Notice that all of our changes are gone. That\u2019s because they only exist in the dev branch, but not main. You can freely switch between the two and see the files disappear and reappear."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout dev\n")),(0,i.kt)("p",null,"We can also use the git diff command to see what\u2019s changed between the two branches."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git diff dev main\n\n\ndiff --git a/index.html b/index.html\n\nindex f450e0b..1925422 100644\n--- a/index.html\n+++ b/index.html\n@@ -3,6 +3,6 @@\n     <title> My App </title>\n   </head>\n   <body>\n-       This is my app!!!  Hi Dev!\n+       This is my app!!!\n   </body>\n </html>\ndiff --git a/new.js b/new.js\ndeleted file mode 100644\nindex 90bfcb5..0000000\n--- a/new.js\n+++ /dev/null\n@@ -1 +0,0 @@\n-this is a test\n")),(0,i.kt)("p",null,"It\u2019s not a pretty output, but it works. Now, if we\u2019re done with our new functionality, we can merge our changes from dev to main. From the main branch, git merge dev"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout main\ngit merge dev\n")),(0,i.kt)("p",null,"There\u2019s a lot more to branching and merging, so for now, just let\u2019s keep it simple."),(0,i.kt)("p",null,"Now, what if we didn\u2019t want to merge those files? If you want to rollback a commit, like before we merged Dev, we can do that with git reset. To rollback a merge, first we need the commit ID, which is an ugly string of letters and numbers. Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ git log\n\ncommit 4c9929c51640b92677c95f6e26f66d6e632a4dae\nAuthor: github teacher <reedws@ucmail.uc.edu>\nDate:   Tue Feb 6 16:47:12 2018 -0500\n\n    adding new stuff\n\ncommit 9803a75f77b5347fa3169e08b1bc54604c600008\nAuthor: github teacher <reedws@ucmail.uc.edu>\nDate:   Tue Feb 6 16:38:24 2018 -0500\n\n    added .gitignore file\n\ncommit a32bd90a88938f341e13c5c43b1cb00ecc9eb1b2\nAuthor: github teacher <reedws@ucmail.uc.edu>\nDate:   Tue Feb 6 16:29:32 2018 -0500\n\n    Initial commit\n")),(0,i.kt)("p",null,"Grab that \u201cGUID\u201d from the \u201cadded .gitignore file\u201d commit. Then do"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git reset \u2013-soft 4c9929c51640b92677c95f6e26f66d6e632a4dae\ngit status\n")),(0,i.kt)("p",null,"Notice our new files are now tracked, but uncommitted. --soft and --hard resets have two different results:"),(0,i.kt)("p",null,"REF refers to the reference number in the log"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git reset --soft <REF>  # Stage files from another commit. Rewinds current commit\n\ngit reset --mixed <REF>\n\ngit reset --hard <REF>  # Use with caution Restores everything back to a specific commit. Loses all commits after that occurred after\n")),(0,i.kt)("p",null,"If we don\u2019t want the files at all, we can follow up our git reset with a git clean -f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clean -f\n")),(0,i.kt)("p",null,"That removes all of the files that were left over. Good news is, we still have our dev branch, unaffected by all of these actions."),(0,i.kt)("h2",{id:"readme"},"README"),(0,i.kt)("p",null,"The README.md file displays on your Github page as an HTML document. It\u2019s a good way to document what your application does and how to use it."),(0,i.kt)("p",null,"Let\u2019s create a sample. Edit README.md and add the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"# MARKDOWN EXAMPLE\n\n======\n\n### Welcome My App\n\n======\n\nMy app is so great, sometimes it works! Just download the script, add some execute permissions and run it. The results should show you a list of all of the cat pictures on your machine.\n\n```javascript\nJavascript code block to highlight whats up in my code\n```\n\n* A single star creates a large heading\n** Two stars is less\n*** Three stars even less\n**** Four stars looks normal\n\n======\n")),(0,i.kt)("p",null,"Refer to the Markdown Cheatsheet for examples:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"},"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet")),(0,i.kt)("p",null,"You can also look at the source of all of these notes, as they are written in markdown!"),(0,i.kt)("p",null,"Now, add your README to your repo and push."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git add .\ngit commit -m 'added README.md'\n")),(0,i.kt)("p",null,"At this point we have not done anything to our remote branch. Now, we\u2019ll push all the changes we\u2019ve made to our remote branch so it can be viewable on github.com."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin main\n")),(0,i.kt)("p",null,"Now to add our dev branch, checkout dev and push that too."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout dev\ngit push origin dev\n")),(0,i.kt)("p",null,"Verify you can see the Dev branch now as well in your github.com page. You can view your README changes on there as well."),(0,i.kt)("p",null,"README\u2019s can be very helpful for your users and SHOULD be used to let users (and me) know what you\u2019re doing with your scripts. Hey, you can use it for Project 1!"),(0,i.kt)("p",null,"Branching is a valuable feature in git and will allow you to change files without risking overwriting code or functionality."),(0,i.kt)("p",null,"Switch back to your main branch since that will be the primary branch we use for this class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout origin main\n")),(0,i.kt)("p",null,"If you\u2019re using Windows, open VS Code and open that folder. You\u2019ll notice there is new highlighting and git options in VS Code, because VS Code knows that this is a git repo."),(0,i.kt)("p",null,'You can actually do most of your Git work within VS Code without using command line. Just click the Github icon on the left. Click the "+" icon to stage your changes. Click the \u2713 to commit and add a message.\nClick the ... and click Push. That\'s it!'),(0,i.kt)("h2",{id:"lab-4"},"Lab 4"),(0,i.kt)("p",null,"Complete the in-class lab. In addition, create some more folders on the main branch and include some empty files so that Git will register them (Git doesn't register empty directories). Submit the URL to your github.com repo Lab 4."),(0,i.kt)("p",null,'It should include Lab 2 and Lab 3 scripts, as well as a "Dev" branch. You should also include at least these folders : powershell, bash, node, python, labs, project1.'))}u.isMDXComponent=!0}}]);