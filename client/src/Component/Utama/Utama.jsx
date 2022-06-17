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
    	<h1 className="font-poppins font-semibold text-2xl mt-3 mb-4">Popular Product</h1>
      <div className="flex flex-col justify-center items-center gap-4
                      md:flex-row md:gap-x-6 md:justify-start">
        {error && "Terjadi Kesalahan :(" }
        {products.length > 0 && products.map((product,index)=>(
        <Card key={index} harga={product.harga} nama_barang={product.nama_barang} gambar={"http://localhost:8000"+product.gambar} stock={product.stock} rating={product.rating} keterangan={product.keterangan}/>
        ))}
      </div>
    	
    </div>
   </>
  );
}

export default Utama;