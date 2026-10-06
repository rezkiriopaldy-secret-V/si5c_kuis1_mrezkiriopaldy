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
    jabatan: "Staf HRD",
    departemen: "SDM",
    gaji: 6000000
  },
  {
    id: 3,
    nip: "EMP-0047",
    nama: "Budi Santoso",
    jabatan: "Supervisor",
    departemen: "Operasional",
    gaji: 8500000
  }
];

let nextId = 4;

const getAllEmployees = (departemen) => {
  if (!departemen) {
    return employees;
  }

  return employees.filter(
    (employee) =>
      employee.departemen.toLowerCase() === departemen.toLowerCase()
  );
};

const getEmployeeById = (id) => {
  return employees.find((employee) => employee.id === Number(id));
};

const createEmployee = (data) => {
  const employee = {
    id: nextId++,
    nip: data.nip,
    nama: data.nama,
    jabatan: data.jabatan,
    departemen: data.departemen,
    gaji: data.gaji
  };

  employees.push(employee);

  return employee;
};

const updateEmployee = (id, data) => {
  const index = employees.findIndex(
    (employee) => employee.id === Number(id)
  );

  if (index === -1) {
    return null;
  }

  employees[index] = {
    ...employees[index],
    nip: data.nip,
    nama: data.nama,
    jabatan: data.jabatan,
    departemen: data.departemen,
    gaji: data.gaji
  };

  return employees[index];
};

const deleteEmployee = (id) => {
  const index = employees.findIndex(
    (employee) => employee.id === Number(id)
  );

  if (index === -1) {
    return null;
  }

  employees.splice(index, 1);

  return true;
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};