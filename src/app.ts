import express from "express";
import Lead from "./db/models/lead";
import User from "./db/models/user";
import setupRoutes from "./routes";

const app = express();

app.use(express.json());
Lead.belongsTo(User);
User.hasMany(Lead);

const router = express.Router();
setupRoutes(router);

app.use("/", router);

export default app;
