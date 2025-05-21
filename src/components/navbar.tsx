// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Globe,
  Search,
  ChevronDown,
  Package,
  Activity,
  Droplet,
  Award,
  FileText,
  MapPin,
  AlertCircle,
  CheckCircle,
  ShoppingCart,
  Truck,
  Shield,
} from "lucide-react";

export function Navbar() {
  return (
    <header className="bg-white border-b-2 border-yellow-500">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.jpg"
              alt="Bentick³ Connect"
              width={40}
              height={20}
              className="object-contain"
            />
          </Link>

          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>

            {/* Marketplace */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center px-2 text-gray-700 hover:text-gray-900"
                >
                  <span>Marketplace</span>
                  <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Package size={16} /> <span>Products</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Activity size={16} /> <span>Livestock</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Droplet size={16} /> <span>Dairy</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Award size={16} /> <span>BBBEE-Certified</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contracts */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center px-2 text-gray-700 hover:text-gray-900"
                >
                  <span>Contracts</span>
                  <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <FileText size={16} /> <span>Templates</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Link href="/product-tracking">
                    <Button variant="ghost">Product Tracking</Button>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center space-x-2">
                  <AlertCircle size={16} /> <span>Dispute</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center space-x-2">
                  {/* <CheckCircle size={16} /> <span>Payments</span> */}
                  <Link href="/payments">
                    <Button variant="ghost">Payments</Button>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Partners */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center px-2 text-gray-700 hover:text-gray-900"
                >
                  <span>Partners</span>
                  <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <ShoppingCart size={16} /> <span>Retailers</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Truck size={16} /> <span>Logistics</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Shield size={16} /> <span>Government</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1">
                <Globe size={16} />
                <span>EN</span>
                <ChevronDown size={16} className="ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>EN</DropdownMenuItem>
              <DropdownMenuItem>FR</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="relative">
            <Input placeholder="Search..." className="pl-10 pr-3 w-48" />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
