import {NextPage} from "next";
import { FaWindows} from 'react-icons/fa';
import { FcGoogle} from "react-icons/fc";
import React, { useState, FormEventHandler } from 'react';
        import { signIn, useSession } from 'next-auth/react';
        import { useRouter } from 'next/router';



interface props {}
const SignIn = () => {
          const router = useRouter();
          const { data: session } = useSession();
  const [userInfo,setuserInfo]=useState ({email:"",password:""});
         const [loginError, setLoginError] = useState('');

  const handleSubmit:FormEventHandler<HTMLFormElement>=async(e)=>{
    e.preventDefault();

   const res=await signIn("credentials", {
   email:userInfo.email,
    password: userInfo.password,
    redirect: false
});


if (res?.ok) {
  // Redirect to the logedin page after successful login
  router.push('/logedIn');
} else {
  // Show login error message
  setLoginError('Invalid credentials. Please try again.');
}

};

  
  return (
    <>
    <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center min-h-screen py-2  bg-gradient-to-r from-cyan-300 to-blue-700 bg-cover">
                <img className='mt-3  w-64' src="https://me.classera.com/img/classera_logo_white.png?93c14775-d6a8-51df-97b2-7553b96c8787" alt="no image" />
            
            <div className='mt-9 bg-white rounded-t-md rounded-b-md w-72 pl-9'>
                    <input className=' outline-none border-b pl-2 pt-8 pb-2 mt-4 text-sm' 
                    type="email"
                    placeholder='Login Name '
                    value={userInfo.email}
                    onChange={({target})=>
                    setuserInfo({...userInfo,email:target.value})
                    }
                      />
                    <input className='outline-none border-b pt-8 pb-2 pl-2 mt-3 text-sm ' 
                    type="password" 
                    placeholder='passwords' 
                    value={userInfo.password}
                    onChange={({target})=>
                    setuserInfo({...userInfo,password:target.value})
                    }
                    />
             
              <a className=' text-blue-400  text-xs font-bold mt-5 inline-block ' href="#"> Forgot Password ?</a>
              
              <button className='bg-gradient-to-r from-cyan-300  to-blue-700 mb-4 text-white font-sans  hover:opacity-80 font-medium text-lg shadow-cyan-500/50 rounded border-s mt-5 w-11/12 pr-7 pl-7 pt-2 pb-2'> LOGIN</button>
              {<p className="text-red-500 mb-11 m-auto">{loginError}</p>}
              <p className='w-11/12 text-center border-b-2 leading-{0.1em} text-slate-500 text-xs m'><span>Or Login With</span></p><br />
            
              <div className='flex justify-center mb-16'>
                <a href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=df717cd3-94a4-4685-85b5-bb5c4fd9a48c&scope=User.Read%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fme.classera.com%2F&client-request-id=c024beee-4421-4de9-84b9-daf666ed1fbc&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.12.1&x-client-OS=&x-client-CPU=&client_info=1&code_challenge=OAmY6m5gpNboB9gnsAFIF6GPhpwRJXiPbRNae-kEhFM&code_challenge_method=S256&nonce=b7a660ca-c011-4db7-832f-3d812d744077&state=eyJpZCI6IjYxMWNjYTM5LTRlYzktNDQ3Ni1hZDA1LWMxMWIyNzQ2YWVmOSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&sso_reload=true" className='border-2 border-gray-200 rounded-full p-2 mx-1'>
                  <FaWindows className='text-3xl'/>
                </a>

                <a href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&state=72938b3f3357e6f44760ed0476733530&redirect_uri=https%3A%2F%2Fme.classera.com%2Fusers%2Fgoogle_login&response_type=code&client_id=351910993865-5t7sb3re5j9gbkv1vserb2djbef0ljud.apps.googleusercontent.com&access_type=offline&service=lso&o2v=1&flowName=GeneralOAuthFlow" className='border-2 border-gray-200 rounded-full p-2 mx-1'>
                  <FcGoogle className='text-3xl'/>
                </a>
              </div>
             
            </div>
             <img className='mt-6 opacity-80 w-64' src="https://me.classera.com/img/learning-login.png?4b5b5048-7969-55df-afd8-97236b57e9f0" alt="no pic" />
        </div>
   </form>
   
    </>
  )
};

export default SignIn