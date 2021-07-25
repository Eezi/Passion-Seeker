import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { server  } from './schema/api.js';
import path from 'path';
import serveStatic from 'serve-static';
import cors from 'cors';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
await server.start();

server.applyMiddleware({ app });

/*app.use(notFound);

app.use(errorHandler);*/

const __dirname = path.resolve();


// HAndle production
if(process.env.NODE_ENV === 'production'){
  //app.use(serveStatic(__dirname + './backend/dist'));
  app.use('/', serveStatic(__dirname + '/frontend/dist'))
  app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname + '/frontend/dist/index.html')));
  //app.use(express.static('public')); 
  /*app.use(express.static(path.join(__dirname, "./backend/dist")))
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './backend/dist', 'index.html'))
})*/
   /*app.use(express.static(__dirname + '/public/'));

   // Handle SPA
   app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'));*/
} 
const PORT = process.env.PORT || 5000;


// Kato miten spacex projektissa tehdään gql deployaus
app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`🚀  Server ready!`);
});

/*app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);*/
