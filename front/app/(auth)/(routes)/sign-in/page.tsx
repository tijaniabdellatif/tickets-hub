"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "@/scoope/features/auth/authApi";
import { useAppSelector } from "@/scoope/store";


const styles = {
  title:
    "800px:text-[16px] text-[24px] text-black dark:text-white font-[500] font-Poppins text-center py-2",
  label: "text-[14px] font-Poppins text-black dark:text-white",
  input:
    "w-full text-black dark:text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px] font-Poppins",
  errorSpan: "text-red-500 pt-2 block",
  icons:
    "absolute bottom-3 right-2 z-1 cursor-pointer text-black dark:text-white",
  buttons:
    "flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[45px] w-full text-[16px] font-Poppins font-semibold",
};

export default function Home() {

  const [inputs,setInputs] = useState({

     fullname:"",
     username:"",
     password:'',
     email:'',

  });

  const stateData = useAppSelector((state) => state.auth);
  console.log(stateData);

  const [register,{data,error,isSuccess,status}] = useRegisterMutation();

  useEffect(() => {

      if(isSuccess){

         console.log(data?.message);
         console.log('this is my status : ',status);
      }

      if(error){
          const errorData = error as any;
          console.log(errorData.data.message)
      }
  } ,[isSuccess,error]);

  
  const handleChange = (e:any) => {

       
      setInputs({...inputs,[e.target.name]:e.target.value});
      
  }

  const handleSubmit = async (e:any) => {

        e.preventDefault();
        await register(inputs);
  }
  return (
    <>
      <div className="w-full">
        <h1 className={`${styles.title}`}>Create Your account</h1>

        <form onSubmit={handleSubmit}>
          <div className="w-full mt-5 relative mb-1">
            <input
              type={"text"}
              name="username"
              value={inputs.username}
              onChange={handleChange}
              id="username"
              placeholder="username..."
              className={`${styles.input}`}
            />
          </div>

          <div className="w-full mt-5 relative mb-1">
            <input
              type={"text"}
              name="fullname"
              value={inputs.fullname}
              id="fullname"
              onChange={handleChange}
              placeholder="fullname funny..."
              className={`${styles.input}`}
            />
          </div>
          <div className="w-full mt-5 relative mb-1">
            <input
              type={"email"}
              name="email"
              value={inputs.email}
              id="email"
              onChange={handleChange}
              placeholder="email funny..."
              className={`${styles.input}`}
            />
          </div>
          <div className="w-full mt-5 relative mb-1">
            <input
              type={"password"}
              name="password"
              value={inputs.password}
              id="password"
              onChange={handleChange}
              placeholder="password funny..."
              className={`${styles.input}`}
            />
          </div>
          <div className="w-full mt-5">
            <Button
              type="submit"
              variant={"outline"}
              className={`${styles.buttons}`}
            >Click me</Button>
          </div>
        </form>
      </div>
    </>
  );
}
