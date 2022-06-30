import express from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(router);

app.listen(4003, () => console.log("Server is running on PORT 4003"));
