import { UploadInput } from "./UploadInput"
import { TextInput } from "./TextInput"
import { Buttom } from "./Buttom"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useShowTicket } from "../../hooks/UseShowTicket"
import { useUserStore } from "../../store/User"
import { useState, type ChangeEvent } from "react"

type Inputs = {
  fullName: string;
  email: string;
  gitHubUser: string;
}

export const Form = () => {

  const[imageUrl, setImageUrl] = useState<string>('');

  const {
    register,
    formState: {errors},
    handleSubmit
  } = useForm<Inputs>()
  
  const context = useShowTicket();
  const useStore = useUserStore()

  const sendForm: SubmitHandler<Inputs> = (data) => {
    
    const { email, fullName, gitHubUser} = data

    context.setShowTicket(true)
    useStore.setUser({
      email,
      fullName,
      gitHubUser,
      url: imageUrl
    })
   
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
      
    const file = e.target.files?.[0]
    if(file) {
      const url = URL.createObjectURL(file);
      console.log(file)
      console.log(url)
      setImageUrl(url)
    }
    }

  return (
    <form className="" onSubmit={handleSubmit(sendForm)}>
        <UploadInput 
        url={imageUrl}
          onChange={handleChange}
        />
        <div className="flex flex-col gap-6">
        <TextInput 
        {...register("fullName", {required: "Full Name is required"})}
        label= 'Full Name'
        placeholder="Tu nombre"
        isError={errors.fullName?.type === 'required'}
        errorMessage={errors.fullName?.message}
        />
        <TextInput 
        {...register("email", {
          required: "Email is required",
          pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        })}
        label= 'Email Address' 
        placeholder="Tu Email"
        type="email"
        isError={errors.email?.type === 'required' || errors.email?.type === 'pattern'}
        errorMessage={errors.email?.message || 'Plase provide a valid email'}
        />
        <TextInput
        {...register("gitHubUser")} 
        label= 'Github Username'
        placeholder="Tu Username de Github"
         />
         <Buttom />
        </div>
    </form>
  )
}
