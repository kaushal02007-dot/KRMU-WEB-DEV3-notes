npm(node package manager) :lets u install,manage and share reusable code packages(libraries)....
--> it helps developers:
       * install packages
       *update "
       *Remove "
       *Share their own packages
 usecase: without npm we have to code everything from sratch..npm gives us instant access to libraries solving every problem imaginable

--> package.json is a json file that explains  ur project(project's description) and lists all the dependencie
->package.json = project's blueprint 
-> to create it : npm instal -y

-->local packages : installed in node_modules(inside the project)
-->global packages: installed in system-wide npm directories

local vs global packages from ppt***

--> package_lock.json: automatically genearted by npm install
it records the exact  version of every insatlled package and all its sub - dependencies
-> ensures every developer on team installs the identical  versions ...prvents problems caused by version drift

--> npm install express: jo dependency hamari production or developemnt dono  i rhegi ham usko aise downlopad krenge eg: express

--> npm install --save-dev nodemon jest: jo dependency only development mi rkhni h eg: nodemon jest....installs a package as devDependency

dependency ka koi particular version download krna h toh ...npm install express@4.18.2 .... dependency ka naam , at the rate then name of the evrsion u wnat to download

-->Npm i se :Koi or use krega hamare project ko toh package.json ki saari dependencies uske project mi install ho jaaega

-->Npm i  -g cors
Toh ye dependencies mi nhi dikha kyoki ye globally download hogya h mtlb mere laptop p(file explorer mi jaenge toh udhr dundh skte ham esko) ... or kisi b project m use kr skte hn ...baaki local dependencies ki trh hni h ki bs uss particular project mi use krne ki milega