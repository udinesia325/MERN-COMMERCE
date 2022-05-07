const route = require("express").Router()
const {
  hello
} = require("../controllers/testController")
route.get("/", hello)

module.exports = route