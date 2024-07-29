import express from 'express'
//import {IncomingMessage, ServerResponse, createServer} from 'http'
import { AppDataSource } from './data-source';
import routes from './routes';


//const http = require("node:http");
//const fs = require("node:fs");


//const server = http.createServer((req: IncomingMessage, res:ServerResponse)=>{
//    res.writeHead(200,{"Content-Type":"text/html" });
//    fs.createReadStream(__dirname+"/index.html").pipe(res); //mais otimizado do que o de baixo
    
    //const html = fs.readFileSync("./frontend/login.html", "utf-8");
    //res.end(html);

//});

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.use(routes)


    return app.listen(process.env.PORT)
})