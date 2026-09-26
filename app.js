const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let employees = [
  {
    id: 1,
    nip: "EMP-0045",
    nama: "Agus Pratama",
    jabatan: "Staf Akuntansi",
    departemen: "Keuangan",
    gaji: 6500000
  },
  {
    id: 2,
    nip: "EMP-0046",
    nama: "Siti Rahma",
    jabatan: "HR Officer",
    departemen: "HRD",
    gaji: 7000000
  },
  {
    id: 3,
    nip: "EMP-0047",
    nama: "Budi Santoso",
    jabatan: "Software Developer",
    departemen: "IT",
    gaji: 8500000
  }
];

let nextId = 4;

app.get("/", (req, res) => {
  res.json({
    nama: "M Rezki Riopaldy",
    npm: "2428240117",
    topik: 11,
    resource: "/employees",
    endpoints: [
      "GET /employees",
      "GET /employees/:id",
      "POST /employees",
      "PUT /employees/:id",
      "DELETE /employees/:id",
      "GET /employees?departemen=Keuangan"
    ]
  });
});

// GET /employees
app.get("/employees", (req, res) => {
  const { departemen } = req.query;

  if (departemen) {
    const filteredEmployees = employees.filter(
      (employee) => employee.departemen === departemen
    );

    return res.status(200).json(filteredEmployees);
  }

  res.status(200).json(employees);
});

// GET /employees/:id
app.get("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const employee = employees.find(
    (employee) => employee.id === id
  );

  if (!employee) {
    return res.status(404).json({
      status: "error",
      message: `Data dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  res.status(200).json(employee);
});

// POST /employees
// Body: { "nip": "...", "nama": "...", "jabatan": "...", "departemen": "...", "gaji": 0 }
app.post("/employees", (req, res) => {
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
      message: "nip, nama, jabatan, dan departemen wajib diisi",
      data: null
    });
  }

  const newEmployee = {
    id: nextId++,
    nip,
    nama,
    jabatan,
    departemen,
    gaji
  };

  employees.push(newEmployee);

  res.status(201).json({
    status: "success",
    message: "Data karyawan berhasil ditambahkan",
    data: newEmployee
  });
});

// PUT /employees/:id
// Body: { "nip": "...", "nama": "...", "jabatan": "...", "departemen": "...", "gaji": 0 }
app.put("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = employees.findIndex(
    (employee) => employee.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      status: "error",
      message: `Data dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

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
      message: "nip, nama, jabatan, dan departemen wajib diisi",
      data: null
    });
  }

  const updatedEmployee = {
    id,
    nip,
    nama,
    jabatan,
    departemen,
    gaji
  };

  employees[index] = updatedEmployee;

  res.status(200).json({
    status: "success",
    message: "Data karyawan berhasil diubah",
    data: updatedEmployee
  });
});

// DELETE /employees/:id
app.delete("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = employees.findIndex(
    (employee) => employee.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      status: "error",
      message: `Data dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  employees.splice(index, 1);

  res.status(200).json({
    status: "success",
    message: `Data karyawan dengan id ${id} berhasil dihapus`,
    data: null
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Endpoint tidak ditemukan",
    data: null
  });
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}

module.exports = app;