import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
//import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
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

const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`🚀  Server ready at ${process.env.PORT}`);
});

// HAndle production
if(process.env.NODE_ENV === 'production'){
  //app.use('/', serveStatic(__dirname + '/client/build')) 
  //app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
  app.use(express.static(path.join(__dirname, '/client/build'))) 
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
};
