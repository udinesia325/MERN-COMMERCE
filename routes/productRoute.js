const router = require("express").Router()
const path = require("path")
const multer = require("multer")
const jwtDecode = require("../middleware/jwtDecode")
const adminOnly = require("../middleware/adminOnly")
const {findAll,findById,createProduct,updateProduct,deleteProduct} = require("../controllers/productController")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"..","public","img"))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
  }
})

const upload = multer({ storage: storage })
router.get("/",findAll)
router.get("/:id",findById)
router.post("/",jwtDecode,adminOnly, upload.single("gambar"),createProduct)
router.put("/:id",jwtDecode,adminOnly, upload.single("gambar"),updateProduct)
router.delete("/:id",jwtDecode,adminOnly,deleteProduct)
module.exports = router