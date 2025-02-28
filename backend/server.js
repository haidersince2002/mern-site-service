import express from "express";
const app = express();
import authRoute from "./router/auth.router.js";
import contactRoute from "./router/contact.router.js";
import serviceRoute from "./router/service.router.js";
import connectDB from "./utils/db.js";
import dotnev from "dotenv";
import errorMiddleware from "./middlewares/error.middleware.js";
import cors from "cors";

dotnev.config({
  path: "./.env",
});

//handling cors policy
const corsOptions = {
  origin: `${process.env.BACKEND_BASE_URL}`,
  methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
const port = process.env.PORT || 8000;

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}/api`);
  });
});
