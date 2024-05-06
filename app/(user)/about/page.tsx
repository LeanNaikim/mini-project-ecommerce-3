
import React from 'react' 
import { Metadata} from "next";

export const metadata: Metadata = {
	title: "About Us",
	description: "ISTAD Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "ISTAD Ecommerce Web",
		description:
			"ISTAD Ecommerce Web is a web application for selling products.",
		images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
	},
};

export default function page() {
  return (
    <>
      <h1 className="text-violet-900 text-2xl tracking-widest font-bold text-center">WELCOME TO BAOB</h1>
      <div className="bg-slate-200 shadow-sm m-5 p-5">
        <h1 className="mb-2 text-xl tracking-widest text-violet-900">What is BAOB Ecommerc ?</h1>
        <p className="text-gray-700">E-commerce operates in various market segments and can be conducted through computers, tablets, smartphones, and other smart devices. Nearly every conceivable product and service is available through e-commerce transactions, including books, music, plane tickets, and financial services such as stock investing and online banking. This broad availability of goods and services has made e-commerce a disruptive technology, transforming the way consumers shop and businesses operate.</p>
      </div>

      <div className="bg-slate-200 shadow-sm m-5 p-5">
        <h1 className="mb-2 text-xl tracking-widest text-violet-900">Mission</h1>
        <p className="text-gray-700">It also defines the guiding principles and ethical standards that underpin the company's operations, culture, and decision-making processes. Key elements of a mission statement include:</p>
      </div>

      <div className="bg-slate-200 shadow-sm m-5 p-5">
        <h1 className="mb-2 text-xl tracking-widest text-violet-900">Vision</h1>
        <p className="text-gray-700">mission statement focuses on the present and immediate objectives of the e-commerce business, a vision statement looks towards the future. It expresses the business's long-term aspirations, typically spanning a period of five, ten, or more years.</p>
      </div>
    </>
  )
}
