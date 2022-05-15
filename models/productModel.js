const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
  nama_barang:{
    type:String,
    required:true
  },
  gambar:{
    type: String,
    required:true
  },
  keterangan:{
    type: String,
    required:true
  },
  harga:{
    type: String,
    required:true
  },
  rating:{
    type: Number,
    required:true
  },
  stock:{
    type: Number,
    required:true
  },
})

module.exports = mongoose.model("product",productSchema)