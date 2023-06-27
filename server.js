const mongoose = require('mongoose');
const next = require('next');
const dotenv=require('dotenv');

const dev= process.send.NODE_ENV != "production";
const nextServer = next({ dev });
const handle = nextServer.getRequestHandler();

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
"<PASSWORD>",

process.env.DATABASE_PASSWORD
);

 mongoose
 .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false,
 })
 .then(()=> console.log("DB connection established!"));

 const port=3000;

 let server;
 nextServer.prepare().then(()=> {
    app.grt("*",(req,res)=> {
        return handle(req,res);
    });
   
    app,listen(port,()=>{
        console.log('App running on port ${port}....');
    });
 });
