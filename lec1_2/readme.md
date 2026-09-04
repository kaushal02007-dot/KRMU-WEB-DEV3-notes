LECTURE1

--> backend development refers to the server-side of an application
it is responsible for ->processing user requests
                      ->performing business logics
                      -> connecting databases
                      -> authentication
                      ->sending responses to users
eg: login system, payment gateway

-->HOW BACKEND FITS IN ANY APP
client side requests(user action)
backend server recieves request
application logic and processing: run server side code
server generates responses
client displays response - renders the response and update user interface

--> FRONTEND : what user sees and interact with
-->BACKEND: inivisible infrastructure that processes requests, generates responses, manages data, provide APIs
-->APIs: set of rules that allows different software applications to communicate with each other
diff bw frontend and backend -- from ppt

CLIENT-SERVER ARCHITECTURE:
a model where client(browser/app) sends requests to a server(ur app), which processes them and sends responses back.


-->Node.js: javascript runtime environment that lets u write server_side code. its javascript escaping the browser cage and running on servers.

it is single-threaded(means 1 task at a time)

--> WHY USE Node.js
ideal for building fast and scalable backend applications
-> high performance- handles 10000+ concurrent connection
-> npm ecosystem - instantly install any library u need
-> light weight - low memory footprint per server


LECTURE 2:

--> HTTP : defines how messages are formatted and transmitted bw clients and serevrs..everytime u visit a vwebsite http is working

https request is a msg sent by client(browser) to the the server asking for some information or requesting an action

http request st. : http request has 4 main parts 
-->method: it tells the server what u want to do ...eg: GET, POST, PUT, PATCH, DELETE

--> URL: it tells where the request should go.. eg : https://api.cpllege.com/students

--> Headers(key avlue pairs): provide extra information about the request
eg: content-type : application/json
Auhtorization : bearer xyz123

--> BOdy: contains the actual data sent to the server like email password
eg: {
    "name" : "kaushal",
    "age"  : "sweet 16"
}

-->5 COMMON HTTP METHODS:
->GET: rerieve data
->POST: create a new resource
->PUT: replace the entire resource
->PATCh: patially update the resource(updates only specific fields)
->DELETE: remove a resource

--> HTTP STATUS CODE: 3 digit nos send by the server to tell the client whether the request was successful of not...essential for erro handling

--> 5CATEGORIES OF HTTP STATUS CODE:
->1xx(informational) : request recieved ...process continuing
->2xx(success): request fulfiled
->3xx(redirection): further actions must be taken to complete request
->4xx(client error): client mistake
--> 5xx(server error): serevr failed to fulfil an apparently vaild request










