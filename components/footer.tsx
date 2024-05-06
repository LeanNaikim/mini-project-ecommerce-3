"use client";
import { Footer, 
  FooterBrand, 
  FooterCopyright, 
  FooterDivider, 
  FooterLink, 
  FooterLinkGroup ,
  FooterIcon,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="bg-slate-900 rounded-none">
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          {/* <FooterBrand
            href="https://flowbite.com"
            // src="/logo2.png"
            // alt="Flowbite Logo"
            style={{ color: 'white' }}
            // name="The meaning of life is shopping"
          /> */}
          <FooterLinkGroup className="text-white"  >
            <FooterLink href="/">BAOBAO</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider  className="text-white" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="susu™" year={2024} className="text-white" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
            <FooterIcon href="https://istad.co/" icon={BsFacebook} className="text-white"/>
            <FooterIcon href="https://istad.co/" icon={BsInstagram} className="text-white"/>
            <FooterIcon href="https://istad.co/" icon={BsTwitter} className="text-white"/>
            <FooterIcon href="https://istad.co/" icon={BsGithub} className="text-white"/>
            <FooterIcon href="https://istad.co/" icon={BsDribbble} className="text-white"/>
          </div>
        </div>
      </div>
    </Footer>
  );
}