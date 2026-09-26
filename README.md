# Tugas 1 RESTful API - Karyawan

RESTful API sederhana menggunakan Express.js untuk mengelola data Karyawan.

## Identitas

- Nama: M. Rezki Riopaldy
- NPM: 2428240117
- Topik: Kepegawaian
- Resource: Karyawan
- Endpoint: `/employees`

## Teknologi

- Node.js
- Express.js
- Postman

## Instalasi

Install dependency dengan perintah:

```bash
npm install

Menjalankan Project

Untuk menjalankan server dalam mode development:

npm run dev

Server dapat diakses melalui:

http://localhost:3000
Endpoint API
Method	Endpoint	Keterangan
GET	/employees	Menampilkan semua data karyawan
GET	/employees/:id	Menampilkan data karyawan berdasarkan ID
GET	/employees?departemen=Keuangan	Filter karyawan berdasarkan departemen
POST	/employees	Menambahkan data karyawan
PUT	/employees/:id	Mengubah data karyawan
DELETE	/employees/:id	Menghapus data karyawan
Contoh Data
{
  "nip": "EMP-0045",
  "nama": "Agus Pratama",
  "jabatan": "Staf Akuntansi",
  "departemen": "Keuangan",
  "gaji": 6500000
}
Pengujian

Pengujian RESTful API dilakukan menggunakan Postman dengan beberapa skenario, meliputi:

Menampilkan seluruh data karyawan
Menampilkan data berdasarkan ID
Filter berdasarkan departemen
Menambahkan data karyawan
Validasi data
Mengubah data karyawan
Menghapus data karyawan
Pengujian ID yang tidak ditemukan
Deployment

Deployment API dilakukan menggunakan Vercel.

URL deployment akan ditambahkan setelah proses deployment selesai.