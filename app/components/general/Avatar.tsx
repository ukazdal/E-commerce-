
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

interface AvatarProps {
    image?: string;
}

const Avatar:React.FC<AvatarProps> = ({image}) => {
 if(image) return <Image width={40} height={40} src={image} alt="avatar" className="rounded-full" />
 return <div><RxAvatar size={40} /></div>

}

export default Avatar