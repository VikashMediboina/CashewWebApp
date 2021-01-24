var jwt = require('jsonwebtoken');
token = {}
token.generateToken = (data) => {
    return jwt.sign(data, 'I Am Vikash You Know One Thing I Cant BE A Part Of YOurs Life Of YOurs', { expiresIn: "7d" })
}
token.verifyToken = (token) => {
    return jwt.verify(token, 'I Am Vikash You Know One Thing I Cant BE A Part Of YOurs Life Of YOurs', (err, decoded) => {
        if (!err) {
            return decoded
        }
        else {
            return err
        }
    })
}
module.exports = token
