const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const reservationsRouter = require("./routes/reservationRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Replace this with your actual database name if needed
const mongoUri =
  "mongodb+srv://mish:mish@cluster0.ydjncln.mongodb.net/test-db?retryWrites=true&w=majority";

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Test route to confirm server runs
app.get("/", (req, res) => {
  res.send("✅ Server is working and connected to MongoDB!");
});

app.use("/api/reservations", reservationsRouter);

app.listen(5000, () => console.log("Server running on port 5000"));
