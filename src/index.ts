import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import sequelize from "./config/db";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/", router);

const startApi = async () => {
  try {
    await sequelize.authenticate();
    console.log("successfully connected to the DB");
    app.listen(3000, () =>
      console.log("Server is running on localhost 3000")
    );
  } catch (error) {
    console.error("Error starting API:", error);
  }
};

startApi();
