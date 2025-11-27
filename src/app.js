import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Cookie parser middleware to handle cookies in requests
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true }));

export default app;