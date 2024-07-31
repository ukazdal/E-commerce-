"use client"
const Category = () => {
    const categories = [
        {
            name: "Electronics",
        },
        {
            name: "Clothing",
        },
        {
            name: "Shoes",
        },
        {
            name: "Books",
        },
        {
            name: "Furniture",
        },
        {
            name: "Accessories",
        },
    ]
  return (
    <div className="flex items-center justify-center px-3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
        {categories.map((category, index) => (
            <div  key={index} className="border text-slate-500 rounded-full min-w-[120px] flex flex-1 items-center justify-center px-3 py-2 cursor-pointer">{category.name}</div>
        ))}
    </div>
  )
}

export default Category