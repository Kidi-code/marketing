"use client";

import { Mic2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LearnMorePage() {
  return (
    <main className="bg-gradient-to-b from-green-50 via-white to-white min-h-screen py-16 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-10">
        <h1 className="text-4xl font-extrabold flex items-center gap-3 text-green-700">
          <Globe size={32} className="text-green-500" />
          🌾 About Us – BENTICK³ CONNECT Agriculture
          <Mic2 size={32} className="text-green-500" />
        </h1>

        <p className="text-lg leading-relaxed">
          In South Africa, agriculture is more than an economic sector—it's a
          lifeline. It provides jobs, food security, and raw materials for
          countless industries. Yet, despite its importance, thousands of new
          and small-scale farmers face systemic challenges that hinder their
          ability to access the market, scale their operations, and become
          competitive players in the supply chain...
        </p>

        <p className="text-lg leading-relaxed">
          BENTICK³ CONNECT was founded with a bold vision: to create an
          inclusive and digitally enabled agricultural ecosystem...
        </p>

        <p className="text-lg leading-relaxed">
          Our platform isn’t just a marketplace — it’s a movement for
          sustainable transformation. We work to uplift the backbone of South
          Africa’s food system by:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>Providing transparent supply chains powered by blockchain.</li>
          <li>
            Creating smart contracts for fair pricing and instant payments.
          </li>
          <li>Giving farmers access to real-time market analytics.</li>
          <li>Connecting them with local retailers and ethical buyers.</li>
          <li>Linking them to essential farming equipment and tools.</li>
        </ul>

        <p className="text-lg leading-relaxed">
          By integrating agricultural suppliers, farmers, and buyers into one
          seamless platform, BENTICK³ CONNECT fosters rural development and
          builds a resilient food ecosystem.
        </p>

        <p className="italic font-semibold text-green-800 text-xl">
          Tagline: Harvesting trust, cultivating change.
        </p>

        <h2 className="text-2xl font-bold text-green-700 mt-10 border-b pb-1 border-green-300">
          🔗 How It Works – Step-by-Step
        </h2>

        <div className="space-y-6 text-lg text-gray-700">
          <p>
            <strong>1. Farmer Registration & Profile Setup:</strong> Emerging
            farmers register and set up verified digital profiles...
          </p>
          <p>
            <strong>2. Product Listing:</strong> Farmers list products with
            images, pricing, and availability...
          </p>
          <p>
            <strong>3. Secure Transactions:</strong> Smart contracts enable
            fair, instant payments...
          </p>
          <p>
            <strong>4. Traceability:</strong> Full blockchain-backed product
            tracking from farm to shelf...
          </p>
          <p>
            <strong>5. Equipment Access:</strong> Farmers connect with verified
            suppliers to rent or buy machinery...
          </p>
          <p>
            <strong>6. Market Analytics:</strong> AI-driven data informs farmers
            of pricing trends and demands...
          </p>
          <p>
            <strong>7. Delivery Support:</strong> Logistics coordination with
            proof of delivery linked to payment release...
          </p>
        </div>

        <h2 className="text-2xl font-bold text-green-700 mt-10 border-b pb-1 border-green-300">
          🌿 Why It Matters
        </h2>

        <p className="text-lg leading-relaxed">
          BENTICK³ CONNECT transforms agriculture by creating visibility,
          efficiency, and fairness:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>Farmers gain direct access to fair markets and better income.</li>
          <li>Retailers get traceable, locally sourced produce.</li>
          <li>Manufacturers reach emerging farmers with modern solutions.</li>
        </ul>

        <div className="pt-6">
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-200">
              ⬅ Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
