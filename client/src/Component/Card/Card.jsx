import { BsFillCartPlusFill } from 'react-icons/bs';

const Card = ({gambar,harga,rating,stock,nama_barang,_id,keterangan}) => {
  return (
    <div className="card w-72 duration-500 py-2 
                    hover:cursor-pointer
                    border-slate-300 border
                    rounded">
    	<img className=" w-auto h-40 m-auto" src={gambar} alt="" />

      <div className="flex flex-col gap-px 
                      px-5 mt-3">
        <h2 className="font-poppins font-medium text-xl text-black-400">{nama_barang}</h2>

        <p className="mt-1 text-sm font-thin">
          {keterangan}
        </p>
        <div className="rating w-full flex items-center">
          {Array(rating).join(" ").split(" ").map((data,index)=> (
            <p className="text-yellow-400 text-3xl" key={index}>
            &#9733;
            </p>
          ))}
        </div>
        <p className=" ">
          {`Rp. ${harga}`}
        </p>
      </div>

      <div className="flex justify-end align-center gap-2
                        mt-5 px-3">
        <button className="hover:shadow-lg bg-green-400 
                          text-base font-semibold text-white 
                          py-1 px-4 
                          rounded">
          Beli
        </button>
        <button className="hover:shadow-lg bg-red-600 
                          text-base font-semibold text-white 
                          py-1 px-4 rounded 
                          flex items-center justify-center gap-2">
          <BsFillCartPlusFill className='text-white' />
          Keranjang
        </button>
      </div>
    </div>
  )
}
export default Card;