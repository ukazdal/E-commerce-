"use client";

import { useForm,SubmitHandler, FieldValues } from "react-hook-form";
import AuthContainer from "../containers/AuthContainer";
import Button from "../general/Button";
import Heading from "../general/Heading";
import Input from "../general/Input";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { useEffect } from "react";


interface RegisterClientProps {
  currentUser: User | null | undefined
}

const RegisterClient:React.FC<RegisterClientProps> = ({currentUser}) => {
  const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<FieldValues>()
      
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('/api/register', data).then(() => {
          toast.success("User registered successfully.");
          signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
          }).then((callback) => {
            if(callback?.ok){
              router.push('/cart');
              router.refresh();
              toast.success("Logged in successfully.");
            }
            if(callback?.error){
              toast.error(callback.error);
            }
          });
        }).catch((error) => {
          console.error("Error during registration:", error);
          toast.error("An error occurred during registration.");
        });
      };
      
      useEffect(() => {
        if(currentUser) {
          router.push('/cart')
          router.refresh();
        }
      }, [])
      
  return (
    <AuthContainer>
       <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Register"  center />
            <Input id="name" placeholder="Name" type="text" required register={register} errors={errors} />
            <Input id="email" placeholder="E-mail" type="text" required register={register} errors={errors} />
            <Input id="password" placeholder="Password" type="password" required register={register} errors={errors} />
            
            <Button text="Register" onClick={handleSubmit(onSubmit)}/>
            <div className="flex items-center justify-center text-sm text-gray-500">
                If you have registered before, 
                <Link href="/login" className="underline ml-1 md:hover:text-blue-400 duration-200"> click here</Link>
           </div>
            <div className="text-center my-2 font-bold text-xl">OR</div>
            <Button text="Register with Google" outline onClick={()=>{}} icon={FaGoogle}/>
       </div>
    </AuthContainer>
  )
}

export default RegisterClient;