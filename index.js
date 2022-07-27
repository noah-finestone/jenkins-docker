const http = require('http');

const server = http.createServer( (req, res)=>{

    res.write("Welcome to NODE App - Modified Version");
    res.end();

}   );

//server.listen(process.env.PORT);
server.listen(3000);

/*

npm init 
Environment + Resources 
--------------
OS (Linus)
NodeJS (Software / CLI)
Port (3000)
index.js

Command Terminal 
--------------
node index.js 
package.json

Know: diff btw RUN and CMD

*/
