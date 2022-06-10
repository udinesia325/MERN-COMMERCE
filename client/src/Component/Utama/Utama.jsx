import {
  Swiper,
  SwiperSlide
} from "swiper/react";
import {useEffect,useState} from "react"
import "swiper/css";
import Card from "../Card/Card"
import CarouselHotSale from "../carouselHotSale/carouselHotSale"
import {axiosInstance} from "../../config"
function Utama() {
  const [products,setProducts] = useState([])
  const [error,setError] = useState(false)
  const fetchData = async () => {
    try{
     const response = await axiosInstance.get("product")
     setProducts(response.data)
    }catch(err){
      setError(true)
      console.log("Terjadi kesalahan saat mengambil data");
    }
  }
  useEffect(()=>{
   fetchData()
  },[])
  return (
    <>
    <CarouselHotSale />
    <div className="w-[90%] px-4 py-2 mx-auto">
    	<h1 className="font-semibold text-2xl">Produk Populer</h1>
    	{error && "Terjadi Kesalahan :(" }
    	{products.length > 0 && products.map((product,index)=>(
    	<Card key={index} harga={product.harga} nama_barang={product.nama_barang} gambar={"http://localhost:8000"+product.gambar} stock={product.stock} rating={product.rating} keterangan={product.keterangan}/>
    	))}
    </div>
   </>
  );
}

export default Utama;