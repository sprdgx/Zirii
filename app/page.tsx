"use client";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import hero from '@/components/img/hero.gif'

export default function Home() {

  const {user} = useKindeBrowserClient();

  useEffect(() => {
    console.log("--", user);
  }, [user]);

  return (
    <div className="relative ">
      <Image
        src={hero} // Ensure this is the correct path to your image
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
