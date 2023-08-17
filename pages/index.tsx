import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaWindows} from 'react-icons/fa';
import { FcGoogle} from "react-icons/fc";
import React, { useState, FormEventHandler } from 'react';
import SignIn from './auth/Sigin';







export default function Home() {


  return (
   <>
<SignIn/>
   </>
       
  )
}
