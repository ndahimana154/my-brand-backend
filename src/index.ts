import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";

import "./database/config/database";

const app: Express = express();
const port: number = 3301;

app.use(cors()); // Apply CORS middleware first

// Custom middleware to log incoming requests
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Serve static files from the "uploads" directory
app.use(express.static(path.join(__dirname, "uploads/blogs")));




// // Assuming your images are stored in a directory named 'images' within your project root
// app.use('/uploads/blogs/', express.static(path.join(__dirname, 'images')));


app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

// Import the routes
import routes from "./routes/index";  

app.use(express.json());
app.use("/api", routes);

export default app;
