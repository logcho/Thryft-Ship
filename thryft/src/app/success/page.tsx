"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

export default function Success() {
  return (
    <main className="flex-1">
      <div className="p-4">
        <img src="/img/logo.png" alt="" className="w-52" />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 justify-items-center">
            <img src="/img/thank_you.png" alt="" className="sm:hidden w-96" />
            <img src="/img/logo2.png" alt="" className="sm:w-60 ml-[-20px] w-0"/>
            <h1 className="font-semibold text-center sm:text-2xl w-80 text-xl">Confirmation and tracking information will be sent to your email!</h1>
            <p className="pt-40 w-40 text-center">Are you a seller too? Check us out here <span className="text-customBlue">(hyper link).</span></p>
        </div>
        
      </div>
    </main>
  );
}
