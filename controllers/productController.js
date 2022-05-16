const productModel = require("../models/productModel")
const fs = require("fs")
const path = require("path")
const findAll = async (req,res) => {
  try {
    let products = await productModel.find()
    products = JSON.parse(JSON.stringify(products))
    return res.status(200).json([...products.map(product => {
      return {
        ...product,
        gambar:`/img/${product.gambar}`
      }
    })])
  } catch (e) {
    return res.status(400).json(e+"")
  }
}
const findById = async (req,res) => {
  const id = req.params.id
  try{
    let product = await productModel.findById(id)
    product = JSON.parse(JSON.stringify(product))
    return res.status(200).json({...product,gambar:`/img/${product.gambar}`})
  } catch (e) {
    return res.status(500).json({
      message:e.toString()
    })
  }
}
const createProduct = async (req,res) => {
 const gambar = req.file
 const {nama_barang,harga, keterangan,stock,rating} =  req.body
 // cek apakah body ada yang belum terisi
if(
  !nama_barang ||
  !harga ||
  !keterangan ||
  !stock ||
  !rating ||
  !gambar
){
  //console.log(gambar);
  // hapus gambar jika validasi gagal
  if(gambar){
   hapusUpload(gambar)
  }
  return res.status(400).json({
    message:"Invalid body"
  })
}
  try{
  const newProduct = await productModel.create({
    nama_barang,
    gambar:gambar.filename,
    harga,
    stock,
    keterangan,
    rating
  })
  return res.status(201).json({
    message:"Produk baru berhasil ditambahkan",
    newProduct
  })
  }catch(e){
    hapusUpload(gambar)
    return res.status(500).json({
      message:"Server Error"+e
    })
  }

}
const hapusUpload = async (gambar) => {
  try{
  await fs.unlink(path.join(__dirname,"..","public","img",gambar.filename),()=>{})
  }catch(e){
    console.log(e);
  }
}

const updateProduct = async (req,res) => {
  const id = req.params.id
  try{
    const oldProduct = await productModel.findByIdAndUpdate(id,{...req.body,gambar:req.file.filename})
   // hapus foto lama jika ada foto baru
  if(req.file){
    await fs.unlink(path.join(__dirname,"..","public","img",oldProduct.gambar),()=>{})
  }
  const newProduct = await productModel.findById(req.params.id)
  return res.status(200).json({
    message:"Update Berhasil",
    product:newProduct
  })
  } catch (e){
    console.log("Error"+e);
    res.status(500).json({
      message:"terjadi kesalahan saat memperbarui data"
    })
  }
}

const deleteProduct = async (req,res) => {
  
  try{
    const data = await productModel.findByIdAndDelete(req.params.id)
    await fs.unlink(path.join(__dirname,"..","public","img",data.gambar),()=>{})
    res.status(200).json({
      message:"Berhasil Dihapus"
    })
  } catch (e) {
    res.status(500).json({
      message:"Terjadi kesalahan ketika menghapus data"
    })
  }
  
}
module.exports = {
  findAll,findById,createProduct,updateProduct,deleteProduct
}