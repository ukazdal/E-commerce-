import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[237px]">
        <div className="h-[137px]">
            <Image src="/images" layout="fill" objectFit="cover" alt={""} />
        </div>
    </div>
  )
}

export default Banner