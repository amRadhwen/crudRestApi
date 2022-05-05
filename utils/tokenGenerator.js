const jwt = require("jsonwebtoken");

const jwt_secret_code = process.env.JWT_SECRET_CODE || "crudrestapijwtsecretcode"

module.exports.generateToken = (id, expireDate) => {
    return jwt.sign({id}, jwt_secret_code, {expiresIn: expireDate})
}
