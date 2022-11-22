const { validationResult } = require("express-validator");

const errorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      errors: errors.array(),
      ok: false 
    });
  }

  next();

}

module.exports = errorHandler;