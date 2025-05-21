// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Mic2,
  BarChart2,
  Link2,
  CheckCircle2,
  Truck,
  User,
  Package,
  PieChart,
  Phone,
  Mail,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* 1. Welcome Banner */}
      <section className="bg-gray-600 text-white px-8 py-20">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl font-extrabold flex items-center justify-center gap-2">
            <Globe size={32} /> Welcome to Blockchain Agriculture{" "}
            <Mic2 size={32} />
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Empowering South African farmers through technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/learn-more">
              <Button
                variant="outline"
                className="text-black border-white hover:bg-white hover:text-gray-800"
              >
                Learn More
              </Button>
            </Link>
            <Link href="/farmer">
              <Button
                variant="outline"
                className="bg-yellow-400 font-bold border-blue-600 hover:bg-white hover:text-gray-800 active:bg-gray-200 rounded-xl transition-colors"
              >
                Register as Farmer
              </Button>
            </Link>
            {/* <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
              Register as Farmer
            </Button> */}
            {/* <Link href="/retailer">
              <Button
                variant="outline"
                className="text-black border-white hover:bg-white hover:text-gray-800"
              >
                Register as Retailer
              </Button>
            </Link> */}
            <Link href="/retailer">
              <Button
                variant="outline"
                className="text-blue-600 font-bold border-blue-600 hover:bg-white hover:text-gray-800 active:bg-gray-200 rounded-xl transition-colors"
              >
                Register as Retailer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Dashboard Overview */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2 text-gray-800">
            <BarChart2 size={28} className="text-green-600" /> Dashboard
            Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Link2, label: "Blockchain Traceability" },
              { icon: CheckCircle2, label: "Verified Farmers" },
              { icon: Truck, label: "Logistics Status" },
              { icon: Package, label: "Inventory Levels" },
            ].map((item) => (
              <Card
                key={item.label}
                className="flex flex-col border-t-4 border-green-600 items-center justify-center p-6 hover:shadow-xl transition"
              >
                <item.icon size={36} className="text-green-600 mb-4" />
                <span className="font-medium text-gray-700">{item.label}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Choose Your Role */}
      <section className="bg-purple-200 px-4 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-gray-800">
            <User size={24} className="text-green-600" /> Choose Your Role
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
              Register as Farmer
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3">
              Register as Retailer
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              Logistics Partner Signup
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Featured Produce Listings */}
      <section className="bg-yellow-50 px-4 py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2 text-gray-800">
            <PieChart size={28} className="text-green-600" /> Featured Produce
            Listings
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { emoji: "🍅", name: "Organic Tomatoes", region: "Limpopo" },
              { emoji: "🥬", name: "Spinach", region: "Eastern Cape" },
              { emoji: "🐄", name: "Beef", region: "Free State" },
            ].map((item) => (
              <Card
                key={item.name}
                className="mx-auto w-80 border-2 border-yellow-400 rounded-lg overflow-hidden"
              >
                <div className="bg-white p-4 flex justify-center">
                  <div className="text-5xl mb-4">{item.emoji}</div>
                </div>
                <CardContent className="px-6 py-4 text-center">
                  <h3 className="text-xl font-semibold flex items-center justify-center mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.region}</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    View Contract
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trusted Logistics Partners */}
      <section className="bg-blue-50 px-4 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 flex items-center justify-center gap-2 text-gray-800">
            <Truck size={28} className="text-green-600" /> Trusted Logistics
            Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Vector Logistics", "Imperial", "Barloworld"].map((name) => (
              <Button
                key={name}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-5 py-2"
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Insights & Tools */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2 text-gray-800">
            <BarChart2 size={28} className="text-green-600" /> Insights & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              "Market Trends",
              "Price Index",
              "Weather by Region",
              "Climate Impact Zones",
            ].map((tool) => (
              <Card key={tool} className="p-6 hover:shadow-md transition">
                {tool}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Multi-language Support */}
      <section className="bg-green-300 px-4 py-16">
        <div className="container mx-auto text-center space-y-4">
          <h3 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800">
            <Globe size={28} className="text-green-600" /> Multi-language
            Support
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-xl">
            {["🇿🇦 IsiZulu", "🇿🇦 Sesotho", "🇿🇦 Afrikaans", "🇿🇦 English"].map(
              (l) => (
                <span key={l} className="px-4 py-2 bg-white rounded shadow">
                  {l}
                </span>
              )
            )}
            <Button variant="outline" className="ml-4 px-5 py-2">
              Voice Commands Beta
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Utility Links */}
      <section className="bg-gray-100 px-4 py-16">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-8 text-gray-800">
            {["Smart Contract Templates", "Payments", "Track My Order"].map(
              (link) => (
                <Link
                  key={link}
                  href="#"
                  className="underline text-lg hover:text-green-600 transition"
                >
                  {link}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-green-700 text-white px-4 pt-12 pb-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources/farmers"
                  className="text-yellow-300 hover:underline"
                >
                  Farmer Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/onboarding/retailer"
                  className="text-yellow-300 hover:underline"
                >
                  Retailer Onboarding
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance/bbbee"
                  className="text-yellow-300 hover:underline"
                >
                  BBBEE Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-yellow-300 hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-yellow-300 hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/smart-contracts"
                  className="text-yellow-300 hover:underline"
                >
                  Smart Contract Docs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>0800 123 456</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <Link
                  href="mailto:hello@bentickagri.co.za"
                  className="text-yellow-300 hover:underline"
                >
                  hello@bentickagri.co.za
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto border-t border-green-600 mt-8" />

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          <Image
            src="/Bbb.png"
            alt="BBBEE Level 1"
            width={120}
            height={40}
            className="object-contain"
          />
          <Image
            src="/Hyperledger.png"
            alt="Powered by Hyperledger"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        <p className="text-center text-gray-300 text-sm mt-6">
          © 2025 BENTICK³ | Powered by Hyperledger | South Africa za
        </p>
      </footer>
    </>
  );
}
