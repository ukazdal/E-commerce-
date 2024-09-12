
import { RxAvatar } from "react-icons/rx";

interface AvatarProps {
    image?: string;
}

const Avatar:React.FC<AvatarProps> = ({image}) => {
 if(image) return <img src={image} alt="avatar" className="rounded-full h-10 w-10" />
 return <div><RxAvatar size={40} /></div>

}

export default Avatar