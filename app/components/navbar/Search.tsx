
const Search = () => {
  return (
    <div className="hidden md:flex flex-1">
      <input className="py-2 px-3 rounded-l-md border-none outline-none flex flex-1" type="text" placeholder="Arama yap..." />
      <button className="p-2 bg-orange-800 rounded-r-md text-sm border border-transparent">Ara</button>
    </div>
  )
}

export default Search