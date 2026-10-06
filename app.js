const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const logger = require("./middlewares/logger");
const employeeRoutes = require("./routes/employeeRoutes");

const {
  notFoundHandler,
  errorHandler
} = require("./middlewares/errorHandler");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware umum
app.use(cors());
app.use(logger);
app.use(express.json());

// Informasi API
app.get("/", (req, res) => {
  res.status(200).json({
    nama: "M Rezki Riopaldy",
    npm: "2428240117",
    topik: "Kepegawaian - Karyawan",
    resource: "/employees",
    endpoints: [
      "GET /employees",
      "GET /employees/:id",
      "GET /employees?departemen=Keuangan",
      "POST /employees",
      "PUT /employees/:id",
      "DELETE /employees/:id"
    ]
  });
});

// Route utama
app.use("/employees", employeeRoutes);

// 404
app.use(notFoundHandler);

// Error handler terpusat
app.use(errorHandler);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});