const express = require("express");

const router = express.Router();

const {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require("../controllers/employeeController");

const cekApiKey = require("../middlewares/cekApiKey");

// GET /employees
router.get("/", getEmployees);

// GET /employees/:id
router.get("/:id", getEmployeeById);

// POST /employees
router.post("/", cekApiKey, createEmployee);

// PUT /employees/:id
router.put("/:id", cekApiKey, updateEmployee);

// DELETE /employees/:id
router.delete("/:id", cekApiKey, deleteEmployee);

module.exports = router;