// components/FlipkartNavbar.js
"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import Logo from "../image/logo.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white p-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-black text-2xl font-bold">
        <Image src={Logo} width={150} height={60} alt='Flipkart' />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-4 items-center relative w-3/5">
          {/* Search Icon */}
          <AiOutlineSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />

          <input
            type="text"
            className="pl-10 pr-4 py-2 w-full rounded-md text-black bg-[#bec8ff51] focus:outline-none"
            placeholder="Search for products, brands and more"
          />
          {/* <button className="ml-2 bg-yellow-400 text-gray-800 px-4 py-2 rounded-md hover:bg-yellow-500 focus:outline-none">
            Search
          </button> */}
        </div>

        {/* User Actions */}
        <div className="flex items-center justify-end space-x-4 w-2/5">
          <Link href="/login" className="text-black hover:text-gray-200  flex items-center space-x-2">
          <FaRegCircleUser size={24} />
          <span className="ml-2 hidden md:block">Login</span>
          </Link>
          <Link href="/cart" className="flex items-center text-black hover:text-gray-200">
            <AiOutlineShoppingCart size={24} />
            <span className="ml-2 hidden md:block">Cart</span>
          </Link>
          <Link href="/more" className="text-black hover:text-gray-200 hidden md:block">
          <IoMdMore />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/search" className="block text-black hover:bg-blue-700 p-2 rounded-md">
            Search
          </Link>
          <Link href="/login" className="block text-black hover:bg-blue-700 p-2 rounded-md">
            Login
          </Link>
          <Link href="/more" className="block text-black hover:bg-blue-700 p-2 rounded-md">
            More
          </Link>
          <Link href="/cart" className="block text-black hover:bg-blue-700 p-2 rounded-md">
            Cart
          </Link>
        </div>
      )}
    </nav>
  )
}
