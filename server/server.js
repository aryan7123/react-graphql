import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/conn.js';

const app = express();

dotenv.config();

const API_SERVER = process.env.GRAPHQL_SERVER;
const PORT = process.env.PORT;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

Connection();

app.listen(PORT, () => {
    console.log(`Running a GraphQL API server at 🚀 ${API_SERVER}`);
});