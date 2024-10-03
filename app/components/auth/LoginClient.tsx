"use client";

import { useForm,SubmitHandler, FieldValues } from "react-hook-form";
import AuthContainer from "../containers/AuthContainer";
import Button from "../general/Button";
import Heading from "../general/Heading";
import Input from "../general/Input";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { User } from "@prisma/client";
import { useEffect } from "react";

interface LoginClientProps {
  currentUser: User | null | undefined
}


const LoginClient:React.FC<LoginClientProps> = ({currentUser}) => {
  const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<FieldValues>()
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn('credentials', {
          ...data,
          redirect: false,
        }).then((callback) => {
          if(callback?.ok){
            router.push('/cart')
            router.refresh();
            toast.success("Logged in successfully.")
          }
          if(callback?.error){
            toast.error(callback.error)
          }
        })
      }

      useEffect(() => {
        if(currentUser) {
          router.push('/cart')
          router.refresh();
        }
      }, [])

  return (
    <AuthContainer>
       <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Login"  center />
             <Input id="email" placeholder="E-mail" type="text" required register={register} errors={errors} />
            <Input id="password" placeholder="Password" type="password" required register={register} errors={errors} />
            
            <Button text="Log In" onClick={handleSubmit(onSubmit)}/>
           <div className="flex items-center justify-center text-sm text-gray-500">
            Click here to 
            <Link href="/register" className="underline ml-1 md:hover:text-blue-400 duration-200"> register</Link>
           </div>
            <div className="text-center my-2 font-bold text-xl">OR</div>
            <Button text="Log In with Google" outline onClick={()=> signIn('google')} icon={FaGoogle}/>
       </div>
    </AuthContainer>
  )
}

export default LoginClient;