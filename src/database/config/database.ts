import mongoose from "mongoose";

const mongoUrl =
  "mongodb+srv://ndahimana154:GitPAUL123@cluster0.qw2iydf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((error: any) => console.log(`Error connecting MongoDB ${error}`));
