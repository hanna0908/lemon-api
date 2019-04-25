let dbName = "lemon";
let Mongo = require("mongodb-curd");
module.exports = {
    getCustom(req, res, next) {
        Mongo.find(dbName, "custom", req.query, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success", data: rs })
            }
        })
    },
    getClassify(req, res, next) {
        let { type, userId } = req.body;
        if (!type || !userId) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        Mongo.find(dbName, "classify", { userId: { $in: ["*", userId] }, type }, (rs) => {
            console.log(rs)
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success", data: rs })
            }
        })
    },
    addClassify(req, res, next) {
        let { type, userId, name, icon, } = req.body
        console.log(type, userId, name, icon)
        if (!type || !userId || !name || !icon) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        Mongo.insert(dbName, "classify", req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success" })
            }
        })
    }

}