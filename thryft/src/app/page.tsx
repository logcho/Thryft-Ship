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
import { useRouter } from "next/router";

export default function Home() {


  const [formData, setFormData] = useState({
    instagram: "@",
    product: "",
    email: "",
    confirmEmail: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const [emailMatch, setEmailMatch] = useState(true);
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled
    const { address2, ...requiredFields } = formData; // Disregard address2
    const allFieldsFilled = Object.values(requiredFields).every(
      (value) => value.trim() !== ""
    );
    setEmailMatch(formData.email === formData.confirmEmail);
    setIsFormComplete(allFieldsFilled && emailMatch);

    // Debugging output
    console.log("Form Data:", formData);
    console.log("Email Match:", emailMatch);
    console.log("Form Complete:", isFormComplete);
  }, [formData, emailMatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedFormData = { ...prev, [name]: value };
      return updatedFormData;
    });
  };

  const handleSubmit = () => {
    if (formData.email !== formData.confirmEmail) {
      console.error("Email and Confirm Email do not match.");
      setEmailMatch(false);
      return;
    }
    console.log("Form submitted:", formData);
    window.location.href = "http://localhost:3000/success"; // Full URL for development
  };

  return (
    <main className="flex-1">
      <div className="p-4">
        <img src="/img/logo.png" alt="" className="w-52" />
      </div>

      <div className="flex justify-center">
        <div className="flex-col justify-items-center">
          <img src="/img/thank_you.png" alt="" className="sm:w-[600px] w-96" />
          <Card className="sm:w-[600px] w-96">
            <CardHeader>
              <CardTitle className="text-xl">Your Shipping Information</CardTitle>
              <CardDescription className="text-black">
                Your Instagram Handle helps us match your address to your purchase. We will send your shipment tracking information to your email.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label>Instagram Handle</Label>
                  <Input
                    name="instagram"
                    type="text"
                    placeholder="@"
                    value={formData.instagram}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Product(s)</Label>
                  <Input
                    name="product"
                    type="text"
                    placeholder=""
                    value={formData.product}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder=""
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Confirm Email</Label>
                  <Input
                    name="confirmEmail"
                    type="email"
                    placeholder=""
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    style={{ borderColor: emailMatch ? '' : 'red' }}
                  />
                </div>
                <div>
                  <Label>First Name</Label>
                  <Input
                    name="firstName"
                    type="text"
                    placeholder=""
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input
                    name="lastName"
                    type="text"
                    placeholder=""
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Label>Address Line 1</Label>
              <Input
                name="address1"
                type="text"
                placeholder=""
                value={formData.address1}
                onChange={handleChange}
              />
              <Label>Apartment, Suite, Etc. (opt)</Label>
              <Input
                name="address2"
                type="text"
                placeholder=""
                value={formData.address2}
                onChange={handleChange}
              />
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Label>City</Label>
                  <Input
                    name="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>State</Label>
                  <Input
                    name="state"
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Zip Code</Label>
                  <Input
                    name="zip"
                    type="text"
                    placeholder="XXXXX"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid justify-items-center p-4">
                <Dialog>
                  <DialogTrigger disabled={!isFormComplete}>
                    <Button
                      className="w-28 bg-customBlue"
                      disabled={!isFormComplete}
                    >
                      Submit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-center">Confirm Shipping Details</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-1 justify-items-center text-center">
                      <p>Full Name: {formData.firstName} {formData.lastName}</p>
                      <p>Address Line 1: {formData.address1}</p>
                      <p>Address Line 2: {formData.address2}</p>
                      <p>Email: {formData.email}</p>
                      <p>Product: {formData.product}</p>
                    </div>
                    <div className="flex justify-center gap-4">
                      <DialogClose asChild>
                        <Button className="w-32 bg-white border-customBlue border-2 text-customBlue hover:text-white">Cancel and Edit</Button>
                      </DialogClose>
                      <Button className="w-32 bg-customBlue text-white" onClick={handleSubmit} disabled={!isFormComplete}>Submit</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-center text-customGrey">powered by Thryft Ship</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
