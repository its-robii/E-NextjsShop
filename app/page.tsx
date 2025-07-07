"use client";
import { useState } from "react";
import { Search, CircleUserRound, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="w-full bg-[#F3F5F7] shadow-md">
      <div className="max-w-340 mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-[#000000] text-xl font-bold">
          MyShop
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/products" className="text-[#6C7275] hover:text-[#141718]">
              Products
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-[#6C7275] hover:text-[#141718]">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[#6C7275] hover:text-[#141718]">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <ul className="flex items-center space-x-4">
          {/* Search Toggle */}
          <li className="relative flex items-center">
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="text-gray-600 hover:text-blue-600"
              aria-label="Toggle Search"
            >
              <Search className="w-6 h-6" />
            </button>
            <input
              type="text"
              placeholder="Search"
              className={`absolute right-8 top-1/2 -translate-y-1/2 border rounded px-2 py-1 text-sm transition-all duration-300 ease-in-out bg-white placeholder:text-gray-400 ${
                showSearch
                  ? "w-[180px] opacity-100 visible"
                  : "w-0 opacity-0 invisible"
              }`}
            />
          </li>

          {/* User Icon */}
          <li>
            <Link href="/login" className="hover:text-blue-600">
              <CircleUserRound className="w-6 h-6" />
            </Link>
          </li>

          {/* Cart Icon */}
          <li>
            <Link href="/cart" className="hover:text-blue-600">
              <ShoppingBag className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

