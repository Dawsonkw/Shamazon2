import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

// KILL THE SERVER AND IF YOU HAVE PROBLEMS WITH THE JSON NOT UPDATING ASSUMING YOU HAVE TO UPDATE IT AGAIN WHICHYOUSHOULDN'T BUT IF YOU DO: "Invoke-WebRequest -Uri http://localhost:5000/api/products -Method Get" NO QUOTES! USE THIS COMMAND IN THE TERMINAL TO PING THE SERVER AND SEE IF ITS STILL ACTIVE FOR SOME REASON LIKE IT WAS WHEN YOU JUST SPEN4 4 HOURS CHASING YOUR TAIL ALL BECAUSE THE SERVOER WAS RUNNING SOMEHOW IN THE BACKGROUND.

dotenv.config();

const app = express();

// Would update cors to be more specific if this was a production project
app.use(cors());
app.use(express.json());

// Root route sanity check
app.get("/", (req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.json({ message: "Welcome to the API" });
});

// Routes for products and auth and user
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);

export default app;
