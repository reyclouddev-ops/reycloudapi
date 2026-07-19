class Response {

    static success(res, message = "Success", data = null, status = 200) {

        return res.status(status).json({

            success: true,

            message,

            data,

            timestamp: new Date().toISOString()

        });

    }

    static error(res, message = "Error", status = 400, errors = null) {

        return res.status(status).json({

            success: false,

            message,

            errors,

            timestamp: new Date().toISOString()

        });

    }

}

module.exports = Response;
