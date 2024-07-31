import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[237px] bg-black flex items-center mb-3 md:mb-10">
        <div className="h-[137px] relative w-full">
            <Image src="/images/banner-1.jpg" className="w-full" layout="fill" objectFit="cover" alt={""} />
        </div>
    </div>
  )
}

export default Banner