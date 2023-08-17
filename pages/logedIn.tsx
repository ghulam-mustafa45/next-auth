import {NextPage} from "next";
import { useSession} from 'next-auth/react'

const logedin :NextPage = ():JSX.Element => {
    const session=useSession();
    console.log(session);
  return (
    <div className=" bg-yellow-100 h-96 mt-10 content-center  pt-[20%] ">
    <div className="bg-green-300 w-fit p-5 rounded-lg shadow-xl m-auto font-bold  text-lg text-blue-900">
      Congratulation You are Loged in
      <img src="https://media.makeameme.org/created/hurray-vp7m1t.jpg" alt="error" className="pt-4" />
    </div>
    
    </div>
    
  )
};

export default logedin