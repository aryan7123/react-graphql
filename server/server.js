import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql"; 

import Connection from "./database/conn.js";
import schema from "./routes/routes.js";

const app = express();

dotenv.config();

const API_SERVER = process.env.GRAPHQL_SERVER;
const PORT = process.env.PORT;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

Connection();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at 🚀 ${API_SERVER}`);
});
