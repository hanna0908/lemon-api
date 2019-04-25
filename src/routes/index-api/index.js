let dbName = "lemon";
let Mongo = require("mongodb-curd");
module.exports = {
    //删除业务逻辑
    removeBill(req, res, next) {
        let { _id } = req.query;
        if (!_id) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        Mongo.find(dbName, "bill", req.query, (rs) => {
            console.log(rs)
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success" })
            }
        })
    },
    //添加业务逻辑
    addBill(req, res, next) {
        let { type, userId, name, icon, money, Time } = req.body
        if (!type || !userId || !name || !icon || !money || !Time) {
            return res.send({ code: 2, msg: "参数不完整" })
        }
        Mongo.insert(dbName, "bill", req.body, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success" })
            }
        })
    },
    //查找业务逻辑
    findBill(req, res, next) {
        let { Time, name, type, userId } = req.query
        console.log(Time);
        if (!Time || !userId) {
            return res.send({ code: 2, msg: "参数不完整" })
        }

        let obj = { Time: new RegExp(Time), userId }
        if (type) {
            obj.type = type;
        }
        if (name) {
            obj.name = name;
        }

        Mongo.find(dbName, "bill", obj, (rs) => {
            if (!rs) {
                res.send({ code: 0, msg: "error" })
            } else {
                res.send({ code: 1, msg: "success", data: rs })
            }
        })
    }

}