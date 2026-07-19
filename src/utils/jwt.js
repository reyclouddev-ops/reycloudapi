const jwt = require("jsonwebtoken");

class JWT {

    static create(payload) {

        return jwt.sign(

            payload,

            process.env.JWT_SECRET,

            {

                expiresIn: process.env.JWT_EXPIRES_IN || "7d"

            }

        );

    }

    static verify(token) {

        return jwt.verify(

            token,

            process.env.JWT_SECRET

        );

    }

}

module.exports = JWT;
