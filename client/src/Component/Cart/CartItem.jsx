export default function CartItem() {
  return (
     <div className="w-full rounded-xl shadow-lg  flex justify-between items-center p-4 min-h-16">
    <div className="flex flex-col gap-2">
      <img src="no" alt="coba" width="150" />
      <ul>
        <li>Barang :Iphone</li>
        <li>Harga :2000</li>
      </ul>
    </div>
    <div>
    <div className=" flex flex-col items-center gap-2">
    <span className="font-semibold">Total : 3000</span>
    <div className="h-8 w-24 border flex  items-center">
    <button className="flex-auto">+</button>
    <span className="flex-2">1</span>
    <button className="flex-auto">-</button>
    </div>
    </div>
    </div>
    </div>
   )
}