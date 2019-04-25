let dbName = "lemon";
let Mongo = require("mongodb-curd");
module.exports = {
    getUser(req, res, next) {
        Mongo.find(dbName, "user", req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success", data: rs })
            }

        })

    }
}