const notFoundHandler = (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Endpoint tidak ditemukan",
    data: null
  });
};

const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      status: "error",
      message: "JSON request tidak valid",
      data: null
    });
  }

  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal server error",
    data: null
  });
};

module.exports = {
  notFoundHandler,
  errorHandler
};