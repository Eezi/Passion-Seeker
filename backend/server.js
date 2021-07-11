import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { server  } from './schema/api.js';
import path from 'path';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running now...");
});

app.use(notFound);

app.use(errorHandler);

const __dirname = path.resolve();

// HAndle production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/frontend/dist'))) 
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')))
} 
const PORT = process.env.PORT || 4000;


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

/*app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);*/
