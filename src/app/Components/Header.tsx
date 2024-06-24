// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";
import Seller from "../image/Store-9eeae2.svg";
import Logo from "../image/fkheaderlogo_exploreplus-44005d.svg";
import More from "../image/header_3verticalDots-ea7819.svg";
import Cart from "../image/header_cart-eed150.svg";
import Plus from "../image/fkplus-4ff29a.svg";
import Order from "../image/orders-bfe8c4.svg";
import Reward from "../image/rewards-fbd212.svg";
import gift from "../image/giftCard-bd87e1.svg";
import Notification from "../image/notificationPreferences-cfffaf.svg";
import CustomerCare from "../image/helpcenter-7d90c0.svg";
import Advertise from "../image/advertise-298691.svg";
import Download from "../image/downloadApp-2ea657.svg";
// import Profile from "../image/profile-52e0dc.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-black text-2xl font-bold p-3 mx-4">
          <Image src={Logo} width={150} height={60} alt="Flipkart" />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-4 items-center relative w-3/5">
          <AiOutlineSearch
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
          <input
            type="text"
            className="pl-10 pr-4 py-2 w-full rounded-md text-black bg-[#bec8ff51] focus:outline-none"
            placeholder="Search for products, brands and more"
          />
        </div>

        {/* User Actions */}
        <div className="flex items-center justify-end space-x-4 w-2/5">
          {/* Login Dropdown */}
          <div className="relative group">
            <Link
              href="/login"
              className="text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:rounded-lg flex items-center space-x-2 mx-1 p-2"
            >
              {/* <Image src={Profile} width={24} height={24} alt="Profile" /> */}
              <CgProfile />
              <span className="ml-2 hidden md:block">Login</span>
              <MdKeyboardArrowDown />
            </Link>

            {/* Dropdown Menu */}
            <div className="hidden group-hover:block absolute right-0 mt-2 w-60 bg-white border rounded-lg shadow-lg z-50">
              <div className="flex items-center justify-between ml-4">
                New customer?
                <Link
                  href="/signup"
                  className="block px-4 py-2 text-blue-600 hover:bg-gray-100"
                >
                  Sign Up
                </Link>
              </div>
              <hr />
              <Link
                href="/profile"
                className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-gray-100"
              >
                <CgProfile />
                <span className="ml-2 hidden md:block">My Profile</span>
              </Link>
              <Link
                href="/pluszone"
                className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-gray-100"
              >
                <Image src={Plus} width={18} height={18} alt="Plus" />
                <span className="ml-2 hidden md:block">Flipkart Plus Zone</span>
              </Link>
              <Link
                href="/orders"
                className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-gray-100"
              >
                <Image src={Order} width={18} height={18} alt="Order" />
                <span className="ml-2 hidden md:block">Orders</span>
              </Link>
              <Link
                href="/wishlist"
                className="flex items-center space-x-2  px-4 py-2 text-black hover:bg-gray-100"
              >
                <IoMdHeartEmpty />
                <span className="ml-2 hidden md:block">Wishlist</span>
              </Link>
              <Link
                href="/reward"
                className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-gray-100"
              >
                <Image src={Reward} width={18} height={18} alt="Reward" />
                <span className="ml-2 hidden md:block">Reward</span>
              </Link>
              <Link
                href="/giftcard"
                className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-gray-100"
              >
                <Image src={gift} width={18} height={18} alt="gift" />
                <span className="ml-2 hidden md:block">Gift Card</span>
              </Link>
            </div>
          </div>

          <Link href="/cart" className="flex items-center text-black mx-1">
            <Image src={Cart} width={24} height={24} alt="Cart" />
            <span className="ml-2 hidden md:block">Cart</span>
          </Link>
          <Link href="/seller" className="flex items-center text-black mx-1">
            <Image src={Seller} width={24} height={24} alt="Seller" />
            <span className="ml-2 hidden md:block">Become a Seller</span>
          </Link>
          <div className="relative group">
            <Link
              href="/more"
              className="text-black hover:bg-[#edebebd7] hover:border-gray-400 hover:rounded-lg flex items-center space-x-2 mx-1 p-2"
            >
              {/* <Image src={Profile} width={24} height={24} alt="Profile" /> */}
              <Image src={More} width={24} height={24} alt="More" />
            </Link>

            {/* Dropdown Menu */}
            <div className="hidden group-hover:block absolute right-0 mt-2 w-60 bg-white border rounded-lg shadow-lg z-50">
              <Link
                href="/notification"
                className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-gray-100"
              >
                <Image src={Notification} width={18} height={18} alt="Notification" />
                <span className="ml-2 hidden md:block">Notification Preferences</span>
              </Link>
              <Link
                href="/customercare"
                className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-gray-100"
              >
                <Image src={CustomerCare} width={18} height={18} alt="CustomerCare" />
                <span className="ml-2 hidden md:block">24x7 Customer Care</span>
              </Link>
              <Link
                href="/advertise"
                className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-gray-100"
              >
                <Image src={Advertise} width={18} height={18} alt="Advertise" />
                <span className="ml-2 hidden md:block">Advertise</span>
              </Link>
              <Link
                href="/download"
                className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-gray-100"
              >
                <Image src={Download} width={18} height={18} alt="Download" />
                <span className="ml-2 hidden md:block">Download App</span>
              </Link>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black"
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link
            href="/login"
            className="block text-black hover:bg-gray-200 p-2 rounded-md"
          >
            Login
          </Link>
          <Link
            href="/cart"
            className="block text-black hover:bg-gray-200 p-2 rounded-md"
          >
            Cart
          </Link>
          <Link
            href="/seller"
            className="block text-black hover:bg-gray-200 p-2 rounded-md"
          >
            Become a Seller
          </Link>
          <Link
            href="/more"
            className="block text-black hover:bg-gray-200 p-2 rounded-md"
          >
            More
          </Link>
        </div>
      )}
    </nav>
  );
}
