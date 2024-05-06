
import React from 'react'
// import { Card } from "flowbite-react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { Metadata} from "next";

export const metadata: Metadata = {
	title: "Policy",
	description: "ISTAD Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "ISTAD Ecommerce Web",
		description:
			"ISTAD Ecommerce Web is a web application for selling products.",
		images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
	},
};

export default function Policy() {
  // const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <>
      <main>
        <div className="flex flex-col md:flex-row items-center justify-between p-4 mt-4 shadow-md">
          <div className="md:mr-4 mb-4 md:mb-0 max-w-[500px] w-[100%]">
            <img src="/Privacy-Policy.png" alt="Company Profile" className="w-full h-auto rounded-full max-w-[100%]"  />
          </div>
          <div className='max-w-[500px] w-[100%]'>
            <h1 className="text-3xl md:text-2xl font-semibold  mb-2 text-right text-violet-800">Policy in Company</h1>
            <p className="text-sm md:text-base text-gray-600">This policy outlines the accepted payment methods, billing procedures, and refund/return policies. It includes information about accepted currencies, transaction fees, payment security measures, and the process for requesting refunds or exchanges.</p>
          </div>
        </div>

        <div className='mt-8 flex flex-col items-center'>
        <h1 className="text-2xl mb-3 font-semibold tracking-widest text-violet-800">MODLE</h1>
        {/* <p className='mb-5 text-center max-w-lg tracking-wide'>We pride ourselves on fostering a supportive and inclusive environment where everyone contributions are valued and respected.</p> */}
        <div className='flex flex-wrap justify-center gap-5'>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
          </Card>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="font-bold text-large">Frontend Radio</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                />
              </CardBody>
            </Card>
        </div>
        </div>

        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center mt-8 pb-6">
        <h2 className="text-2xl font-semibold m-5 text-center tracking-widest text-violet-800">CONTECT US</h2>
        <div className="w-full md:w-screen flex items-center justify-center">
          <div className="max-w-4xl w-full p-8 bg-white flex flex-col md:flex-row items-center justify-center md:justify-start">
            <div className="flex-grow">
              <form className="w-full md:w-auto">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="email" id="email" name="email" className="mt-1 p-3 block w-full border-violet-800 border-1 rounded-md shadow-md " />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 p-3 block w-full border-violet-800 border-1 rounded-md shadow-md " />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" className="mt-1 p-3 block w-full border-violet-800 border-1 rounded-md shadow-md "></textarea>
                </div>
                <button type="submit" className="px-6 py-3 bg-violet-800 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
              </form>
            </div>
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-16">
              <img src="/Policy.webp" alt="Contact" className="h-[200px] md:h-auto w-[300px] md:w-[400px] object-cover" />
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
