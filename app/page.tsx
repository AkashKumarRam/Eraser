"use client"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {

  const {user} = useKindeBrowserClient()

  
  return (
    <div>
       <Header/>

       <Hero/>
    </div>
  );
}
