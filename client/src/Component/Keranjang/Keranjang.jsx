import { Link } from "react-router-dom";
import CardKeranjang from "../Card/CardKeranjang";

const Keranjang = () => {
	return (
		<div className="container w-4/5 h-[650px] p-8 mx-auto shadow-xl">
			<div className="flex items-center border-b-2 justify-center md:justify-start">
			  <p className="font-semibold text-xs hover:cursor-pointer hover:underline mr-12 text-blue-400">
					<Link to="/">{/*&#8592;*/}Kembali</Link>
				</p>
				<h1 className="sm:text-xl text-sm font-semibold text-base md:font-bold">Keranjang Saya</h1>
			</div>
			<div className="w-full h-full flex">
				{/*<h1 className="font-base text-3xl m-auto">Fitur Ini Belum Berfungsi</h1>*/}
				<CardKeranjang />
			</div>
		</div>
	)
}

export default Keranjang;