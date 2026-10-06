const employeeModel = require("../models/employeeModel");

const getEmployees = (req, res, next) => {
  try {
    const { departemen } = req.query;

    const employees = employeeModel.getAllEmployees(departemen);

    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};

const getEmployeeById = (req, res, next) => {
  try {
    const employee = employeeModel.getEmployeeById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        status: "error",
        message: `Data dengan id ${req.params.id} tidak ditemukan`,
        data: null
      });
    }

    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};

const createEmployee = (req, res, next) => {
  try {
    const {
      nip,
      nama,
      jabatan,
      departemen,
      gaji
    } = req.body;

    if (!nip || !nama || !jabatan || !departemen) {
      return res.status(400).json({
        status: "error",
        message:
          "Field nip, nama, jabatan, dan departemen wajib diisi",
        data: null
      });
    }

    const employee = employeeModel.createEmployee({
      nip,
      nama,
      jabatan,
      departemen,
      gaji
    });

    res.status(201).json({
      status: "success",
      message: "Data karyawan berhasil ditambahkan",
      data: employee
    });
  } catch (error) {
    next(error);
  }
};

const updateEmployee = (req, res, next) => {
  try {
    const {
      nip,
      nama,
      jabatan,
      departemen,
      gaji
    } = req.body;

    if (!nip || !nama || !jabatan || !departemen) {
      return res.status(400).json({
        status: "error",
        message:
          "Field nip, nama, jabatan, dan departemen wajib diisi",
        data: null
      });
    }

    const employee = employeeModel.updateEmployee(
      req.params.id,
      {
        nip,
        nama,
        jabatan,
        departemen,
        gaji
      }
    );

    if (!employee) {
      return res.status(404).json({
        status: "error",
        message: `Data dengan id ${req.params.id} tidak ditemukan`,
        data: null
      });
    }

    res.status(200).json({
      status: "success",
      message: `Data karyawan dengan id ${req.params.id} berhasil diubah`,
      data: employee
    });
  } catch (error) {
    next(error);
  }
};

const deleteEmployee = (req, res, next) => {
  try {
    const deleted = employeeModel.deleteEmployee(
      req.params.id
    );

    if (!deleted) {
      return res.status(404).json({
        status: "error",
        message: `Data dengan id ${req.params.id} tidak ditemukan`,
        data: null
      });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};